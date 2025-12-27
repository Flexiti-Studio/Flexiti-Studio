import React from 'react'
import Link from 'next/link'
import { footerLinks } from './constants'
import StudioLogo from '@/components/navbar/StudioLogo'


const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900/50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Company Info */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2">
                            <StudioLogo />
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                Flexiti Software
                            </h2>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Modern software for the future of business.
                        </p>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-bold text-gray-900 dark:text-white">
                                {column.title}
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} Flexiti Software. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer