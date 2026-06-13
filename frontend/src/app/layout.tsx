import { Plus_Jakarta_Sans, Inter } from "next/font/google";
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
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://flexitistudio.com'),
  title: 'Flexiti Studio',
  description: 'Frontend + API in one Next.js app',
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
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