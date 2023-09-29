'use client';
import classNames from "classnames";
import { StepperCircle } from "./StepperCircle";
import { StepperIcon } from "./StepperIcon";
import { StepperSeparator } from "./StepperSeparator";
export interface stepsProps  {
    stepsName: string
    stepsNumber: number
    type: 'current' | 'concluded' | 'next'
}
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'col'
    steps: stepsProps[]

}

export function Stepper({ direction = 'row', steps, className, ...rest }: StepperProps) {
    
    return (
        <div 
          className={classNames(`flex flex-${direction} items-center justify-item-center gap-1 duration-75`, className)} 
          {...rest}>
            {steps?.length > 0 && steps.map((step) => {
                return (
                    <>
                    <div key={step.stepsNumber} title={step.stepsName}>
                        <StepperCircle key={step.stepsNumber} type={step.type}>
                            <StepperIcon stepsName={step.stepsName} type={step.type} stepsNumber={step.stepsNumber}/>
                        </StepperCircle>
                    </div>
                    {step.stepsNumber < steps.length && (
                         <StepperSeparator direction={direction} separatorColor={step.type}/>
                    )} 
                    </>
                )
            })}
        </div>
    )
}