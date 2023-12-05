import { NextResponse } from 'next/server';
const users=[{username:'admin',password:'7447'},{username:'manoo',password:'48711358'}];
export function middleware(request) {
  let isAuth = false;
if(request.cookies.get("username")&&request.cookies.get("password")){
  const username=request.cookies.get("username").value;
  const password=request.cookies.get("password").value;
  users.map(item=>(item.username===username && item.password===password)?isAuth=true:'');
}
 
  if (isAuth) {
    console.log('middleware isAuth ')
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/login', request.url))
}
export const config = {
  matcher: ['/home/:path*',],
}
