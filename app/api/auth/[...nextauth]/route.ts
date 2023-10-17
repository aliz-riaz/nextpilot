import { users } from "../../../../helpers/constant";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials?.username || !credentials?.password)
          return null;
        const user = users.find((item) => item.email === credentials.username);

        if (user?.password === credentials.password) {
          // Create a custom user object here

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signIn",
    // error: "/signIn",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, trigger, user }) {
      // Modify the token with custom user data
      console.log("trigger", trigger);
      if (user) {
        // console.log("account==", account);
        // console.log("profile==", profile);
        // token.id = user.id;
        token.email = user.email;
        token.avatar = user.avatar;
        token.age = user.age;
        // Add other custom user properties as needed
      }
      return token;
    },
    async session({ session, token, user }) {
      // Modify the session with custom user data

      session.user = token;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
