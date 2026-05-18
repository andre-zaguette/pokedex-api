import { JwtUser } from '../auth/jwt.strategy';
import { CreateUserPokemonDto } from './dto/create-user-pokemon.dto';
import { UpdateUserPokemonDto } from './dto/update-user-pokemon.dto';
import { UserPokemonService } from './user-pokemon.service';
export declare class UserPokemonController {
    private readonly userPokemonService;
    constructor(userPokemonService: UserPokemonService);
    list(user: JwtUser): import(".prisma/client").Prisma.PrismaPromise<{
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
    create(user: JwtUser, body: CreateUserPokemonDto): Promise<{
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
    update(user: JwtUser, id: string, body: UpdateUserPokemonDto): Promise<{
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
    remove(user: JwtUser, id: string): Promise<{
        success: boolean;
    }>;
}
