"use client";

import { locales } from "@/i18n/config";
import { useTranslations } from "@/context/TranslationProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon, CheckIcon } from "lucide-react";

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <GlobeIcon className="h-5 w-5" />
          <span>{lang.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => setLang(locale)}
            className="flex items-center justify-between"
          >
            <span>{locale.toUpperCase()}</span>
            {locale === lang && <CheckIcon className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}