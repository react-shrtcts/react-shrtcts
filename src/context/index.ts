import React, { createContext } from "react"
import { IShortcutContext } from '../types/index'

export const ShortcutContext = createContext<[IShortcutContext[], React.Dispatch<React.SetStateAction<IShortcutContext[]>>]>([
    [],
    () => []
])
