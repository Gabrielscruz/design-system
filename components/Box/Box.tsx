import classNames from "classnames";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    rounded?: boolean
    border?: boolean
    filledBackground?: boolean
    type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error' | 'choose';
    children: React.ReactNode
    className: string
}

const boxClassMap = {
    primary: 'bg-primary',
    secondary: 'bg-tertiary',
    dark: 'bg-dark',
    alert: 'bg-yellow-100 text-yellow-900',
    success: 'bg-green-100 text-green-900',
    error: 'bg-red-100 text-red-900',
    choose: 'bg-light text-gray-primary'
  };


export function Box ({ 
    rounded = false, 
    border = false, 
    filledBackground = false, 
    type = 'primary',
    children,
    className,
    ...rest
}: BoxProps) {
    const classes = classNames({
        'rounded-md': rounded,
        'border border-gray-100': border,
        'bg-dark': filledBackground,
        [boxClassMap[type]]: type,

    }, className)
    return (
    <div 
        className={classes}
        {...rest}
    >
        {children}
    </div>)
}