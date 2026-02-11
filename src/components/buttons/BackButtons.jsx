"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButtons = () => {
	const router = useRouter();
	return (
		<div>
			<button
				onClick={() => router.back()}
				className="flex items-center gap-2 text-(--background)/80 hover:text-(--background) mb-4 transition-colors"
			>
				<ArrowLeft className="w-4 h-4" />
				Back
			</button>
		</div>
	);
};

export default BackButtons;
