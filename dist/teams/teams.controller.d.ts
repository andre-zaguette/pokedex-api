import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    list(user: any): Promise<({
        members: {
            isShiny: boolean;
            isFavorite: boolean;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            status: import(".prisma/client").$Enums.PokemonStatus;
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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            teamId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    })[]>;
    create(user: any, body: {
        name: string;
    }): Promise<{
        members: {
            isShiny: boolean;
            isFavorite: boolean;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            status: import(".prisma/client").$Enums.PokemonStatus;
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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            teamId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    update(user: any, id: string, body: {
        name?: string;
        memberIds?: string[];
    }): Promise<({
        members: {
            isShiny: boolean;
            isFavorite: boolean;
            gender: import(".prisma/client").$Enums.PokemonGender;
            note: string | null;
            status: import(".prisma/client").$Enums.PokemonStatus;
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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            pokeApiId: number;
            pokemonName: string;
            spriteUrl: string | null;
            teamId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }) | null>;
    remove(user: any, id: string): Promise<{
        success: boolean;
    }>;
}
