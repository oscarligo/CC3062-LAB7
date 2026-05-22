import React from 'react';
import type { Operator } from '../calculator/types';

interface KeyboardProps {
    onDigit: (digit: string) => void;
    onOperator: (operator: Operator) => void;
    onClear: () => void;
}

export const Keyboard: React.FC<KeyboardProps> = ({ onDigit, onOperator, onClear }) => {
    const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    const operators: Operator[] = ['+', '-', '*', '/', '%'];

    return (
        <div className="calculator-keyboard">
        <button className="btn-clear" onClick={onClear}>C</button>
        
        <div className="digits-grid">
            {digits.map((digit) => (
            <button key={digit} onClick={() => onDigit(digit)}>
                {digit}
            </button>
            ))}
        </div>

        <div className="operators-column">
            {operators.map((op) => (
            <button key={op} onClick={() => onOperator(op)}>
                {op}
            </button>
            ))}
            <button className="btn-equals" onClick={() => onOperator(null)}>=</button>
        </div>
        </div>
    );
};