import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_PREFIXES = ['/admin', '/studio'];
const LOGIN_PATH = '/admin/login';
const COOKIE_NAME = 'admin_auth';
// Simple token — not a secret, just a session marker
const VALID_TOKEN = 'flexiti_admin_0806';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect admin/* routes (skip the login page itself and auth API)
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  const isLoginPage = pathname === LOGIN_PATH;
  const isAuthApi   = pathname.startsWith('/api/admin/auth');

  if (!isProtected || isLoginPage || isAuthApi) return NextResponse.next();

  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (token !== VALID_TOKEN) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = LOGIN_PATH;
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
