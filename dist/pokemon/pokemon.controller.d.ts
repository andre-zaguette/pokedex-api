import { PokemonService } from './pokemon.service';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    search(search?: string, limit?: string, offset?: string, region?: string): Promise<{
        total: number;
        items: {
            id: any;
            name: any;
            spriteUrl: any;
            femaleSpriteUrl: any;
            shinySpriteUrl: any;
            femaleShinySpriteUrl: any;
            artworkUrl: any;
            types: any;
            weight: any;
            height: any;
            abilities: any;
            genderRate: any;
            description: any;
            cryUrl: any;
            effectiveness: {
                weaknesses: string[];
                resistances: string[];
            };
            abilitiesDetails: {
                name: any;
                description: any;
            }[];
            heldItems: any;
            moves: any;
            stats: {
                hp: any;
                atk: any;
                def: any;
                satk: any;
                sdef: any;
                spd: any;
            };
            varieties: any;
            evolutionChain: any[];
        }[];
        hasMore: boolean;
    }>;
    getById(nameOrId: string): Promise<{
        id: any;
        name: any;
        spriteUrl: any;
        femaleSpriteUrl: any;
        shinySpriteUrl: any;
        femaleShinySpriteUrl: any;
        artworkUrl: any;
        types: any;
        weight: any;
        height: any;
        abilities: any;
        genderRate: any;
        description: any;
        cryUrl: any;
        effectiveness: {
            weaknesses: string[];
            resistances: string[];
        };
        abilitiesDetails: {
            name: any;
            description: any;
        }[];
        heldItems: any;
        moves: any;
        stats: {
            hp: any;
            atk: any;
            def: any;
            satk: any;
            sdef: any;
            spd: any;
        };
        varieties: any;
        evolutionChain: any[];
    }>;
}
