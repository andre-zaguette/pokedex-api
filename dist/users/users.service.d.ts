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
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
