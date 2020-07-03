
export type KeyMap = string[]

export type ShortcutFunction = () => any

export interface ShortcutConfig {
    keys: KeyMap
    fn: ShortcutFunction
}

export interface IShortcutContext {
    keysFn: ShortcutFunction
    [key: string]: boolean
}