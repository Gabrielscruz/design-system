import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' 
    children: React.ReactNode
}

function getVariant(variant: ButtonProps['variant']) {
    const generalStyles = 'rounded-md px-lg py-2xs'
    switch (variant) {
        case 'primary': 
            return `${generalStyles} bg-primary text-white text-sm disabled:bg-disabled disabled:text-disabled`;
        case 'secondary': 
            return `${generalStyles} bg-quaternary text-primary text-sm disabled:bg-disabled disabled:text-disabled`;
        case 'tertiary': 
            return `${generalStyles} bg-transparent text-primary text-sm disabled:bg-disabled disabled:text-disabled`;
        default: 
            return `${generalStyles} bg-primary text-white text-sm disabled:bg-disabled disabled:text-disabled`;
    } 

}

export function Button({ variant = 'primary', children, className, ...rest }: ButtonProps) {
    return (
        <button 
            className={twMerge(`${getVariant(variant)}`, className)} 
            {...rest}
        >
            {children}
        </button>
    )
}
