import { PrismaService } from '../database/prisma.service';
import { CreateUserPokemonDto } from './dto/create-user-pokemon.dto';
import { UpdateUserPokemonDto } from './dto/update-user-pokemon.dto';
export declare class UserPokemonService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        pokeApiId: number;
        pokemonName: string;
        spriteUrl: string | null;
        isShiny: boolean;
        isFavorite: boolean;
        status: import(".prisma/client").$Enums.PokemonStatus;
        gender: import(".prisma/client").$Enums.PokemonGender;
        note: string | null;
        createdAt: Date;
        updatedAt: Date;
        teamId: string | null;
    }[]>;
    create(userId: string, input: CreateUserPokemonDto): Promise<{
        id: string;
        userId: string;
        pokeApiId: number;
        pokemonName: string;
        spriteUrl: string | null;
        isShiny: boolean;
        isFavorite: boolean;
        status: import(".prisma/client").$Enums.PokemonStatus;
        gender: import(".prisma/client").$Enums.PokemonGender;
        note: string | null;
        createdAt: Date;
        updatedAt: Date;
        teamId: string | null;
    }>;
    update(userId: string, id: string, input: UpdateUserPokemonDto): Promise<{
        id: string;
        userId: string;
        pokeApiId: number;
        pokemonName: string;
        spriteUrl: string | null;
        isShiny: boolean;
        isFavorite: boolean;
        status: import(".prisma/client").$Enums.PokemonStatus;
        gender: import(".prisma/client").$Enums.PokemonGender;
        note: string | null;
        createdAt: Date;
        updatedAt: Date;
        teamId: string | null;
    }>;
    remove(userId: string, id: string): Promise<{
        success: boolean;
    }>;
    private ensureOwnership;
}
