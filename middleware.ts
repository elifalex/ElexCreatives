import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || ''
  const isSubdomain = hostname.startsWith('dananglife.')

  if (isSubdomain) {
    const url = req.nextUrl.clone()
    url.pathname = `/dananglife${url.pathname === '/' ? '' : url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icons|screenshots|public).*)'],
}
