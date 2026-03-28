import { createTheme } from '@mui/material/styles';

export const getMuiTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    background: {
                        default: '#faf8ff',
                        paper: '#faf8ff',
                    },
                    text: {
                        primary: '#131b2e',
                    },
                    primary: {
                        main: '#004ced',
                    },
                }
                : {
                    background: {
                        default: '#131313',
                        paper: '#131313',
                    },
                    text: {
                        primary: '#e2e2e2',
                    },
                    primary: {
                        main: '#adc6ff',
                    },
                }),
        },
    });
