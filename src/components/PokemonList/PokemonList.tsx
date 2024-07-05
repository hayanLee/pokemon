'use client';

import useInfinitePokemon from '@/hooks/useInfinitePokemon';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PokemonCard from '../PokemonCard';

function PokemonList() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfinitePokemon();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage();
    }, [inView, hasNextPage, fetchNextPage]);

    if (status === 'pending') return <div>로딩중...</div>;
    if (status === 'error') return <div>에러발생...</div>;

    return (
        <>
            <div className='grid grid-cols-4 place-items-center gap-y-10 my-10'>
                {data?.pages.map((page) =>
                    page.data.map((pokemon, idx) => (
                        <li key={pokemon.id} className='list-none'>
                            <Link href={`/pokemons/${pokemon.id}`}>
                                {page.data.length === idx + 1 ? (
                                    <PokemonCard pokemon={pokemon} cardRef={ref} />
                                ) : (
                                    <PokemonCard pokemon={pokemon} />
                                )}
                            </Link>
                        </li>
                    ))
                )}
            </div>
            {isFetchingNextPage && (
                <div className='flex justify-center font-semibold text-2xl'>데이터 가져오는 중,,,</div>
            )}
        </>
    );
}

export default PokemonList;
