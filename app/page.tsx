'use client';

import { Button } from "@/components/Button/Button";
import { Stepper, stepsProps } from "@/components/Stepper/Stepper";
import { useState } from "react";



export default function Home() {
  const [steps, setSteps] = useState<stepsProps[]>([    
    {stepsName: 'Step 1', stepsNumber: 1, type: 'concluded'},
    {stepsName: 'Step 2', stepsNumber: 2, type: 'current'},
    {stepsName: 'Step 3', stepsNumber: 3, type: 'next'},    
    {stepsName: 'Step 4', stepsNumber: 4, type: 'next'},   
    {stepsName: 'Step 5', stepsNumber: 5, type: 'next'},    
    {stepsName: 'Step 6', stepsNumber: 6, type: 'next'}    
  ])
  return (
  <div className="mt-7 w-full h-screen">     
  <Stepper 
    direction="col"
    steps={steps} 
  />
  <br />

    <Button onClick={() => {
  

  
      setSteps((steps) => {
        const stepsIndex = steps.findIndex((step) => step.type === 'current')
        return steps.map((step, _index) => { 
          if (stepsIndex === _index) {
            step.type = 'concluded'
          }
          if (stepsIndex + 1  === _index) {
            step.type = 'current'
          }
          return step  
        }) 
      })
    }}>
      Proximo
    </Button>
  </div>
 
  )
}
