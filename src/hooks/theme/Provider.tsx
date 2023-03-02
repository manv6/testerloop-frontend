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
        primary: {
            500: '#030505',
            400: '#1B2028',
            300: '#353B46',
            200: '#B1B8C4',
            100: '#FEFDFF',
        },
    },
});

declare module '@mui/material/styles' {
    // interface Theme {
    //     status: {
    //         danger: React.CSSProperties['color'];
    //     };
    // }

    // interface Palette {
    //     neutral: Palette['primary'];
    // }

    // interface PaletteOptions {
    //     neutral: PaletteOptions['primary'];
    // }

    interface PaletteColor {
        500?: string;
        400?: string;
        300?: string;
        200?: string;
        100?: string;
    }

    interface SimplePaletteColorOptions {
        500?: string;
        400?: string;
        300?: string;
        200?: string;
        100?: string;
    }

    // interface ThemeOptions {
    //   status: {
    //     danger: React.CSSProperties['color'];
    //   };
    // }
}

export const Provider: React.FC<Props> = (props) => {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const prefersDarkMode = true;
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
