import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

import { ThemedTopLoader } from "@/components/reuseables/ThemedTopLoader";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ThemeClientProvider } from "@/context/ThemeClientProvider";
import NextTopLoader from "nextjs-toploader";
import StudioNavbar from "@/components/navbar/StudioNavbar";
import GlobalFooter from "@/components/footer/GlobalFooter";

// Landing Page Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flexitistudio.com'),
  title: {
    default: 'Flexiti Studio | High-Performance Web Development',
    template: '%s | Flexiti Studio', // Automatically formats child pages (e.g. "Services | Flexiti Studio")
  },
  description: 'Flexiti Studio is a premier digital agency specializing in high-performance Next.js and React applications, SEO optimization, and seamless user experiences.',
  keywords: ['Web Development', 'Next.js Agency', 'React Developers', 'SEO Optimization', 'Digital Agency'],
  authors: [{ name: 'Flexiti Studio' }],
  creator: 'Flexiti Studio',
  publisher: 'Flexiti Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flexitistudio.com',
    title: 'Flexiti Studio | High-Performance Web Development',
    description: 'We build high-performance Next.js and React applications optimized for speed and Answer Engines.',
    siteName: 'Flexiti Studio',
    images: [
      {
        url: '/flexiti-logo.png', // Uses the logo we mapped earlier!
        width: 1200,
        height: 630,
        alt: 'Flexiti Studio Cover Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexiti Studio | Web Development Experts',
    description: 'We build high-performance Next.js and React applications.',
    images: ['/flexiti-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth bg-background transition-colors duration-300">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />
        {/* Manual Google Font link removed from here to satisfy ESLint */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} antialiased pt-6 font-body bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        <ThemeClientProvider>
          <ReactQueryProvider>
            <ThemedTopLoader />
            <StudioNavbar />
            <NextTopLoader showSpinner={false} />
            {children}
            <GlobalFooter />
          </ReactQueryProvider>
        </ThemeClientProvider>
      </body>
    </html>
  );
}