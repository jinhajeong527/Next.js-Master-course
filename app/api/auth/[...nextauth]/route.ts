import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/prisma/client"
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: 'Email'},
                password: {label: 'Password', type: 'password', placeholder: 'Password'}
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                })
                if (!user) return null;
                const passwordsMatch = await bcrypt.compare(
                    credentials.password, user.hashedPassword!
                );
                return passwordsMatch ? user : null;
            },
        }),
        GoogleProvider({
            // We know that we have set this up properly
            // So we can put an exclamation mark at the end
            // And tell the typescript compiler that we definitely have
            // a value stored in this variable
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    pages: {
    }
    // As the time of the video recorded, this option was needed
    // to store JWT session info to the Database
    // session: {
    //     strategy: 'jwt'
    // }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}