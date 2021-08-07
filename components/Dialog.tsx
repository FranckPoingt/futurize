import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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