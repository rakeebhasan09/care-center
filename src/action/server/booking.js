"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const postBooking = async (bookingData) => {
	bookingData.status = "pending";
	bookingData.requestedAt = new Date();
	const result = await dbConnect(collections.BOOKINGS).insertOne(bookingData);
	if (result.acknowledged) {
		return {
			...result,
			insertedId: result.insertedId.toString(),
		};
	}
};
