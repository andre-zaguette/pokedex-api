import { PrismaService } from '../database/prisma.service';
export declare class TeamsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(userId: string): Promise<({
        members: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            isShiny: boolean;
            isFavorite: boolean;
            status: import(".prisma/client").$Enums.PokemonStatus;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            teamId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    create(userId: string, name: string): Promise<{
        members: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            isShiny: boolean;
            isFavorite: boolean;
            status: import(".prisma/client").$Enums.PokemonStatus;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            teamId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(userId: string, id: string, name?: string, memberIds?: string[]): Promise<({
        members: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            isShiny: boolean;
            isFavorite: boolean;
            status: import(".prisma/client").$Enums.PokemonStatus;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            teamId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    remove(userId: string, id: string): Promise<{
        success: boolean;
    }>;
}
