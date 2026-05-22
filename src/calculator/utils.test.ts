import { describe, test, expect } from 'vitest'
import { calculate } from './utils'

describe('Pruebas de Formateo y División', () => {
    test('Debe verificar que el resultado tenga un máximo de 9 caracteres', () => {
        const resultado = calculate(22, 7, '/')
    
        expect(resultado.length).toBe(9)
        expect(resultado).toBe('3.1428571')
        expect(resultado.length).toBeLessThanOrEqual(9)
    })
})


describe('Pruebas de Erroes', () => {
    test('Debería retornar ERROR si el resultado es negativo', () => {
        const resultadoRestaNegativa = calculate(5, 12, '-')
        expect(resultadoRestaNegativa).toBe('ERROR')
    })

    test('Debería retornar ERROR si el resultado supera 999999999', () => {
        const resultadoSumaGigante = calculate(999999999, 1, '+')
        expect(resultadoSumaGigante).toBe('ERROR')
    })
})