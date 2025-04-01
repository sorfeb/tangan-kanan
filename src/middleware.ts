import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse, NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

export default function middleware(request: NextRequest) {
  // Check if the path should skip certain middleware
  const path = request.nextUrl.pathname;
  
  // Apply language routing - run this first to handle redirects
  const langResult = handleLanguageRouting(request);
  if (langResult) return langResult;
  
  // Apply Clerk authentication
  const clerkResult = clerkMiddleware()(request);
  
  // We need to resolve the response to work with it
  return clerkResult.then(async (res) => {
    if (res && res.status !== 200) return res;
    
    return res || NextResponse.next();
  });
}

function handleLanguageRouting(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const preferredLocale = getPreferredLocale(request) || defaultLocale;
  
  return NextResponse.redirect(
    new URL(
      `/${preferredLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
      request.url
    )
  );
}

function getPreferredLocale(request: NextRequest): string | undefined {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',').map(l => l.split(';')[0].trim());
    const matchedLocale = parsedLocales.find(l => {
      const language = l.toLowerCase().split('-')[0];
      return locales.includes(language as any);
    });
    
    if (matchedLocale) {
      return matchedLocale.toLowerCase().split('-')[0];
    }
  }
  
  return undefined;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};