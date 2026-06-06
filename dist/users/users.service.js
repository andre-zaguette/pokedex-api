"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(input) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: input.email.toLowerCase() },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already in use.');
        }
        return this.prisma.user.create({
            data: {
                name: input.name,
                email: input.email.toLowerCase(),
                passwordHash: input.passwordHash,
            },
        });
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email: email.toLowerCase() },
        });
    }
    async findById(id) {
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
            throw new common_1.NotFoundException('User not found.');
        }
        return user;
    }
    async update(id, data) {
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
    async addFriend(userId, friendId) {
        if (userId === friendId) {
            throw new common_1.ConflictException('You cannot add yourself as a friend.');
        }
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
                throw new common_1.ConflictException('Already friends.');
            }
            if (existing.senderId === userId) {
                throw new common_1.ConflictException('Friend request already sent.');
            }
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
    async getFriends(userId) {
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
    async getPendingRequests(userId) {
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
    async acceptFriend(userId, friendId) {
        const friendship = await this.prisma.friendship.findUnique({
            where: {
                senderId_receiverId: {
                    senderId: friendId,
                    receiverId: userId,
                },
            },
        });
        if (!friendship) {
            throw new common_1.NotFoundException('Friend request not found.');
        }
        return this.prisma.friendship.update({
            where: { id: friendship.id },
            data: { status: 'ACCEPTED' },
        });
    }
    async removeFriend(userId, friendId) {
        return this.prisma.friendship.deleteMany({
            where: {
                OR: [
                    { senderId: userId, receiverId: friendId },
                    { senderId: friendId, receiverId: userId },
                ],
            },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map