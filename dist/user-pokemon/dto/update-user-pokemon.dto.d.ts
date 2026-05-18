import { PokemonGenderValue } from '../pokemon-gender';
export declare class UpdateUserPokemonDto {
    isShiny?: boolean;
    isFavorite?: boolean;
    gender?: PokemonGenderValue;
    note?: string;
    status?: 'seen' | 'caught';
    ability?: string;
    item?: string;
    move1?: string;
    move2?: string;
    move3?: string;
    move4?: string;
    nature?: string;
    ev_hp?: number;
    ev_atk?: number;
    ev_def?: number;
    ev_spa?: number;
    ev_spd?: number;
    ev_spe?: number;
}
