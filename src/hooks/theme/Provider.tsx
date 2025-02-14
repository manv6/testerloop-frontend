import React, { useMemo, useState } from 'react';
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

const LINE_HEIGHT = 1.5;
export const DARK = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '1.728rem',
            fontWeight: 800,
            lineHeight: LINE_HEIGHT,
        },
        h2: {
            fontSize: '1.44rem',
            fontWeight: 800,
            lineHeight: LINE_HEIGHT,
        },
        h3: {
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: LINE_HEIGHT,
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: LINE_HEIGHT,
        },
    },
    palette: {
        mode: 'dark',
        text: {
            primary: '#F4F4F5',
        },
        base: {
            500: '#07080A',
            400: '#121418',
            300: '#262A32',
            200: '#9FA8B6',
            100: '#F4F4F5',
        },
        primary: {
            500: '#1F1833',
            400: '#5E4899',
            300: '#9C78FF',
            200: '#C4AEFF',
            100: '#F5F2FF',
        },
        status: {
            error: {
                500: '#19060A',
                400: '#99263F',
                300: '#FF4069',
                200: '#FF8CA5',
                100: '#FFECF0',
            },
            success: {
                500: '#001913',
                400: '#009973',
                300: '#00FFBF',
                200: '#66FFD9',
                100: '#E6FFF9',
            },
            caution: {
                500: '#191306',
                400: '#997326',
                300: '#FFBF40',
                200: '#FFD98C',
                100: '#FFF9EC',
            },
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            /* Chrome, Edge, and Safari */
            ::-webkit-scrollbar {
                width: 9px;
                height: 9px;
                background-color: #121418;
                border: 1px solid #262A32;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #262A32;
                border: 3px solid transparent;
                border-radius: 9px;
                background-clip: content-box;
            }
            ::-webkit-scrollbar-corner {
                background-color: #121418;
            }
            /* Firefox */
            * {
                scrollbar-width: thin;
                scrollbar-color: #262A32 #121418;
            }
            `,
        },

        MuiBreadcrumbs: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: '11.11px',
                }),
            },
        },
        MuiSelect: {
            styleOverrides: {
                standard: ({ theme }) => ({
                    backgroundColor: theme.palette.base[400],
                    padding: '8px',
                    '&::after': {
                        display: 'none',
                    },
                    fontSize: '13.33px',
                }),
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({ theme }) => ({
                    height: '32px',
                    '&::after': {
                        display: 'none',
                    },
                    '&::before': {
                        display: 'none',
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.base[300],
                    },
                    '&.Mui-focused': {
                        backgroundColor: theme.palette.base[500],
                    },
                    '& input': {
                        '&::placeholder': {
                            color: theme.palette.base[200],
                        },
                        '&:focus::placeholder': {
                            color: theme.palette.base[100],
                        },
                    },
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.base[300],
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.base[100],
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.base[100],
                        borderWidth: '1px',
                    },
                }),
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: '13.33px',
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
                popper: {
                    pointerEvents: 'none',
                },
            },
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiButtonGroup-grouped': {
                        '&:hover': {
                            zIndex: 1,
                            backgroundColor: theme.palette.base[300],
                            border: `1px solid ${theme.palette.base[200]}`,
                        },
                        '&.selected': {
                            zIndex: 1,
                            backgroundColor: theme.palette.base[300],
                            border: `1px solid ${theme.palette.base[200]}`,
                        },
                    },
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '&:hover': {
                        backgroundColor: theme.palette.base[300],
                        border: `1px solid ${theme.palette.base[200]}`,
                    },
                    '&.selected': {
                        backgroundColor: theme.palette.base[300],
                        border: `1px solid ${theme.palette.base[200]}`,
                    },
                }),
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.base[400],
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    '&::before': {
                        display: 'none',
                    },
                    padding: 0,
                }),
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: '0px 24px',
                },
            },
        },
        MuiCollapse: {
            styleOverrides: {
                root: {
                    overflow: 'auto',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: '1rem',
                    color: theme.palette.base[200],
                    '&.Mui-selected': {
                        color: theme.palette.base[100],
                    },
                    textTransform: 'capitalize',
                }),
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: ({ theme }) => ({
                    backgroundColor: theme.palette.base[100],
                }),
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: ({ theme }) => ({
                    border: `1px solid ${theme.palette.base[300]}`,
                    borderRadius: '5px',
                }),
            },
        },
    },
});

declare module '@mui/material/styles' {
    interface StatusPalette {
        error: Partial<PaletteColor>;
        success: Partial<PaletteColor>;
        caution: Partial<PaletteColor>;
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
