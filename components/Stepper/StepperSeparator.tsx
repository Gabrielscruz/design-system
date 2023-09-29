import classNames from "classnames"

interface StepperSeparatorProps {
    direction: 'row' | 'col'
    separatorColor:  'current' | 'concluded' | 'next'
}
const separatorAlignMap = {
    row: "h-[1px] w-9",
    col: 'h-9 w-[1px]'
}

const separatorColorMap = {
    current: 'bg-disabled',
    concluded: 'bg-primary',
    next: 'bg-disabled'
}


export function StepperSeparator({ direction, separatorColor}: StepperSeparatorProps) {
    return (
        <div
                            className={
                                classNames(
                                    {
                                       [separatorAlignMap[direction]]:direction, 
                                       [separatorColorMap[separatorColor]]:separatorColor
                                    }
                                )}
                        />
    )
}