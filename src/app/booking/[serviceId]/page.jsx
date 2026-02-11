import React from "react";

const BookingPage = async ({ params }) => {
	const { serviceId } = await params;
	return <div>Book {serviceId} this booking page.</div>;
};

export default BookingPage;
