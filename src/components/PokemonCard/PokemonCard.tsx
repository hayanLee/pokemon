import { Pokemon } from '@/types/pokemon.type';
import Image from 'next/image';

interface PokemonCardProps {
    pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className='w-80 h-80 p-5 rounded-md flex flex-col justify-center items-center hover:scale-105 transition border shadow-md bg-white'>
            <h2 className='font-semibold'>No. {pokemon.id}</h2>
            <div className='relative w-full h-full'>
                <Image src={pokemon.sprites.front_default} alt={pokemon.korean_name} fill objectFit='cover' />
            </div>
        </div>
    );
}

export default PokemonCard;
