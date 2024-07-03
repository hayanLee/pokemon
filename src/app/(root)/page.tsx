import PokemonList from '@/components/PokemonList';

export default function Home() {
    return (
        <div className='bg-red-50 h-screen py-10'>
            <h1 className='text-xl font-bold uppercase text-center'>pokemon</h1>

            <PokemonList />
        </div>
    );
}
