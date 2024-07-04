import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

type ChipVariantProps = VariantProps<typeof chipVariants>;
type ChipProps = ChipVariantProps;

const chipVariants = cva('border rounded-md text-white px-1.5 py-1', {
    variants: {
        intent: {
            fire: 'bg-orange-500',
            rock: 'bg-stone-500',
            ground: 'bg-orange-900',
            water: 'bg-blue-500',
            bug: 'bg-lime-500',
            steel: 'bg-gray-800',
            grass: 'bg-lime-500',
            fairy: 'bg-pink-500',
            dragon: 'bg-violet-500',
            normal: 'bg-stone-400',
            fighting: 'bg-red-500',
            flying: 'bg-sky-400',
            poison: 'bg-fuchsia-800',
            ghost: 'bg-fuchsia-950',
            electric: 'bg-yellow-500',
            ice: 'bg-cyan-200',
            psychic: 'bg-purple-400',
            dark: 'bg-slate-950',
            stellar: 'bg-purple-300',
            unknown: 'bg-gray-500',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        intent: 'unknown',
    },
});

function Chip({ intent, children }: PropsWithChildren<ChipProps>) {
    return <div className={chipVariants({ intent })}>{children}</div>;
}

export default Chip;
