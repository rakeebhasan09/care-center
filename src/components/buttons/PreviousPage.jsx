"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const PreviousPage = () => {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className="flex items-center gap-2 text-(--muted-foreground) hover:text-(--foreground) mb-4 transition-colors"
		>
			<ArrowLeft className="w-4 h-4" />
			Back
		</button>
	);
};

export default PreviousPage;
