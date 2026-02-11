import React from "react";

const ServiceDetailsPage = async ({ params }) => {
	const { serviceId } = await params;
	console.log(serviceId);
	return <div>This is service details page.</div>;
};

export default ServiceDetailsPage;
