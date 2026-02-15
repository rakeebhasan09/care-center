import { loginUser } from "@/action/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		// Credential Provider
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			async authorize(credentials, req) {
				const user = await loginUser(credentials);
				return user;
			},
		}),
		// Google Provider
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log({ user, account, profile, email, credentials });
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
		// async redirect({ url, baseUrl }) {
		// 	return baseUrl;
		// },
		// async session({ session, token, user }) {
		// 	return session;
		// },
		// async jwt({ token, user, account, profile, isNewUser }) {
		// 	return token;
		// },
	},
};
