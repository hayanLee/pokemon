import axios from 'axios';
import { NextResponse } from 'next/server';

const TOTAL_POKEMON = 151;
const PAGE_SIZE = 20;

const isNotNull = <T>(value: T | null): value is T => value !== null;

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    console.log(searchParams);
    const page = parseInt(searchParams.get('page') || '1');
    const offset = (page - 1) * PAGE_SIZE;

    try {
        const allPokemonPromises = Array.from({ length: PAGE_SIZE }, (_, index) => {
            const id = index + 1 + offset;
            if (id > TOTAL_POKEMON) return null;

            return Promise.all([
                axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
                axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
            ]);
        }).filter(isNotNull);

        const allPokemonResponses = await Promise.all(allPokemonPromises);

        const allPokemonData = allPokemonResponses.map(([response, speciesResponse]) => {
            const koreanName = speciesResponse.data.names.find((name: any) => name.language.name === 'ko');
            return { ...response.data, korean_name: koreanName?.name || null };
        });

        const totalPages = Math.ceil(TOTAL_POKEMON / PAGE_SIZE);
        const hasNextPage = page < totalPages;

        // console.log('>>>>>>', { totalPages, hasNextPage, data: allPokemonData });
        return NextResponse.json({
            data: allPokemonData,
            totalPages,
            hasNextPage,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch data' });
    }
};
