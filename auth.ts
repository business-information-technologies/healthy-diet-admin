import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    pages: {
        signIn: "/",
    },
    callbacks: {
        async jwt({ user, token, account, profile }) {
            // token.sub = profile?.id ?? undefined
            if (account && profile) {
                token.sub = profile.sub ?? undefined;
            }
            return token
        },
        async session({ user, session, token }) {
            session.user.id = token.sub!;
            return session;
        }
    },
})