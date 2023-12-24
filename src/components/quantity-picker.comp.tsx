import React, {FC} from 'react';
import {Button, ButtonGroup, TextField} from "@mui/material";
import {QuantityPickerProps} from "../types/quantity-picker.props";

const QuantityPickerComp: FC<QuantityPickerProps> = ({onChange, onIncrement, onDecrement, quantity}) => {
    return (
        <ButtonGroup variant="contained">
            <Button onClick={onDecrement}>-</Button>
            <TextField inputProps={{style: {textAlign: 'center', width: '5ch'}}} InputProps={{disableUnderline: true}} variant="standard" value={quantity} onChange={onChange}/>
            <Button onClick={onIncrement}>+</Button>
        </ButtonGroup>
    )
};

export default QuantityPickerComp;