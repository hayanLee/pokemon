'use client';

import { PokemonResponse } from '@/types/pokemon.type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PokemonCard from '../PokemonCard';

const getPokemons = async (): Promise<PokemonResponse> => {
    const response = await axios.get<PokemonResponse>('/api/pokemons');
    return response.data;
};

function PokemonList() {
    const {
        data: pokemons,
        isPending,
        isError,
    } = useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
    });

    if (isPending) return <div>로딩중...</div>;
    if (isError) return <div>에러발생...</div>;

    return (
        <div className='grid grid-cols-4 place-items-center gap-y-10 my-10'>
            {pokemons?.map((pokemon) => (
                <li key={pokemon.id} className='list-none'>
                    <PokemonCard pokemon={pokemon} />
                </li>
            ))}
        </div>
    );
}

export default PokemonList;
