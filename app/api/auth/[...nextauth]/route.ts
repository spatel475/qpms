import prisma from "@/prisma/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from 'bcrypt';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const getUser = async (email: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: { email: email },
		});
		return user;
	} catch (error) {
		console.error('Failed to fetch user:', error);
		throw new Error('Failed to fetch user.');
	}
}

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email " },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(5) })
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;

					const user = await getUser(email);
					if (!user) return null;

					const passwordsMatch = await compare(password, user.password);
					if (passwordsMatch) return user;
				}

				console.log('Invalid credentials');
				return null;
			},
		}),
	],
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: "/login",
	},
});

export { handler as GET, handler as POST };

