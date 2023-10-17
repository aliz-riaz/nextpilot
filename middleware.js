import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const authToken = request.cookies.get("next-auth.session-token")?.value;
  const notLoggedInUser = pathname === "/about";

  if (notLoggedInUser) {
    console.log("aliriaz---");
    if (!authToken) {
      return NextResponse.redirect(new URL("/signIn", request.url));
    }
  }
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about", "/dashboard/:path*"],
};
