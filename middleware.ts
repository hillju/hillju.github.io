import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DISABLED_ROUTES } from './data/disabledRoutes'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (DISABLED_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all routes except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|static|[\\w-]+\\.\\w+).*)',
  ],
}
