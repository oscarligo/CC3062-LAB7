import { useState } from 'react';
import type { CalculatorState, Operator } from './types';
import { calculate } from './utils';

export const useCalculator = () => {
    const [state, setState] = useState<CalculatorState>({
        displayValue: '0',
        previousValue: null,
        operator: null,
        waitingForNewValue: false,
    });

    const inputDigit = (digit: string) => {
        setState((prev) => ({
        ...prev,
        displayValue: prev.displayValue === '0' || prev.waitingForNewValue 
            ? digit 
            : prev.displayValue + digit,
        waitingForNewValue: false,
        }));
    };

    const handleOperator = (nextOperator: Operator) => {
        const { displayValue, previousValue, operator } = state;
        const inputValue = parseFloat(displayValue);

        if (previousValue === null) {
        setState({
            displayValue,
            previousValue: displayValue,
            operator: nextOperator,
            waitingForNewValue: true,
        });
        return;
        }

        const currentResult = calculate(parseFloat(previousValue), inputValue, operator);

        setState({
        displayValue: String(currentResult),
        previousValue: nextOperator === null ? null : String(currentResult),
        operator: nextOperator,
        waitingForNewValue: true,
        });
  };

    const clearAll = () => {
        setState({
        displayValue: '0',
        previousValue: null,
        operator: null,
        waitingForNewValue: false,
        });
    };

    return {
        displayValue: state.displayValue,
        inputDigit,
        handleOperator,
        clearAll,
    };
};