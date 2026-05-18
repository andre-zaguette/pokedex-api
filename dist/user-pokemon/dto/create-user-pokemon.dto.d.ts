import { PokemonGenderValue } from '../pokemon-gender';
export declare class CreateUserPokemonDto {
    pokeApiId: number;
    pokemonName: string;
    spriteUrl?: string;
    isShiny: boolean;
    gender: PokemonGenderValue;
    note?: string;
    status?: 'seen' | 'caught';
}
