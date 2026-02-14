"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

// নতুন ইউজার তৈরি করা
export const postUser = async (payload) => {
	const { NIDNumber, fullname, mobile, email, password } = payload;

	// যদি ফর্ম থেকে ডাটা না পাওয়া যায়
	if (!email || !password) return null;

	// ইউজার আগে থেকেই আছে কিনা চেক করা
	const isExist = await dbConnect(collections.USERS).findOne({ email });
	if (isExist) {
		return null;
	}

	// নতুন ইউজার তৈরি করা
	const newUser = {
		provider: "credentials",
		NIDNumber,
		fullname,
		mobile,
		email,
		password: await bcrypt.hash(password, 14),
		role: "user",
		status: "pending",
		createdAt: new Date().toISOString(),
	};

	// নতুন ইউজার ডাটাবেজ এ সেভ করা
	const result = await dbConnect(collections.USERS).insertOne(newUser);
	if (result.acknowledged) {
		return {
			...result,
			insertedId: result.insertedId.toString(),
		};
	}
};

// ইউজার লগইন করানো
export const loginUser = async (payload) => {
	const { email, password } = payload;
	if (!email || !password) return null;

	// ইউজার আছে কিনা চেক করা
	const user = await dbConnect(collections.USERS).findOne({ email });
	if (!user) return null;
	const isMatched = await bcrypt.compare(password, user.password);
	if (isMatched) {
		return user;
	} else {
		return null;
	}
};
