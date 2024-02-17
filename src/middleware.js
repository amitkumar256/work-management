import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware executed");

const authToken = request.cookies.get("authToken")?.value;
if(request.nextUrl.pathname==="/api/login" || request.nextUrl.pathname==="/api/users"){
    return;
}
const loggedInUserNotAcessPaths =
request.nextUrl.pathname === "/login" ||
 request.nextUrl.pathname =="/signup" ;

 if(loggedInUserNotAcessPaths){
    if(authToken){
      return  NextResponse.redirect(new URL("/profile/user",request.url));
    }
 }
 else{
    if(!authToken){
      if(request.nextUrl.pathname.startsWith("/api")){
        return new NextResponse.json(
          {
            message:"Access denied",
            success:false,
          },
          {
            status:401,
          }
        )
      }
        return  NextResponse.redirect(new URL("/login",request.url));
    }
 }
console.log(authToken);
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/",
  "/login",
  "/signup",
  "/add-task",
  "/profile/:path*",
  "/show-tasks",

  "/api/:path*"] ,
}