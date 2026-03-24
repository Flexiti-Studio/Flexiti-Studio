import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemedTopLoader } from "@/components/reuseables/ThemedTopLoader";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import StudioNavbar from "@/components/navbar/StudioNavbar";
import { ThemeClientProvider } from "@/context/ThemeClientProvider";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Container } from "@mui/material";

// Standard Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Flexiti Studio',
  description: 'Frontend + API in one Next.js app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />
        {/* Manual Google Font link removed from here to satisfy ESLint */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-6`}
        suppressHydrationWarning={true}
      >
        <ThemeClientProvider>
          <ReactQueryProvider>
            <ThemedTopLoader />
            <StudioNavbar />
            <NextTopLoader showSpinner={false} />
            <Container maxWidth="lg">
              {children}
            </Container>
            <Footer />
          </ReactQueryProvider>
        </ThemeClientProvider>
      </body>
    </html>
  );
}