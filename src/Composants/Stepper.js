import { useState } from 'react';

interface Step {
  label: string;
  step: number;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <div className="w-full px-4 pb-10 inset-x-0 top-0">
      <div className="flex justify-between mt-14 relative before:bg-slate-200 before:absolute before:h-1 before:top-1/2 before:transform-y-1/2 before:w-full before:left-0">
        {steps.map(({ step, label }) => (
          <div className="relative z-10" key={step}>
            <div
              className={`size-16 rounded-full border-2 bg-white border-zinc-200 flex justify-center items-center transition-all ease-in delay-200 ${
                activeStep >= step ? 'border-slate-400' : ''
              }`}>
              {activeStep > step ? (
                <div className="text-2xl font-semibold text-slate-400 rotate-45 -scale-x-100">
                  ✔
                </div>
              ) : (
                <span className="text-lg text-zinc-400 font-medium">{step}</span>
              )}
            </div>
            <div className="absolute top-24 left-1/2 -translate-y-2/4 -translate-x-2/4">
              <span className="text-lg text-zinc-400 font-semibold">{label}</span>
            </div>
          </div>
        ))}
        <div
          className="absolute h-1 bg-slate-400 w-full top-1/2 transform-y-1/2 transition-all ease-in delay-200 left-0"
          style={{ width: width }}></div>
      </div>
    </div>
  );
};

export default Stepper;
