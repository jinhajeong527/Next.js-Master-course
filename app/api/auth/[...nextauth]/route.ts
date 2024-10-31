import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/prisma/client"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
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
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}