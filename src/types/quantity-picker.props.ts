import React from "react";

export interface QuantityPickerProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onIncrement: () => void;
    onDecrement: () => void;
    quantity: number
}