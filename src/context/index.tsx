import {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState,
    ReactNode,
    useEffect,
} from 'react';

import DytePlugin from '@dytesdk/plugin-sdk';

/**
 * Initialize plugin and store in `plugin` state
 */
const initPlugin = (
    setPlugin: Dispatch<SetStateAction<DytePlugin | undefined>>
    ) => {
    const plugin = DytePlugin.init();
    setPlugin(plugin);
}

/**
 * Create a plugin context
 */
const PluginContext = createContext<DytePlugin | undefined>(undefined);

/**
 * Create a provider for the context
 */
export const PluginProvider = (props: { children: ReactNode }) => {
    const {
        children
    } = props;
    const [plugin, setPlugin] = useState<DytePlugin>();

    useEffect(() => {
        initPlugin(setPlugin);
    }, [])

    return <PluginContext.Provider value={plugin}>{children}</PluginContext.Provider>;
};

/**
 * Hook to use plugin context
 */
export const useDytePlugin = () => {
return useContext(PluginContext);
};