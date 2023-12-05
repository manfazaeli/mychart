
const users=[{username:'admin',password:'7447'},{username:'manoo',password:'48711358'}];
const jwt = require('jsonwebtoken');
import { NextResponse } from 'next/server';
export async function POST(req) {
  // Do whatever you want
  let authenticated=false;
  console.log('I received your POST request ');
  const {username,password}=await req.json();
  console.log(username,password);
  users.map(item=>(item.username===username && item.password===password)?authenticated=true:'');
  const secret = process.env.JWT_SECRET||"";
  console.log('secret',secret)
  // Generate a JWT token
  const token = jwt.sign({ userId: password }, secret, { expiresIn: '1h' });
  console.log(token);
  if(authenticated){
    return new Response('authenticated!', {
        status: 200,
        headers: { 'Set-Cookie': `myToken=${token};Path=/,username=${username};Path=/,password=${password};Path=/`},
      }) 
 }
 else
 return new Response('un_authenticated!', {
    status: 201,
  }) 
 
}
