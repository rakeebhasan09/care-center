import { CircleX } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center py-10 md:py-16 lg:py-20 gap-8">
			<CircleX className="text-red-500 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
			<h2 className="text-4xl font-bold text-red-400">Not Found</h2>
			<Link className="btn btn-primary border-none" href="/">
				Return Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
