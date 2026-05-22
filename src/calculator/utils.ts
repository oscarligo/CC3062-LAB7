import type { Operator } from './types'

const MAX_DISPLAY_LENGTH = 9

export const formatTo9Characters = (num: number): string => {

    if (num < 0) return 'ERROR' // SI es negativo, error

    if (num > 999999999) return 'ERROR' // Si es mayor a lo que puede mostrar, error

    if (isNaN(num) || !isFinite(num)) return 'ERROR' // Si el resultado no es un número válido.

    const numStr = String(num) // Conversión a string para manipulación de caracteres

    if (numStr.length <= MAX_DISPLAY_LENGTH) return numStr // Si cabe en 9 caracteres, se muestra tal cual


    // Decimales dinamicos. 
    if (numStr.includes('.')) {
        const [integerPart] = numStr.split('.') // Se separa la parte entera de la decimal
        
        // Si el entero ya ocupa los 9 caracteres
        if (integerPart.length >= MAX_DISPLAY_LENGTH) {
        return integerPart.slice(0, MAX_DISPLAY_LENGTH)
        }
        // El numero de decimales disponibles
        const allowedDecimals = MAX_DISPLAY_LENGTH - integerPart.length - 1
        
        if (allowedDecimals > 0) {
        let fixedDecimal = num.toFixed(allowedDecimals)
        
        if (fixedDecimal.includes('.')) {
            // Eliminar ceros innecesarios al final y el punto decimal si no quedan decimales
            while (fixedDecimal.endsWith('0')) fixedDecimal = fixedDecimal.slice(0, -1)
            // Eliminar el punto decimal si es el último carácter después de eliminar ceros
            if (fixedDecimal.endsWith('.')) fixedDecimal = fixedDecimal.slice(0, -1)
        }
        return fixedDecimal.slice(0, MAX_DISPLAY_LENGTH)
        }
    }

    return numStr.slice(0, MAX_DISPLAY_LENGTH)
}

export const calculate = (a: number, b: number, operator: Operator): string => {
    let result: number
    switch (operator) {
        case '+': result = a + b; break
        case '-': result = a - b; break
        case '*': result = a * b; break
        case '/': result = b !== 0 ? a / b : NaN; break
        case '%': result = b !== 0 ? a % b : NaN; break
        case null: result = b; break
        default: result = b; break
    }

    return formatTo9Characters(result)
}