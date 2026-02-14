import AboutSection from "@/components/home/AboutSection/AboutSection";
import CTASection from "@/components/home/CTASection/CTASection";
import React from "react";

export const metadata = {
	title: "About Care Center",
};

const AboutPage = () => {
	return (
		<>
			<AboutSection />
			<CTASection />
		</>
	);
};

export default AboutPage;
