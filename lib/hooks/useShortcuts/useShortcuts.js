import { useContext, useEffect } from "react";
import { ShortcutContext } from '../../context';
import { keyCharToCode } from '../../utils/map';
import { logger } from '../../utils/logger';
import chalk from 'chalk';
export const useShortcuts = (config) => {
    const [keyState, setKeyState] = useContext(ShortcutContext);
    const keyListener = (bool) => (event) => {
        const { code } = event;
        event.preventDefault();
        setKeyState(state => state.map((keys) => Object.keys(keys).some(key => key === String(code)) ? { ...keys, [code]: bool } : keys));
    };
    useEffect(() => {
        const keydownListener = keyListener(true);
        const keyupListener = keyListener(false);
        config.forEach(({ keys, fn }) => {
            logger(chalk.blue('Started Config Parse!'));
            logger(chalk.yellow('Recieved Keys:'));
            logger(chalk.yellow(keys));
            const keycodes = keys.map(getKeycode);
            setKeyState(constructor({ keycodes, fn }));
            keycodes.forEach(() => window.addEventListener('keydown', keydownListener));
            keycodes.forEach(() => window.addEventListener('keyup', keyupListener));
            logger(chalk.green('Applied Event Listeners to keys!'));
        });
        return () => {
            config.forEach(({ keys, fn }) => {
                logger(chalk.blue('Removing event listeners'));
                const keycodes = keys.map(getKeycode);
                setKeyState([]);
                keycodes.forEach(() => window.removeEventListener('keydown', keydownListener));
                keycodes.forEach(() => window.removeEventListener('keyup', keyupListener));
                logger(chalk.green('Applied Event Listeners to keys!'));
            });
        };
    }, []);
    useEffect(() => {
        logger(chalk.yellow('keyState change: '));
        keyState.forEach((keys) => {
            const run = !Object.values(keys).some(value => {
                logger(chalk.green(`inside Object.values ${value}`));
                return value === false;
            });
            if (run) {
                keys.keysFn();
                setKeyState(state => state.map(reducer));
            }
        });
    }, [keyState]);
    return {
        keyState
    };
};
export const reducer = (obj) => Object.entries(obj).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: typeof value === 'boolean' ? false : value
}), {});
export const constructor = ({ keycodes, fn }) => (state) => ([...state, { [keycodes[0]]: false, [keycodes[1]]: false, keysFn: fn }]);
export const getKeycode = (key) => keyCharToCode[key.toLocaleLowerCase()];
//# sourceMappingURL=useShortcuts.js.map