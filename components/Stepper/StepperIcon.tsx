import { CheckIcon } from "@heroicons/react/24/solid";
import { stepsProps } from "./Stepper";

export function StepperIcon ({ stepsNumber ,type}: stepsProps) {
    if (type === 'concluded') {
        return <CheckIcon  className="w-1/2 h-1/2"/>
    }
    return stepsNumber
}
