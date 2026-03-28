'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { getMuiTheme } from '@/lib/theme';
import { useMemo, useEffect, useState } from 'react';

export function ThemeClientProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            <MuiWrapper>{children}</MuiWrapper>
        </NextThemesProvider>
    );
}

function MuiWrapper({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme(); // 'light' | 'dark' | undefined
    console.log(resolvedTheme)
    const [mounted, setMounted] = useState(false);

    // prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    const muiTheme = useMemo(
        () => getMuiTheme(resolvedTheme === 'dark' ? 'dark' : 'light'),
        [resolvedTheme]
    );

    if (!mounted) {
        return <div className="min-h-screen bg-background text-foreground transition-colors duration-300">{children}</div>;
    }
    
    return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
}
