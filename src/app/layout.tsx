import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { Locale, defaultLocale } from '../i18n/config';

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
    icon: '/favicon.svg',
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
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;