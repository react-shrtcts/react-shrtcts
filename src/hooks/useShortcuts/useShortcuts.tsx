import React, { useContext, useEffect } from "react"
import { ShortcutContext } from '../../context'
import { IShortcutContext, ShortcutFunction, ShortcutConfig } from "../../types"
import { keyCharToCode } from '../../utils/map'
//@ts-ignore
import chalk from 'chalk'

export const useShortcuts = (config: ShortcutConfig[]) => {
    const [keyState, setKeyState] = useContext<[IShortcutContext[], React.Dispatch<React.SetStateAction<IShortcutContext[]>>]>(ShortcutContext)

    const keyListener = (bool: boolean) =>({ code }: KeyboardEvent) => setKeyState(state => state.map((keys) => Object.keys(keys).some(key => key === String(code)) ? {...keys, [code] : bool } : keys))
    // process config
    useEffect(() => {
        config.forEach(({ keys, fn }) => {
            console.log(chalk.blue('Started Config Parse!'))
            console.log(chalk.yellow('Recieved Keys:'))
            console.log(chalk.yellow(keys))
            // get keycode
            const keycodes = keys.map(getKeycode)
            //  construct state
            setKeyState(constructor({ keycodes, fn}))
            // assign event
            keycodes.forEach(() => window.addEventListener('keydown', keyListener(true)))
            keycodes.forEach(() => window.addEventListener('keyup', keyListener(false)))
            console.log(chalk.green('Applied Event Listeners to keys!'))
        })
    }, [])

    useEffect(() => {
        console.log(chalk.yellow('keyState change: '))
        keyState.forEach((keys) => !Object.values(keys).some(value => {
            console.log(chalk.green(`inside Object.values ${value}`))    
            return value === false
        }) ? keys.keysFn() : null)
    }, [keyState])
    
    return {
        keyState
    }
}

export const constructor = ({keycodes, fn}: {keycodes: string[], fn: ShortcutFunction }) => 
(state: IShortcutContext[]) => ([...state, { [keycodes[0]]: false, [keycodes[1]]: false, keysFn: fn}]) as IShortcutContext[]

export const getKeycode = (key: string): string => keyCharToCode[key.toLocaleLowerCase()]