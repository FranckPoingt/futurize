import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const getGoals = [50, 60, 100];

function getSteps() {
    return [`Personal protective equipment (PPE) purchase (${getGoals[0]} tokens)`, `Advertise our actions in the medias (${getGoals[1]} tokens)`, `Buy a boat (${getGoals[2]} tokens)`];
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

    return (
        <div>
            <Grid container direction="row" alignItems="center">
                <Grid item>
                    <span style={{ fontSize: '1.2rem' }}>The Milestones</span>
                </Grid>
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
