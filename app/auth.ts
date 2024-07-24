import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare, hash } from 'bcrypt-ts';
import { getUser } from  '@/lib/db';
import { authConfig } from './auth.config';
import { genSaltSync, hashSync } from "bcrypt-ts";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        console.log(email,password)
        let user = await getUser(email);
        console.log(user)
        if (user.length === 0) return null;
        console.log(password, user[0].password)
        const salt = genSaltSync(10);
        const hash = hashSync(user[0].password!, salt);
        
        let passwordsMatch = await compare(password,hash);
        console.log(passwordsMatch)
        if (passwordsMatch) return user[0] as any;
        else return null
      },
    }), 
  ],
});