'use client';

import { PokemonResponse } from '@/types/pokemon.type';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const getPokemons = async ({ pageParam }: { pageParam: number }) => {
    const response = await axios.get<PokemonResponse>(`/api/pokemons?page=${pageParam}`);
    return response.data;
};

const useInfinitePokemon = () =>
    useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.hasNextPage ? allPages.length + 1 : undefined;
        },
    });

export default useInfinitePokemon;
