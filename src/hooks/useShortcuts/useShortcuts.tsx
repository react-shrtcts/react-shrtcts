import React, { useContext, useEffect } from "react"
import { ShortcutContext } from '../../context'
import { IShortcutContext, ShortcutFunction, ShortcutConfig } from "../../types"
import { keyCharToCode } from '../../utils/map'
import { logger } from '../../utils/logger'
//@ts-ignore
import chalk from 'chalk'

export const useShortcuts = (config?: ShortcutConfig[]) => {
    const [keyState, setKeyState] = useContext<[IShortcutContext[], React.Dispatch<React.SetStateAction<IShortcutContext[]>>]>(ShortcutContext)

    const keyListener = (bool: boolean) =>(event: KeyboardEvent) => {
        const { code } = event
        event.preventDefault()
        setKeyState(state => state.map((keys) => Object.keys(keys).some(key => key === String(code)) ? {...keys, [code] : bool } : keys))
    }

    // process config
    useEffect(() => {
        const keydownListener = keyListener(true)
        const keyupListener = keyListener(false)

        config && config.forEach(({ keys, fn }) => {
            logger(chalk.blue('Started Config Parse!'))
            logger(chalk.yellow('Received Keys:'))
            logger(chalk.yellow(keys))
            // get keycode
            const keycodes = keys.map(getKeycode)
            //  construct state
            setKeyState(constructor({ keycodes, fn}))
            // assign event
            keycodes.forEach(() => window.addEventListener('keydown', keydownListener))
            keycodes.forEach(() => window.addEventListener('keyup', keyupListener))
            logger(chalk.green('Applied Event Listeners to keys!'))
        })
        return () => {
            config && config.forEach(({ keys, fn }) => {
                logger(chalk.blue('Removing event listeners'))
                // get keycode
                const keycodes = keys.map(getKeycode)
                // remove from state
                setKeyState([])

                // assign event
                keycodes.forEach(() => window.removeEventListener('keydown', keydownListener))
                keycodes.forEach(() => window.removeEventListener('keyup', keyupListener))
                logger(chalk.green('Applied Event Listeners to keys!'))
            })  
        }
    }, [])

    useEffect(() => {
        logger(chalk.yellow('keyState change: '))
        keyState.forEach((keys) => {
            const run = !Object.values(keys).some(value => {
                logger(chalk.green(`inside Object.values ${value}`))    
                return value === false
            })
            if (run) {
                keys.keysFn()
                setKeyState(state => state.map(reducer))
            }
        })
    }, [keyState])
    
    return {
        keyState
    }
}

export const reducer = (obj: IShortcutContext) => Object.entries(obj).reduce((acc, [key, value]) => ({ 
    ...acc,
    [key]: typeof value === 'boolean' ? false : value
}), {} as IShortcutContext)

export const constructor = ({keycodes, fn}: {keycodes: string[], fn: ShortcutFunction }) => 
(state: IShortcutContext[]) => ([...state, { [keycodes[0]]: false, [keycodes[1]]: false, keysFn: fn}]) as IShortcutContext[]

export const getKeycode = (key: string): string => keyCharToCode[key.toLocaleLowerCase()]