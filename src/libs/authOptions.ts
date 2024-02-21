import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || "",
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_NEXTAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_NEXTAUTH_GOOGLE_SECRET_ID as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        return {
          ...token,
          user,
        };
      }
      return token;
    },

    async session({ session, token }: any) {
      return {
        ...session,
        user: token.user,
      };
    },
  },
};
