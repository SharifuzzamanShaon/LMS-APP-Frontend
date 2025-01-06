"use client";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Registration from "@/components/Enrollment/Registration";
import TermsandConditions from "@/components/Enrollment/TermsandConditions";
import toast from "react-hot-toast";

const steps = ["Register Course", "Terms and Conditions", "Payment"];

export default function EnrollmentSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isVerified, setIsVerified] = React.useState(false);
  const [skipped, setSkipped] = React.useState(new Set());
  
  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Registration isVerified={isVerified} setIsVerified={setIsVerified} />
        );
      case 1:
        return <TermsandConditions />;
      case 2:
        return "Content for Step 3: Create an ad. Design your ad creatives.";
      default:
        return "Unknown step";
    }
  };
  console.log(isVerified);
  React.useEffect(() => {
    if (isVerified) {
      toast.success("Account varified");
      handleNext()
    }
  }, [isVerified]);

  return (
    <div className="px-4 sm:px-8 lg:px-10 py-4 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="mt-6">
        {activeStep === steps.length ? (
          <div>
            <Typography className="mb-4 text-center">
              All steps completed - you&apos;re finished
            </Typography>
            <div className="flex justify-end">
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">{getStepContent(activeStep)}</div>
            <div className="flex items-center justify-between">
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} className="mr-2">
                  Skip
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-700 text-white"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
