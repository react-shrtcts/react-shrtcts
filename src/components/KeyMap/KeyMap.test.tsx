import React from 'react'
import { render } from '@testing-library/react'
import { KeyMap } from './KeyMap'
import { ShortcutConfig } from '../../types'

describe('<KeyMap />', () => {
    const keymap: ShortcutConfig[] = [
        {
            keys: ['ctrl', 'j'],
            fn: jest.fn(),
            description: 'New Shortcut'
        }
    ]
    it('should render', () => {
        expect(render(<KeyMap keyMapConfig={keymap} />)).toBeTruthy()
    })
    it('should display the current keybinds and descriptions stored in context', () => {
        const { findByText } = render(<KeyMap keyMapConfig={keymap} />)
        expect(findByText('ctrl j')).toBeInTheDocument()
        expect(findByText('New Shortcut')).toBeInTheDocument()
    })
})