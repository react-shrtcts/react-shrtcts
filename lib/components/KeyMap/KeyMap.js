import React from 'react';
import { useShortcuts } from '../../';
import { StyledUl, StyledListItem, StyledKeysDiv, StyledDescDiv } from './KeyMap.styles';
export const KeyMap = ({ keyMapConfig }) => {
    const { keyState } = useShortcuts(keyMapConfig);
    return (React.createElement(StyledUl, null, keyMapConfig.map((shortcut, index) => {
        return (React.createElement(StyledListItem, { key: index },
            React.createElement(StyledKeysDiv, null, shortcut.keys.reduce((acc, current) => `${acc} ${current}`, '')),
            React.createElement(StyledDescDiv, null, shortcut.description)));
    })));
};
//# sourceMappingURL=KeyMap.js.map