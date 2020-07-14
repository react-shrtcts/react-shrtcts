import { IShortcutContext, ShortcutFunction, ShortcutConfig } from "../../types";
export declare const useShortcuts: (config?: ShortcutConfig[] | undefined) => {
    keyState: IShortcutContext[];
};
export declare const reducer: (obj: IShortcutContext) => IShortcutContext;
export declare const constructor: ({ keycodes, fn }: {
    keycodes: string[];
    fn: ShortcutFunction;
}) => (state: IShortcutContext[]) => IShortcutContext[];
export declare const getKeycode: (key: string) => string;
//# sourceMappingURL=useShortcuts.d.ts.map