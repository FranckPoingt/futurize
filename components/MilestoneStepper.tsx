import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Grid } from '@material-ui/core';

const getGoals = [5000, 6000, 10000];

function getSteps() {
    return [`Personal protective equipment (PPE) purchase (US $${getGoals[0]})`, `Advertise our actions in the medias (US $${getGoals[1]})`, `Buy a boat (US $${getGoals[2]})`];
}

export default function HorizontalLabelPositionBelowStepper({collected}) {
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const goals = getGoals;

    const setStep = (collected) => {
        goals.forEach(goal => {
            if (collected >= goal) {
                setActiveStep(goals.indexOf(goal)+1)
            }
        });
    }

    useEffect(() => {
        setStep(collected)
    }, [])

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    return (
        <div>
            <Grid container direction="row" alignItems="center">
                {/* <Grid item>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        <ArrowBackIcon />
                    </Button>
                </Grid> */}
                <Grid item>
                    <span style={{ fontSize: '1.2rem' }}>The Milestones</span>
                </Grid>
                {/* <Grid item>
                    <div>
                        {activeStep !== steps.length && 
                            <Button variant="text" color="primary" onClick={handleNext}>
                                <ArrowForwardIcon />
                            </Button>
                        }
                    </div>
                </Grid> */}
            </Grid>
            <Stepper activeStep={activeStep} alternativeLabel style={{ backgroundColor: 'transparent' }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography >All steps completed</Typography>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
