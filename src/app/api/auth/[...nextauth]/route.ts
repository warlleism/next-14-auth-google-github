import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "text" },
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {

                const user = {
                    id: "1",
                    name: req?.body?.name,
                    email: req?.body?.email,
                    image: 'https://avatars.githubusercontent.com/u/56014478?v=4'
                }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })

    ]
})

export { handler as GET, handler as POST }