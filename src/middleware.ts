import { clerkMiddleware, createRouteMatcher  } from '@clerk/nextjs/server';
import { NextResponse, NextRequest} from 'next/server';
import { locales, defaultLocale } from './i18n/config';

const isProtectedRoute = createRouteMatcher([
  '/:locale/dashboard/(.*)',
  '/:locale/account/(.*)',
  '/:locale/settings/(.*)'
]);

export default clerkMiddleware((auth, request) => {
  // Skip middleware for static files and API routes
  if (shouldBypassMiddleware(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Handle language routing first
  const langResult = handleLanguageRouting(request);
  if (langResult) return langResult;

  return NextResponse.next();
});

function shouldBypassMiddleware(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api/auth') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2)$/) !== null ||
    pathname === '/favicon.svg' ||
    pathname === '/favicon.ico'
  );
}

function handleLanguageRouting(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if path already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return undefined;

  // Get preferred locale or fallback to default
  const preferredLocale = getPreferredLocale(request) || defaultLocale;
  
  // Create new URL with locale prefix
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
      return locales.includes(language);
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