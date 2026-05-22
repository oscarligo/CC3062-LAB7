import type { CalculatorHandlers } from './types'


/* 
Arreglo que define cada botón del teclado, su etiqueta, clase CSS  y la función que ejecuta al hacer clic.
*/

type KeypadButton = {
    label: string
    className?: string
    action: (handlers: CalculatorHandlers) => void
}

export const keypad: KeypadButton[] = [
    { label: 'AC', className: 'action', action: (handlers) => handlers.clearAll() },
    { label: 'DEL', className: 'action', action: (handlers) => handlers.deleteDigit() },
    { label: '.', action: (handlers) => handlers.inputDigit('.') },
    { label: '÷', className: 'operator', action: (handlers) => handlers.handleOperator('/') },
    { label: '7', action: (handlers) => handlers.inputDigit('7') },
    { label: '8', action: (handlers) => handlers.inputDigit('8') },
    { label: '9', action: (handlers) => handlers.inputDigit('9') },
    { label: '×', className: 'operator', action: (handlers) => handlers.handleOperator('*') },
    { label: '4', action: (handlers) => handlers.inputDigit('4') },
    { label: '5', action: (handlers) => handlers.inputDigit('5') },
    { label: '6', action: (handlers) => handlers.inputDigit('6') },
    { label: '−', className: 'operator', action: (handlers) => handlers.handleOperator    ('-') },
    { label: '1', action: (handlers) => handlers.inputDigit('1') },
    { label: '2', action: (handlers) => handlers.inputDigit('2') },
    { label: '3', action: (handlers) => handlers.inputDigit('3') },
    { label: '+', className: 'operator', action: (handlers) => handlers.handleOperator('+') },
    { label: '%', className: 'operator', action: (handlers) => handlers.handleOperator('%') },
    { label: '0', className: 'span-two', action: (handlers) => handlers.inputDigit('0') },
    { label: '=', className: 'equals', action: (handlers) => handlers.calculate() },
]