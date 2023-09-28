import { twMerge } from "tailwind-merge";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode,
    disabled?: boolean,
}

export function Link({ children, href, disabled, className, ...rest}: LinkProps) {
    return (
        <a 
            href={disabled ? undefined : href} 
            className={twMerge(`text-primary aria-disabled:text-disabled aria-disabled:no-underline  hover:underline`, className)}
            aria-disabled={disabled}
            {...rest}
        >
            {children}
        </a>
    )
}