import PokemonList from '@/components/PokemonList';

export default function Home() {
    return (
        <div>
            <h1 className='text-2xl font-bold uppercase text-center'>pokemon</h1>
            <PokemonList />
        </div>
    );
}
