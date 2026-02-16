"use client";
import Link from "next/link";
import React from "react";

const ActionButtons = ({ booking }) => {
	const { serviceId } = booking;
	return (
		<div className="flex items-center gap-3">
			<Link
				href={`/services/${serviceId}`}
				className="px-4 py-2 text-sm font-medium border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"
			>
				View Details
			</Link>

			<button className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
				Cancel
			</button>
		</div>
	);
};

export default ActionButtons;
