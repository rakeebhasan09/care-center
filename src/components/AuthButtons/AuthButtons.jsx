"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButtons = () => {
	const session = useSession();
	return (
		<div className="flex items-center gap-3">
			{session.status === "authenticated" ? (
				<>
					<button
						onClick={() => signOut()}
						className="btn btn-primary text-base border"
					>
						Log Out
					</button>
				</>
			) : (
				<>
					<Link
						href={"/login"}
						className="btn btn-primary text-base border"
					>
						Login
					</Link>
					<Link
						href={"/register"}
						className="btn btn-primary btn-outline text-base hidden md:flex border"
					>
						Register
					</Link>
				</>
			)}
		</div>
	);
};

export default AuthButtons;
