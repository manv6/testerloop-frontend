import React, { useMemo, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery'; // eslint-disable-line
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeContext, ThemeContextType } from './context';

type Props = React.PropsWithChildren;

const LIGHT = createTheme({
    palette: {
        mode: 'light',
    },
});

const DARK = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const Provider: React.FC<Props> = (props) => {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    // TODO: Default to light for now so we don't scare anyone ;)
    const prefersDarkMode = false;
    const [mode, setMode] = useState<ThemeContextType['mode']>(
        prefersDarkMode ? 'dark' : 'light' // eslint-disable-line
    );

    const theme = useMemo(() => {
        switch (mode) {
            case 'light':
                return LIGHT;
            default:
                return DARK;
        }
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <StyledEngineProvider injectFirst>
                    {props.children}
                </StyledEngineProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default Provider;
