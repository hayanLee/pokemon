export type Pokemon = {
    id: number;
    name: string;
    korean_name: string;
    height: number;
    weight: number;
    sprites: { front_default: string; front_shiny: string };
    types: { type: { name: string; korean_name: string } }[];
    abilities: { ability: { name: string; korean_name: string } }[];
    moves: { move: { name: string; korean_name: string } }[];
};

export type PokemonResponse = Pokemon[];

export enum PokemonType {
    Fire = 'fire',
    Rock = 'rock',
    Ground = 'ground',
    Water = 'water',
    Bug = 'bug',
    Steel = 'steel',
    Grass = 'grass',
    Fairy = 'fairy',
    Dragon = 'dragon',
    Normal = 'normal',
    Fighting = 'fighting',
    Flying = 'flying',
    Poison = 'poison',
    Ghost = 'ghost',
    Electric = 'electric',
    Ice = 'ice',
    Psychic = 'psychic',
    Dark = 'dark',
    Stellar = 'stellar',
    Unknown = 'unknown',
}
