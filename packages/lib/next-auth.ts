import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import MicrosoftProvider from 'next-auth/providers/azure-ad';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import supabase from "./supabase";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        MicrosoftProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password"  }
            },
            async authorize(credentials) {
                const { data: users, error } = await supabase
                    .from("users")
                    .select("*")
                    .eq("email", credentials.email)
                    .single();

                if (error || users ) return null;

                const isValid = await bcrypt.compare(
                    credentials?.password,
                    users.password,
                );

                if (isValid) {
                    return { id: users.id, email: users.email, name: users.username };
                } else {
                    return null;
                }
            }
        })
    ],
    pages : {
        signIn: 'auth/sign-in',
    },
    session : {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.email = token.email;
            session.user.name = token.name;
            return session;
        }
    }
}

export default NextAuth(authOptions)