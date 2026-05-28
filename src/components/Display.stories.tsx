import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from './Display'

// Configuración principal del componente en Storybook
const meta: Meta<typeof Display> = {
  title: 'Calculadora/Display',
  component: Display,
  tags: ['autodocs'], 
}

export default meta
type Story = StoryObj<typeof Display>

// Escenario 1: Estado inicial o vacio
export const Inicial: Story = {
  args: {
    value: '0',
  },
}

// Escenario 2: Validar visualmente el límite estricto de 9 caracteres
export const LimiteMaximo: Story = {
  args: {
    value: '1234.5678',
  },
}

// Escenario 3: Cómo reacciona la interfaz ante un error de operación
export const EstadoError: Story = {
  args: {
    value: 'ERROR',
  },
}