import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const CTASection = () => {
	return (
		<section className="bg-hero-gradient section-padding">
			<div className="container">
				<div className="max-w-3xl mx-auto text-center space-y-8">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--foreground)">
						Ready to Find the Perfect{" "}
						<span className="text-primary">Caregiver</span>?
					</h2>

					<p className="text-lg text-(--muted-foreground) max-w-xl mx-auto">
						Join thousands of families who trust Care.xyz for their
						caregiving needs. Book your first session today and
						experience the difference.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/register"
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 bg-primary text-(--primary-foreground) hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] h-11 px-5 py-2"
						>
							Get Started Now
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link
							href="tel:+8801234567890"
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 border-2 border-primary/20 bg-(--card) text-foreground hover:border-primary hover:bg-primary/5 text-base h-11 px-5 py-2"
						>
							<Phone className="w-5 h-5" />
							Call Us: +880 1234 567890
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
