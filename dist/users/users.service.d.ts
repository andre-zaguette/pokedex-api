import { PrismaService } from '../database/prisma.service';
type CreateUserInput = {
    name: string;
    email: string;
    passwordHash: string;
};
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: CreateUserInput): Promise<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findById(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: {
        name?: string;
    }): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
    addFriend(userId: string, friendId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        status: import(".prisma/client").$Enums.FriendshipStatus;
    }>;
    getFriends(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
    }[]>;
    getPendingRequests(userId: string): Promise<({
        sender: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        status: import(".prisma/client").$Enums.FriendshipStatus;
    })[]>;
    acceptFriend(userId: string, friendId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        status: import(".prisma/client").$Enums.FriendshipStatus;
    }>;
    removeFriend(userId: string, friendId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
export {};
