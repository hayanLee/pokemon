import { getPokemon } from '@/app/_apis/pokemon';
import Chip from '@/components/Chip';
import { PokemonType } from '@/types/pokemon.type';
import Image from 'next/image';
import Link from 'next/link';

async function PokemonDetailPage({ params }: { params: { id: string } }) {
    const { id, name, korean_name, height, weight, sprites, abilities, types, moves } = await getPokemon(params.id);
    return (
        <div className='flex flex-col items-center gap-y-5'>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-2xl'>
                    No.{id} {korean_name}
                </h2>
                <h3>({name})</h3>
            </div>
            <p>
                키 : <span className='font-semibold'>{height / 10} m</span>
                무게 :<span className='font-semibold'>{weight / 10} kg</span>
            </p>
            <div className='grid grid-cols-2 w-1/2 h-80'>
                <div className='relative'>
                    <Image src={sprites.front_default} alt={korean_name} fill objectFit='cover' />
                </div>
                <div className='relative'>
                    <Image src={sprites.front_shiny} alt={korean_name} fill objectFit='cover' />
                </div>
            </div>
            <div className='flex '>
                {abilities.map((pk, idx) => (
                    <Chip key={idx}>{pk.ability.korean_name}</Chip>
                ))}
            </div>

            <div className='flex gap-x-2'>
                {types.map((type, idx) => (
                    <Chip key={idx} intent={type.type.name as PokemonType}>
                        {type.type.korean_name}
                    </Chip>
                ))}
            </div>

            <h3>기술 :</h3>
            <div className='w-1/2 flex flex-wrap gap-1.5'>
                {moves.map((move, idx) => (
                    <span key={idx}>{move.move.korean_name}</span>
                ))}
            </div>

            <Link href='/' className='border bg-blue-900 text-white rounded p-2.5 font-semibold'>
                뒤로가기
            </Link>
        </div>
    );
}

export default PokemonDetailPage;
