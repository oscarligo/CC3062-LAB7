import React from 'react'
import type { CalculatorHandlers } from '../calculator/types'
import { keypad } from '../calculator/keypad' 

interface KeyboardProps {handlers: CalculatorHandlers}

export const Keyboard: React.FC<KeyboardProps> = ({ handlers }) => {
    return (
            <div className="calculator-keyboard">
                {keypad.map((button) => (
                    <button key={button.label}
                            className={`keypad-btn ${button.className || ''}`}
                            onClick={() => button.action(handlers)}
                    >{button.label}
                    </button>
                ))}
            </div>
        )
}