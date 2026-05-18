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
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TeamsService = class TeamsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(userId) {
        return this.prisma.team.findMany({
            where: { userId },
            include: { members: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(userId, name) {
        return this.prisma.team.create({
            data: {
                userId,
                name,
            },
            include: { members: true },
        });
    }
    async update(userId, id, name, memberIds) {
        const team = await this.prisma.team.findUnique({ where: { id } });
        if (!team)
            throw new common_1.NotFoundException('Team not found');
        if (team.userId !== userId)
            throw new common_1.ForbiddenException('Access denied');
        if (memberIds) {
            await this.prisma.userPokemon.updateMany({
                where: { teamId: id },
                data: { teamId: null }
            });
            await this.prisma.userPokemon.updateMany({
                where: { id: { in: memberIds }, userId },
                data: { teamId: id }
            });
        }
        if (name) {
            await this.prisma.team.update({
                where: { id },
                data: { name }
            });
        }
        return this.prisma.team.findUnique({
            where: { id },
            include: { members: true }
        });
    }
    async remove(userId, id) {
        const team = await this.prisma.team.findUnique({ where: { id } });
        if (!team)
            throw new common_1.NotFoundException('Team not found');
        if (team.userId !== userId)
            throw new common_1.ForbiddenException('Access denied');
        await this.prisma.team.delete({ where: { id } });
        return { success: true };
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeamsService);
//# sourceMappingURL=teams.service.js.map