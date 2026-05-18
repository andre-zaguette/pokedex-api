import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    list(user: any): Promise<({
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
    create(user: any, body: {
        name: string;
    }): Promise<{
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
    update(user: any, id: string, body: {
        name?: string;
        memberIds?: string[];
    }): Promise<({
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
    remove(user: any, id: string): Promise<{
        success: boolean;
    }>;
}
