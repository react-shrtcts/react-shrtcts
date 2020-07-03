import React, { useState } from 'react'
import { ShortcutContext } from '../context'
import { IShortcutContext } from '../types'

export const ShortcutProvider: React.FC = ({ children }) => {
 
    const [keyState, setKeyState] = useState<IShortcutContext[]>([])
    
    return (
        <ShortcutContext.Provider value={[keyState, setKeyState]}>
            {children}
        </ShortcutContext.Provider>
    )
}