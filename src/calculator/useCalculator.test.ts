// @vitest-environment jsdom
import { renderHook, act } from '@testing-library/react'
import { useCalculator } from './useCalculator'
import { describe, test, expect } from 'vitest'

describe('Pruebas del Hook useCalculator', () => {
    test('Debería ignorar cualquier dígito ingresado después del noveno carácter', () => {
        const { result } = renderHook(() => useCalculator())

        const digitos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '9']
        
        digitos.forEach(digit => {
        act(() => {
            result.current.inputDigit(digit)
        })
        })

        expect(result.current.displayValue).toBe('123456789')
        expect(result.current.displayValue.length).toBe(9)
    })

    test('El punto decimal debe contar dentro del límite de 9 caracteres', () => {
        const { result } = renderHook(() => useCalculator())

        const acciones = ['1', '2', '3', '4', '.', '5', '6', '7', '8', '9']

        acciones.forEach(accion => {
        act(() => {
            result.current.inputDigit(accion)
        })
        })

        // Debe medir 9 y contener el punto ocupando su lugar
        expect(result.current.displayValue).toBe('1234.5678')
        expect(result.current.displayValue.length).toBe(9)
    })
})