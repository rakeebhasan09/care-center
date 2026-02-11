import AboutSection from "@/components/home/AboutSection/AboutSection";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import ServicesSection from "@/components/home/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection/TestimonialsSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<TestimonialsSection />
		</>
	);
}
