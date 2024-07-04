import { getPokemon } from '@/app/_apis/pokemon';
import Image from 'next/image';

async function PokemonDetailPage({ params }: { params: { id: string } }) {
    const { id, name, korean_name, height, weight, sprites, abilities, types, moves } = await getPokemon(params.id);
    return (
        <div>
            <h2>
                No.{id} {korean_name} ({name})
            </h2>
            <p>
                height : {height} / weight : {weight}
            </p>
            <Image src={sprites.front_default} alt={korean_name} width={100} height={100} />
            {abilities.map((pk, idx) => (
                <p key={idx}>{pk.ability.name}</p>
            ))}
            {types.map((type, idx) => (
                <p key={idx}>{type.type.korean_name}</p>
            ))}
            {moves.map((move, idx) => (
                <p key={idx}>{move.move.korean_name}</p>
            ))}
        </div>
    );
}

export default PokemonDetailPage;
