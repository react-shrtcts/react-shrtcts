
export type KeyMap = string[]

export type ShortcutFunction = () => any

export interface ShortcutConfig {
    /** 
     * Simple array of string key values 
     * When all keys are pressed in combination the `ShortcutFunction` will be run
     */
    keys: KeyMap
    /**
     * The function to run when all keys are pressed
     */
    fn: ShortcutFunction
    /**
     * A short description on the keybinds function, this will be used to display to the user
     */
    description?: string
}

export interface IShortcutContext {
    keysFn: ShortcutFunction
    [key: string]: boolean
}