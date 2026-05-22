export type Operator = '+' | '-' | '*' | '/' | '%' | null;

export interface CalculatorState {
    displayValue: string;
    previousValue: string | null;
    operator: Operator;
    waitingForNewValue: boolean;
}