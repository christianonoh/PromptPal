import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectToDB from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    return session;
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if the user exists in the database 
      const userExists = true;

      // if not, create the user in the database
      

    } catch (error) {
      return false;
    }
  },
});

export { handler as GET, handler as POST };