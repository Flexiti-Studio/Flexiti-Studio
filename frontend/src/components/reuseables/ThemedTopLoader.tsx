'use client';

import { useTheme } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from 'react';

export function ThemedTopLoader() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === 'dark' || theme === 'dark';

    return (
        <NextTopLoader
            color={isDark ? '#3b82f6' : '#2563eb'}
            height={3}
            showSpinner={false}
        />
    );
}
