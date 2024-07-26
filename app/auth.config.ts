import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      let isLoggedIn = !!auth?.user;
      let isOnDashboard = nextUrl.pathname.startsWith('/admin');
      console.log("isLoggedIn", isLoggedIn);
      console.log("isOnDashboard", isOnDashboard);

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/admin', nextUrl));
      }

      return true;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("callback",user, account, profile, email, credentials);
      if (!user) {
        return '/login?error=CredentialsSignin';
      }
      return true;
    }
  },
} satisfies NextAuthConfig;