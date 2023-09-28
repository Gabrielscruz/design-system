import { twMerge } from "tailwind-merge"
import classNames from "classnames";

type Paragraph = JSX.IntrinsicElements['p']

export interface TypographyProps extends Paragraph {
    children: React.ReactNode,
    element?: keyof JSX.IntrinsicElements
    size?: 'xs' | 'sm' | 'md' | 'xl' | 'title1' | 'title2' | 'title3'
    variant?: 'primary' | 'secondary' | 'tertiary'
}

  const TypographyVariantClassMap = {
    primary: "text-gray-primary",
    secondary: "text-gray-secondary",
    tertiary: "text-gray-tertiary",
  }

  const TypographySizeClassMap = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    xl: "text-xl",
    title1: "text-txl",
    title2: "text-tlg",
    title3: "text-tmd",
  }

export function Typography ({ variant = 'primary', size='md', className, children, element = 'p', ...rest }: TypographyProps) {

  const classes = classNames({
    [TypographyVariantClassMap[variant]]: variant,
    [TypographySizeClassMap[size]]: size,

}, className)

    const Element = element as any
    return (
    <Element  
        className={classes} 
        {...rest}
    >
        {children}
    </Element>
    )
}