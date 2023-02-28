import { createContext } from 'react';

export type ThemeContextType = {
    mode: 'dark' | 'light';
    setMode: (mode: 'dark' | 'light') => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    mode: 'dark',
    setMode: () => {},
});
