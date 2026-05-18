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
exports.UserPokemonService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let UserPokemonService = class UserPokemonService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(userId) {
        return this.prisma.userPokemon.findMany({
            where: { userId },
            orderBy: [{ pokemonName: 'asc' }],
        });
    }
    async create(userId, input) {
        const existing = await this.prisma.userPokemon.findUnique({
            where: {
                userId_pokeApiId: {
                    userId,
                    pokeApiId: input.pokeApiId,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Pokemon already exists in collection.');
        }
        return this.prisma.userPokemon.create({
            data: {
                userId,
                pokeApiId: input.pokeApiId,
                pokemonName: input.pokemonName,
                spriteUrl: input.spriteUrl,
                isShiny: input.isShiny,
                status: input.status,
                gender: input.gender,
                note: input.note,
            },
        });
    }
    async update(userId, id, input) {
        await this.ensureOwnership(userId, id);
        return this.prisma.userPokemon.update({
            where: { id },
            data: input,
        });
    }
    async remove(userId, id) {
        await this.ensureOwnership(userId, id);
        await this.prisma.userPokemon.delete({
            where: { id },
        });
        return { success: true };
    }
    async ensureOwnership(userId, id) {
        const item = await this.prisma.userPokemon.findUnique({
            where: { id },
        });
        if (!item) {
            throw new common_1.NotFoundException('Collection item not found.');
        }
        if (item.userId !== userId) {
            throw new common_1.ForbiddenException('Access denied.');
        }
    }
};
exports.UserPokemonService = UserPokemonService;
exports.UserPokemonService = UserPokemonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserPokemonService);
//# sourceMappingURL=user-pokemon.service.js.map