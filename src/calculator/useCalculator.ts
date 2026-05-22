import { useState } from 'react';
import type { CalculatorState, CalculatorHandlers, Operator } from './types';
import { calculate as executeCalculation } from './utils';

export const useCalculator = (): CalculatorState & CalculatorHandlers => {
    const [state, setState] = useState<CalculatorState>({
        displayValue: '0',
        previousValue: null,
        operator: null,
        waitingForNewValue: false,
    });

    const inputDigit = (digit: string) => {

        // Prev es el valor antiguo del estado. 
        setState((prev) => {
        const isError = prev.displayValue === 'ERROR';
        const isReset = prev.displayValue === '0' || prev.waitingForNewValue || isError;
        const currentDisplay = isReset ? '' : prev.displayValue;

        if (currentDisplay.length >= 9 && !prev.waitingForNewValue) {
            return prev;
        }

        if (digit === '.') {

            // Que no haya un punto ya presente. 
            if (prev.displayValue.includes('.') && !prev.waitingForNewValue && !isError) {
            return prev;
            }
            // No se puede agregar un punto si ya hay 8 caracteres
            if (currentDisplay.length >= 8 && !prev.waitingForNewValue) {
            return prev; 
            }

            return {
            ...prev,
            displayValue: isReset ? '0.' : currentDisplay + '.',
            waitingForNewValue: false,
            };
        }

        return {
            ...prev,
            displayValue: currentDisplay + digit,
            waitingForNewValue: false,
        };
        });
    };

    const handleOperator = (nextOperator: Operator) => {
        if (state.displayValue === 'ERROR') return;

        if (nextOperator === null) {
        calculate();
        return;
        }

        setState((prev) => {
        const inputValue = parseFloat(prev.displayValue);

        // Se actualiza el operador si se presiona un operador diferente sin ingresar un nuevo valor
        if (prev.operator && prev.waitingForNewValue) {
            return { ...prev, operator: nextOperator };
        }

        // Si no hay valor previo, se almacena el valor actual y el operador
        if (prev.previousValue === null) {
            return {
            ...prev,
            previousValue: prev.displayValue,
            operator: nextOperator,
            waitingForNewValue: true,
            };
        }

        const currentResult = executeCalculation(
            parseFloat(prev.previousValue),
            inputValue,
            prev.operator
        );

        return {
            displayValue: currentResult,
            previousValue: currentResult === 'ERROR' ? null : currentResult,
            operator: currentResult === 'ERROR' ? null : nextOperator,
            waitingForNewValue: true,
        };
        });
    };

    const calculate = () => {
        setState((prev) => {
        const { previousValue, displayValue, operator } = prev;
        if (operator === null || previousValue === null) return prev;

        const resultStr = executeCalculation(
            parseFloat(previousValue),
            parseFloat(displayValue),
            operator
        );

        return {
            displayValue: resultStr,
            previousValue: null,
            operator: null,
            waitingForNewValue: true,
        };
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

    const deleteDigit = () => {
        setState((prev) => {
        if (prev.waitingForNewValue || prev.displayValue === 'ERROR') return prev;
        
        const nextDisplay = prev.displayValue.slice(0, -1);
        return {
            ...prev,
            displayValue: nextDisplay === '' ? '0' : nextDisplay,
        };
        });
    };

    return {
        ...state,
        inputDigit,
        handleOperator,
        calculate,
        clearAll,
        deleteDigit,
    };
};