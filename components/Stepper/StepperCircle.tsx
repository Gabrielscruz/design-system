import classNames from "classnames"

interface CircleProps  extends React.HTMLAttributes<HTMLDivElement>  {
    type: 'concluded' | 'current' | 'next' 
    children: React.ReactNode,
}

const CircleClassMap = {
    concluded: "border-[2px] border-primary text-primary",
    current: "bg-primary text-white",
    next: 'text-disabled border-[2px] border-disabled'
}

export function StepperCircle({ type, children, ...rest }: CircleProps) {
    return (
    <div 
        className={classNames({[CircleClassMap[type]]:type}, 'w-7 h-7 rounded-full flex  items-center justify-center')}
        {...rest}
    >
        {children}
    </div>
    )
}