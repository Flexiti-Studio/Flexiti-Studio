import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_PREFIXES = ['/admin', '/studio'];
const LOGIN_PATH = '/admin/login';
const COOKIE_NAME = 'admin_auth';
const VALID_TOKEN = 'flexiti_admin_0806';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get('host') || '';

  // 1. Extract Subdomain
  // e.g., blogs.localhost:3000 -> hostname: blogs, subdomain: blogs
  // e.g., localhost:3000 -> hostname: localhost:3000
  const hostCleaned = host.replace('.localhost:3000', '');
  const subdomainCandidate = hostCleaned.split('.')[0];

  const isMainDomain = 
    !subdomainCandidate || 
    subdomainCandidate === 'localhost:3000' || 
    subdomainCandidate === 'localhost' || 
    subdomainCandidate === 'flexiti' || 
    subdomainCandidate === 'www';

  if (!isMainDomain) {
    // Check if the route is an API, static asset, or has file extension
    const isApiOrAsset = 
      pathname.startsWith('/api') || 
      pathname.startsWith('/_next') || 
      pathname.startsWith('/favicon.ico') ||
      pathname.includes('.');

    if (!isApiOrAsset) {
      // Rewrite the URL internally to include the tenant slug as the first segment
      // e.g., blogs.localhost:3000/ -> rewrites to /blogs
      // e.g., blogs.localhost:3000/some-sub-route -> rewrites to /blogs/some-sub-route
      const tenantRewriteUrl = new URL(`/${subdomainCandidate}${pathname}${req.nextUrl.search}`, req.url);
      return NextResponse.rewrite(tenantRewriteUrl);
    }
  }

  // 2. Admin Authentication Cookie Protection for Main Domain
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  const isLoginPage = pathname === LOGIN_PATH;
  const isAuthApi   = pathname.startsWith('/api/admin/auth');

  if (isProtected && !isLoginPage && !isAuthApi) {
    const token = req.cookies.get(COOKIE_NAME)?.value;

    if (token !== VALID_TOKEN) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = LOGIN_PATH;
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
