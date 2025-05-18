import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intl = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname: string = request.nextUrl.pathname;

  const locale = routing.locales.find((loc) => pathname.startsWith(`/${loc}/`)) || routing.defaultLocale;

  if (!token && (pathname.startsWith('/dashboard') || pathname.startsWith(`/${locale}/dashboard`))) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }
  return intl(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};