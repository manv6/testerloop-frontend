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
        base: {
            500: '#030505',
            400: '#1B2028',
            300: '#353B46',
            200: '#B1B8C4',
            100: '#FEFDFF',
        },
        primary: {
            500: '#102D66',
            400: '#2871FE',
            300: '#4886FE',
            200: '#699CFE',
            100: '#89B1FE',
        },
        status: {
            error: {
                500: '#661510',
                400: '#FE3528',
                300: '#FE5348',
                200: '#FE7269',
                100: '#FE9089',
            },
            success: {
                500: '#106642',
                400: '#28FEA4',
                300: '#48FEB2',
                200: '#69FEBF',
                100: '#89FECD',
            },
        },
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                standard: ({ theme }) => ({
                    backgroundColor: theme.palette.base[400],
                    padding: '8px',
                    '&::after': {
                        display: 'none',
                    },
                }),
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&::after': {
                        display: 'none',
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '&.Mui-selected': {
                        backgroundColor: theme.palette.primary[500],
                        borderTop: `1px solid ${theme.palette.primary[400]}`,
                        borderBottom: `1px solid ${theme.palette.primary[400]}`,
                    },
                }),
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: ({ theme }) => ({
                    backgroundColor: theme.palette.base[500],
                    border: `1px solid ${theme.palette.base[300]}`,
                }),
                arrow: ({ theme }) => ({
                    '&::before': {
                        backgroundColor: theme.palette.base[500],
                        border: `1px solid ${theme.palette.base[300]}`,
                    },
                }),
            },
        },
    },
});

declare module '@mui/material/styles' {
    interface StatusPalette {
        error: Partial<PaletteColor>;
        success: Partial<PaletteColor>;
    }

    interface Palette {
        base: PaletteColor;
        status: StatusPalette;
    }

    interface PaletteOptions {
        base?: Partial<PaletteColor>;
        status?: StatusPalette;
    }

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
