import jwt from "jsonwebtoken";

const secret = process.env.ACCESS_TOKEN_SECRET;

const Auth = (handler)=> {
  return async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }   
    return handler(req, res) 

  } catch (error) {
    console.log(error);
  }
}};

export default Auth;

import { NextResponse } from 'next/server'
export function middleware(req) {
  const token = req.headers.authorization.split(" ")[1];

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    if (user === 'mydmin' && pwd === 'mypassword') {
      return NextResponse.next()
    }
  }
  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}