import { Pokemon } from '@/types/pokemon.type';
import axios from 'axios';

const LOCAL_URL = 'http://localhost:3000';
const DEPLOY_URL = 'https://pokemon-murex-one.vercel.app';

export const getPokemon = async (id: string): Promise<Pokemon> => {
    const apiURL = DEPLOY_URL;
    const res = await axios.get<Pokemon>(`${apiURL}/api/pokemons/${id}`);
    return res.data;
};
