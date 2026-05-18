import { PokemonGenderValue } from '../pokemon-gender';
export declare class UpdateUserPokemonDto {
    isShiny?: boolean;
    isFavorite?: boolean;
    gender?: PokemonGenderValue;
    note?: string;
    status?: 'seen' | 'caught';
}
