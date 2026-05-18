export declare class PokemonService {
    private readonly baseUrl;
    private cachedList;
    private getAllPokemon;
    private readonly regionRanges;
    search(search?: string, limit?: number, offset?: number, region?: string): Promise<{
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
    getByNameOrId(nameOrId: string | number): Promise<{
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
