// components/ReadTimeDisplay.tsx
'use client';

import { Clock, Image, Code, FileText } from 'lucide-react';
import { useState } from 'react';

interface ReadTimeDisplayProps {
    readTime: string;
    details?: {
        minutes: number;
        textMinutes: number;
        imageMinutes: number;
        codeMinutes: number;
        formatted: string;
    };
    showDetails?: boolean;
    className?: string;
}

export default function ReadTimeDisplay({
    readTime,
    details,
    showDetails = false,
    className = ''
}: ReadTimeDisplayProps) {
    const [showBreakdown, setShowBreakdown] = useState(false);

    return (
        <div className={`inline-flex items-center gap-1.5 ${className}`}>
            <Clock className="w-3.5 h-3.5 text-text-muted dark:text-gray-400" />
            <span className="text-xs md:text-sm text-text-muted dark:text-gray-400">
                {readTime}
            </span>

            {details && showDetails && (
                <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="ml-1 text-xs text-primary hover:underline"
                    title="Show breakdown"
                >
                    ⓘ
                </button>
            )}

            {showBreakdown && details && (
                <div className="absolute z-10 mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-xs min-w-[200px]">
                    <div className="font-bold mb-2">Reading Time Breakdown</div>
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <FileText className="w-3 h-3" />
                                <span>Text</span>
                            </div>
                            <span>{details.textMinutes} min</span>
                        </div>
                        {details.imageMinutes > 0 && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <Image className="w-3 h-3" />
                                    <span>Images</span>
                                </div>
                                <span>{details.imageMinutes} min</span>
                            </div>
                        )}
                        {details.codeMinutes > 0 && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <Code className="w-3 h-3" />
                                    <span>Code</span>
                                </div>
                                <span>{details.codeMinutes} min</span>
                            </div>
                        )}
                        <div className="pt-1.5 mt-1.5 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center justify-between font-bold">
                                <span>Total</span>
                                <span>{details.formatted}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Simplified version for cards
export function SimpleReadTime({ readTime, className = '' }: { readTime: string; className?: string }) {
    return (
        <div className={`inline-flex items-center gap-1.5 ${className}`}>
            <Clock className="w-3.5 h-3.5 text-text-muted dark:text-gray-400" />
            <span className="text-xs text-text-muted dark:text-gray-400">
                {readTime}
            </span>
        </div>
    );
}