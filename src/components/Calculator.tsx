import React from 'react';
import { Display } from './Display';
import { Keyboard } from './Keyboard';
import { useCalculator } from '../calculator/useCalculator'; // Ajusta la ruta de tu hook

export const Calculator: React.FC = () => {
    const { displayValue, ...handlers } = useCalculator();

    return (
        <div className="calculator-container">
        <p className="operation-display">{handlers.previousValue} {handlers.operator}</p>
        <Display value={displayValue} />
        <Keyboard handlers={handlers} />
        </div>
    );
};