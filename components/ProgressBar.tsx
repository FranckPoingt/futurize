import React from 'react'
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const ProgressBar = (props: LinearProgressProps & { value: number }) => {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} style={{borderRadius: '1rem', height: '1vh'}} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body1" color="textSecondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    )
}

export default ProgressBar
