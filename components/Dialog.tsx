import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { DialogContent, Fab } from '@material-ui/core';



function FullScreenDialog({isOpen, handleClose}) {


  return (
    <div>
        <Dialog open={isOpen} onClose={handleClose}>
            <IconButton onClick={handleClose} aria-label="close" color="primary" style={{position: 'absolute', left: 0, right: 0}}>
                <CloseIcon />
            </IconButton>
              <iframe height="2000" width="600" src="https://www.buymeacoffee.com/tuiify"  />
        </Dialog>
    </div>
  );
}

export default FullScreenDialog