/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/iconRenderer.tsx
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { mapIconName } from './iconMapping';

interface IconRendererProps {
    name: string;
    className?: string;
    size?: number;
}

export function IconRenderer({ name, className = '', size = 20 }: IconRendererProps) {
    if (!name) return null;

    const materialIconName = mapIconName(name);

    // Check if it's a Lucide icon (capitalized)
    const LucideIcon = (LucideIcons as any)[name];

    if (LucideIcon) {
        return <LucideIcon className={className} size={size} />;
    }

    // Otherwise, assume it's a Material Icon
    return (
        <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>
            {materialIconName}
        </span>
    );
}