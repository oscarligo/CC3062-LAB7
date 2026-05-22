export type Operator = '+' | '-' | '*' | '/' | '%' | null

// Estado de la calculadora
export interface CalculatorState {
    displayValue: string // El valor que   se muestra en la pantalla
    previousValue: string | null // El valor almacenado para la operación anterior
    operator: Operator  // El operador seleccionado actualmente
    waitingForNewValue: boolean // Indica si se espera que el usuario ingrese un nuevo valor después de seleccionar un operador
}

export interface CalculatorHandlers {
    inputDigit: (digit: string) => void // Entrada de dígitos (0-9 y '.')
    handleOperator: (operator: Operator) => void // Manejo de operadores (+, -, *, /, %, null)
    calculate: () => void // Realiza el cálculo basado en el estado actual
    clearAll: () => void // Limpia toda la calculadora, reseteando el estado
    deleteDigit: () => void // Elimina el último dígito ingresado en el display
}