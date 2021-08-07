import React, { useState, useEffect } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const SelectNbToken = () => {

    const [quantity, setQuantity] = useState(1);
    const [isDisabled, setDisabled] = useState(false);

    useEffect(() => {

    }, [quantity]);

    const increaseItem  = () => {
        setDisabled(false)
        return setQuantity(quantity + 1)
        
    }

    const decreaseItem = () => {
        if(quantity <= 1) {
            setDisabled(true)
        } else {
            return setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <IconButton onClick={decreaseItem} disabled={isDisabled}>
                <RemoveCircleOutlineIcon fontSize="large" color="primary" />
            </IconButton>
            <TextField
                name="quantity" 
                variant="outlined"
                value={quantity}
                style={{width: '15%'}}
                />
            <IconButton onClick={increaseItem}>
                <AddCircleOutlineRoundedIcon fontSize="large" color="primary" />
            </IconButton>
        </div>
    )
}

export default SelectNbToken
