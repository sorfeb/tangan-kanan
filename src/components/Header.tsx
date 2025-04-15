"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import { useTranslations } from "@/context/TranslationProvider";

export default function Header() {
  const { translations, lang } = useTranslations();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-background border-b border-border shadow-sm">
      {/* Logo */}
      <div className="text-xl font-bold text-primary">
        <Link href={`/${lang}`}>Tangan Kanan</Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6">
        <Link href={`/${lang}/features`} className="text-muted-foreground hover:text-primary">
          {translations.features}
        </Link>
        <Link href={`/${lang}/pricing`} className="text-muted-foreground hover:text-primary">
          {translations.pricing}
        </Link>
        <Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary">
          {translations.about}
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <LanguageSwitcher currentLocale={lang} />

        {/* Authentication Buttons */}
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 border border-border text-muted-foreground rounded-md hover:bg-muted">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
}