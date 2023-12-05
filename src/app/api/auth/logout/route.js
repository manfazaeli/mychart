import { NextResponse } from "next/server";
export async function GET(request) {
let res= new NextResponse('deleted', {
  status: 200,
  headers: { 'Set-Cookie': `myToken=xxx;Path=/,username=xxx;Path=/,password=xxx;Path=/`},
  
});
return res;
}