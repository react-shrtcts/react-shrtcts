import React, { useState } from 'react';
import { ShortcutContext } from '../context';
export const ShortcutProvider = ({ children }) => {
    const [keyState, setKeyState] = useState([]);
    return (React.createElement(ShortcutContext.Provider, { value: [keyState, setKeyState] }, children));
};
//# sourceMappingURL=index.js.map