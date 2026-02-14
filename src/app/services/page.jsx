import ServicesSection from "@/components/home/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection/TestimonialsSection";
import React from "react";

export const metadata = {
	title: "Services Care Center",
};

const Services = () => {
	return (
		<>
			<ServicesSection />
			<TestimonialsSection />
		</>
	);
};

export default Services;
