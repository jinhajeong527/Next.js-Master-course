import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            // We know that we have set this up properly
            // So we can put an exclamation mark at the end
            // And tell the typescript compiler that we definitely have
            // a value stored in this variable
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
});

export {handler as GET, handler as POST}