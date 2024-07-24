import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from  '@/lib/db';
import { authConfig } from './auth.config';

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
        return user[0] as any;
        let passwordsMatch = await compare(password, user[0].password!);
        console.log(passwordsMatch)
        if (passwordsMatch) return user[0] as any;
        else return null
      },
    }), 
  ],
});