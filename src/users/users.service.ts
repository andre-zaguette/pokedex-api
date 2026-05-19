import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

type CreateUserInput = {
  name: string;
  email: string;
  passwordHash: string;
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateUserInput) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: input.email.toLowerCase() },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use.');
    }

    return this.prisma.user.create({
      data: {
        name: input.name,
        email: input.email.toLowerCase(),
        passwordHash: input.passwordHash,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }

  async update(id: string, data: { name?: string }) {
    return this.prisma.user.update({
      where: { id },
      data: { name: data.name },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async addFriend(userId: string, friendId: string) {
    if (userId === friendId) {
      throw new ConflictException('You cannot add yourself as a friend.');
    }

    // Check if friendship already exists
    const existing = await this.prisma.friendship.findFirst({
      where: {
        OR: [
          { senderId: userId, receiverId: friendId },
          { senderId: friendId, receiverId: userId },
        ],
      },
    });

    if (existing) {
      if (existing.status === 'ACCEPTED') {
        throw new ConflictException('Already friends.');
      }
      if (existing.senderId === userId) {
        throw new ConflictException('Friend request already sent.');
      }
      // If the other person sent a request, accept it automatically
      return this.acceptFriend(userId, friendId);
    }

    return this.prisma.friendship.create({
      data: {
        senderId: userId,
        receiverId: friendId,
        status: 'PENDING',
      },
    });
  }

  async getFriends(userId: string) {
    const friendships = await this.prisma.friendship.findMany({
      where: {
        OR: [
          { senderId: userId, status: 'ACCEPTED' },
          { receiverId: userId, status: 'ACCEPTED' },
        ],
      },
      include: {
        sender: {
          select: { id: true, name: true, email: true },
        },
        receiver: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return friendships.map((f) => (f.senderId === userId ? f.receiver : f.sender));
  }

  async getPendingRequests(userId: string) {
    return this.prisma.friendship.findMany({
      where: {
        receiverId: userId,
        status: 'PENDING',
      },
      include: {
        sender: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  async acceptFriend(userId: string, friendId: string) {
    const friendship = await this.prisma.friendship.findUnique({
      where: {
        senderId_receiverId: {
          senderId: friendId,
          receiverId: userId,
        },
      },
    });

    if (!friendship) {
      throw new NotFoundException('Friend request not found.');
    }

    return this.prisma.friendship.update({
      where: { id: friendship.id },
      data: { status: 'ACCEPTED' },
    });
  }

  async removeFriend(userId: string, friendId: string) {
    return this.prisma.friendship.deleteMany({
      where: {
        OR: [
          { senderId: userId, receiverId: friendId },
          { senderId: friendId, receiverId: userId },
        ],
      },
    });
  }
}
