import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

// Handle language routing first before authentication
function handleLanguageRouting(req) {
  const pathname = req.nextUrl.pathname;

  // Paths that should bypass language routing
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api/') ||
    pathname.match(/\.(jpg|png|gif|svg|ico)$/)
  ) {
    return false; // Continue with normal middleware processing
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return false;

  const preferredLocale = getPreferredLocale(req) || defaultLocale;
  
  // Redirect to the localized path
  return NextResponse.redirect(
    new URL(
      `/${preferredLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
      req.url
    )
  );
}

function getPreferredLocale(request) {
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

// Use Clerk's authMiddleware with custom beforeAuth function for i18n
export default authMiddleware({
  // Handle language routing before authentication
  beforeAuth: (req) => {
    const langResult = handleLanguageRouting(req);
    if (langResult) return langResult;
    return NextResponse.next();
  },
  
  // Public routes that don't require authentication
  publicRoutes: [
    '/',
    '/sign-in',
    '/sign-up',
    '/api/webhook',
    // Public routes with localization
    '/:locale', 
    '/:locale/features',
    '/:locale/pricing',
    '/:locale/about',
    '/api/webhooks(.*)',
    // Static assets
    '/favicon.ico',
    '/robots.txt',
  ],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|.*\\.(.*)$).*)',
    // Include all paths starting with /api
    '/api/(.*)',
  ],
};