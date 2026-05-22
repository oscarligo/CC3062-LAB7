import type { Operator } from './types';

export const calculate = (a: number, b: number, operator: Operator): number => {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 0; 
        case '%': return b !== 0 ? a % b : 0;
        case null: return b;
        default: return b;
    }
};