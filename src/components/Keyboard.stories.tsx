import type { Meta, StoryObj } from '@storybook/react'
import { Keyboard } from './Keyboard'
import type { CalculatorHandlers } from '../calculator/types'

// Configuración principal del componente en Storybook
const meta: Meta<typeof Keyboard> = {
    title: 'Calculadora/Teclado',
    component: Keyboard,
}

export default meta
type Story = StoryObj<typeof Keyboard>

export const RenderizadoBasico: Story = {
    args: {
        handlers: {} as CalculatorHandlers, 
    },
}   
