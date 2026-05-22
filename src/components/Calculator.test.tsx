import { render, screen, fireEvent } from '@testing-library/react'
import { Calculator } from './Calculator'
import { describe, test, expect } from 'vitest'

describe('Prueba de Componente UI (Calculator)', () => {
  test('Debería interactuar con el teclado y mostrar el resultado del módulo en el display', async () => {
    render(<Calculator />)

    const botonOcho = screen.getByText(/^8$/)
    const botonModulo = screen.getByText(/%/)
    const botonTres = screen.getByText(/^3$/)
    const botonIgual = screen.getByText(/^=$/)

    fireEvent.click(botonOcho)
    fireEvent.click(botonModulo)
    fireEvent.click(botonTres)
    fireEvent.click(botonIgual)

    const displayElement = screen.getByTestId('display')
  
    expect(displayElement.textContent).toBe('2')
  })
})