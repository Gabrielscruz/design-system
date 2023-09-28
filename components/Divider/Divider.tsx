import classNames from 'classnames'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string
    height?: string
    bgColor?: 'light' | 'dark' | 'black'
    children: React.ReactNode,
}

const colorClassMap = {
    light: 'bg-light',
    dark: 'bg-dark',
    black: 'bg-black'
}

export function Divider({ 
    width, 
    height = 'h-[1px]', 
    bgColor = 'black' , 
    children, 
    ...rest 
}: DividerProps) {

    const colorMap = colorClassMap[bgColor];

    const barClass = classNames(
        children ? 'w-1/3' : 'w-1/2',
        height,
        colorMap
    )


    return (
    <div {...rest } className={classNames(width, "flex items-center justify-center")} >
        <div className={barClass}></div>
        {children && <div className="px-3">children</div>}
        <div className={barClass}></div>
    </div>
    )
} 