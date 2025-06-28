import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token")?.value;
  const isAuthenticated = !!authToken;

  // Define protected and auth routes
  const protectedRoutes = ["/", "/livecam", "/map", "/override", "/reports"];
  const authRoutes = ["/signin", "/signup"];

  const { pathname } = request.nextUrl;

  // Redirect unauthenticated users from protected routes
  if (!isAuthenticated && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next(); // Continue as normal
}

// Apply middleware to all routes
export const config = {
  matcher: ["/", "/livecam", "/map", "/override", "/reports", "/signin", "/signup"],
};
