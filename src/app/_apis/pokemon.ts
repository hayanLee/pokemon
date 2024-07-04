import { Pokemon } from '@/types/pokemon.type';
import axios from 'axios';

export const getPokemon = async (id: string): Promise<Pokemon> => {
    const apiURL = 'http://localhost:3000';
    const res = await axios.get<Pokemon>(`${apiURL}/api/pokemons/${id}`);
    return res.data;
};
