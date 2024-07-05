import { PokemonType } from '@/types/pokemon.type';
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

type ChipVariantProps = VariantProps<typeof chipVariants>;
type ChipProps = ChipVariantProps;

const chipVariants = cva('border rounded-md text-white px-2 py-1', {
    variants: {
        intent: {
            [PokemonType.Fire]: 'bg-orange-500',
            [PokemonType.Rock]: 'bg-stone-500',
            [PokemonType.Ground]: 'bg-orange-900',
            [PokemonType.Water]: 'bg-blue-500',
            [PokemonType.Bug]: 'bg-lime-500',
            [PokemonType.Steel]: 'bg-gray-800',
            [PokemonType.Grass]: 'bg-lime-500',
            [PokemonType.Fairy]: 'bg-pink-500',
            [PokemonType.Dragon]: 'bg-violet-500',
            [PokemonType.Normal]: 'bg-stone-400',
            [PokemonType.Fighting]: 'bg-red-500',
            [PokemonType.Flying]: 'bg-sky-400',
            [PokemonType.Poison]: 'bg-fuchsia-800',
            [PokemonType.Ghost]: 'bg-fuchsia-950',
            [PokemonType.Electric]: 'bg-yellow-500',
            [PokemonType.Ice]: 'bg-cyan-200',
            [PokemonType.Psychic]: 'bg-purple-400',
            [PokemonType.Dark]: 'bg-slate-950',
            [PokemonType.Stellar]: 'bg-purple-300',
            [PokemonType.Unknown]: 'bg-gray-500',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        intent: PokemonType.Unknown,
    },
});

function Chip({ intent, children }: PropsWithChildren<ChipProps>) {
    return <div className={chipVariants({ intent })}>{children}</div>;
}

export default Chip;
