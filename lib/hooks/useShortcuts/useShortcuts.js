import { useContext, useEffect } from "react";
import { ShortcutContext } from '../../context';
import { keyCharToCode } from '../../utils/map';
import chalk from 'chalk';
export const useShortcuts = (config) => {
    const [keyState, setKeyState] = useContext(ShortcutContext);
    const keyListener = (bool) => ({ code }) => setKeyState(state => state.map((keys) => Object.keys(keys).some(key => key === String(code)) ? { ...keys, [code]: bool } : keys));
    useEffect(() => {
        config.forEach(({ keys, fn }) => {
            console.log(chalk.blue('Started Config Parse!'));
            console.log(chalk.yellow('Recieved Keys:'));
            console.log(chalk.yellow(keys));
            const keycodes = keys.map(getKeycode);
            setKeyState(constructor({ keycodes, fn }));
            keycodes.forEach(() => window.addEventListener('keydown', keyListener(true)));
            keycodes.forEach(() => window.addEventListener('keyup', keyListener(false)));
            console.log(chalk.green('Applied Event Listeners to keys!'));
        });
    }, []);
    useEffect(() => {
        console.log(chalk.yellow('keyState change: '));
        keyState.forEach((keys) => !Object.values(keys).some(value => {
            console.log(chalk.green(`inside Object.values ${value}`));
            return value === false;
        }) ? keys.keysFn() : null);
    }, [keyState]);
    return {
        keyState
    };
};
export const constructor = ({ keycodes, fn }) => (state) => ([...state, { [keycodes[0]]: false, [keycodes[1]]: false, keysFn: fn }]);
export const getKeycode = (key) => keyCharToCode[key.toLocaleLowerCase()];
//# sourceMappingURL=useShortcuts.js.map