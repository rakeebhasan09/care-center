import { loginUser } from "@/action/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		// Credential Provider
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			async authorize(credentials, req) {
				const user = await loginUser(credentials);

				if (!user) return null;
				return user;
			},
		}),
		// Google Provider
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// GitHub Provider
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// ...add more providers here
	],
	callbacks: {
		async signIn({ user, account }) {
			const isExist = await dbConnect(collections.USERS).findOne({
				email: user.email,
			});

			if (isExist) return true;

			const newUser = {
				provider: account?.provider,
				fullname: user?.name,
				email: user?.email,
				role: "user",
				status: "pending",
				createdAt: new Date().toISOString(),
			};

			const result = await dbConnect(collections.USERS).insertOne(
				newUser,
			);
			return result.acknowledged;
		},

		async session({ session, token }) {
			if (token) {
				session.role = token?.role;
				session.email = token?.email;
			}
			return session;
		},
		async jwt({ token, user, account }) {
			if (user) {
				if (account.provider !== "credentials") {
					const dbUser = await dbConnect(collections.USERS).findOne({
						email: user.email,
					});
					token.role = dbUser?.role;
					token.email = dbUser?.email;
				} else {
					token.role = user?.role;
					token.email = user?.email;
				}
			}
			return token;
		},
	},
};
