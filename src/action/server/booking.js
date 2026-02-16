"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

// Post New Booking
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

// Get All Bookings By User
export const bookingByUser = async (email) => {
	const query = {
		customarEmail: email,
	};
	const result = await dbConnect(collections.BOOKINGS)
		.find(query)
		.sort({
			requestedAt: -1,
		})
		.toArray();
	return result;
};
