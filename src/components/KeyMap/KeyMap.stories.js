import React from 'react'
import { KeyMap } from '.'

export default {
    title: 'KeyMap'
}

export const WithShortcuts = () => <KeyMap keyMapConfig={[{
    keys: ['ctrl', 'j'],
    description: 'A great choice of shortcut',
    fn: () => { }
}, {
    keys: ['alt', 'w'],
    description: 'Another awesome shortcut bro'
}]} />
export const Empty = () => <KeyMap keyMapConfig={[]} />