"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = ({ href, children }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={`hover:bg-transparent hover:text-primary text-base ${isActive ? "text-primary" : ""}`}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;
