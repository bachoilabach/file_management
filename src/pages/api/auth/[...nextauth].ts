import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
interface IAccount {
  provider: string;
  type: string;
  access_token?: string;
  id_token?: string;
}
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          access_type: "offline",
          // prompt: "consent",
          scope:
            "openid email profile https://www.googleapis.com/auth/drive",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      account,
    }: {
      token: Record<string, unknown>;
      account: IAccount;
    }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Record<string, unknown>;
      token: Record<string, unknown>;
    }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  // secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
