import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import connectToDB from '@utils/database';
import User from '@models/user';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        // Find the user in the database by email
        const sessionUser = await User.findOne({ email: session.user.email });

        // Set the user's ID in the session
        session.user.id = sessionUser._id.toString();

        return session;
      } catch (error) {
        console.error(error);
      }
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // Check if the user exists in the database
        const userExists = await User.findOne({ email: profile.email });

        // If the user doesn't exist, create a new user in the database
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
