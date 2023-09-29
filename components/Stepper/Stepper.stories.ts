
import { Meta, StoryObj } from '@storybook/react';
import  {Stepper, type StepperProps} from './Stepper'

const meta: Meta<StepperProps> = {
  title: "Atoms/Stepper",
  component: Stepper,
  argTypes: {
    direction: { type: "string" },
    steps:  [
        {
            stepsName: { type: "string" },
            stepsNumber: { type: "number" },
            type: { type: "string" },
        }
    ]
  },
};

export default meta;

export const Primary: StoryObj<StepperProps> = {
  args: {
    direction: 'row',
    steps: [    
        {stepsName: 'Step 1', stepsNumber: 1, type: 'concluded'},
        {stepsName: 'Step 2', stepsNumber: 2, type: 'current'},
        {stepsName: 'Step 3', stepsNumber: 3, type: 'next'}    
      ]
  },
};
