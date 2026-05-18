import { PrismaService } from '../database/prisma.service';
export declare class TeamsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(userId: string): Promise<({
        members: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            isShiny: boolean;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            status: import(".prisma/client").$Enums.PokemonStatus;
            isFavorite: boolean;
            ability: string | null;
            item: string | null;
            move1: string | null;
            move2: string | null;
            move3: string | null;
            move4: string | null;
            nature: string | null;
            ev_hp: number;
            ev_atk: number;
            ev_def: number;
            ev_spa: number;
            ev_spd: number;
            ev_spe: number;
            userId: string;
            teamId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    })[]>;
    create(userId: string, name: string): Promise<{
        members: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            isShiny: boolean;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            status: import(".prisma/client").$Enums.PokemonStatus;
            isFavorite: boolean;
            ability: string | null;
            item: string | null;
            move1: string | null;
            move2: string | null;
            move3: string | null;
            move4: string | null;
            nature: string | null;
            ev_hp: number;
            ev_atk: number;
            ev_def: number;
            ev_spa: number;
            ev_spd: number;
            ev_spe: number;
            userId: string;
            teamId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    update(userId: string, id: string, name?: string, memberIds?: string[]): Promise<({
        members: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            isShiny: boolean;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            status: import(".prisma/client").$Enums.PokemonStatus;
            isFavorite: boolean;
            ability: string | null;
            item: string | null;
            move1: string | null;
            move2: string | null;
            move3: string | null;
            move4: string | null;
            nature: string | null;
            ev_hp: number;
            ev_atk: number;
            ev_def: number;
            ev_spa: number;
            ev_spd: number;
            ev_spe: number;
            userId: string;
            teamId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }) | null>;
    remove(userId: string, id: string): Promise<{
        success: boolean;
    }>;
}
