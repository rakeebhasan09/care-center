"use client";
import { deleteSingleBooking } from "@/action/server/booking";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const ActionButtons = ({ booking }) => {
	const { serviceId, _id } = booking;
	const router = useRouter();
	const handleDeleteBooking = async (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteSingleBooking(id);
				Swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				});
				router.refresh();
			}
		});
	};
	return (
		<div className="flex items-center gap-3">
			<Link
				href={`/services/${serviceId}`}
				className="px-4 py-2 text-sm font-medium border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"
			>
				View Details
			</Link>

			<button
				onClick={() => handleDeleteBooking(_id)}
				className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
			>
				Cancel
			</button>
		</div>
	);
};

export default ActionButtons;
