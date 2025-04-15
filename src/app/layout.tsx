import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { TranslationProvider } from "@/context/TranslationProvider";
import { Locale, defaultLocale } from '../i18n/config';
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tangan Kanan",
  description: "AI-powered business assistant for entrepreneurs",
  icons: {
    icon: '../favicon.svg',
  },
};

function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang = (params?.lang || defaultLocale) as Locale;

  return (
    <ClerkProvider>
      <html lang={lang}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <TranslationProvider initialLocale={lang}>
            <Header />
            {children}
            <Footer />
          </TranslationProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;