import { ArrowRight, Shield, Clock, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
	const features = [
		{ icon: Shield, text: "Verified Caregivers" },
		{ icon: Clock, text: "24/7 Available" },
		{ icon: Heart, text: "Trusted by 10K+ Families" },
	];
	return (
		<section className="bg-hero-gradient section-padding">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
					<div className="space-y-8 animate-slide-up">
						<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
							<Heart className="w-4 h-4" />
							<span>Bangladesh&apos;s #1 Care Platform</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-(--foreground) leading-tight">
							Caring for Your <br />
							<span className="text-primary">
								Loved Ones
							</span>{" "}
							Like Our Own
						</h1>

						<p className="text-lg text-(--muted-foreground) max-w-xl leading-relaxed">
							Find trusted, verified caregivers for your children,
							elderly parents, or family members who need special
							care. Easy booking, transparent pricing, peace of
							mind.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/service/baby-care"
								className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 bg-primary text-(--primary-foreground) shadow-lg hover:shadow-xl hover:scale-[1.02] text-base h-11 px-5 py-2"
							>
								Book a Caregiver
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link
								href="/#services"
								className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 border-2 border-primary/20 bg-(--card) text-foreground hover:border-primary hover:bg-primary/5 text-base h-11 px-5 py-2 w-full sm:w-auto"
							>
								Explore Services
							</Link>
						</div>

						<div className="flex flex-wrap items-center gap-6 pt-4">
							{features.map(({ icon: Icon, text }) => (
								<div
									key={text}
									className="flex items-center gap-2 text-muted-foreground"
								>
									<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
										<Icon className="w-4 h-4 text-primary" />
									</div>
									<span className="text-sm font-medium">
										{text}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Right Content - Image */}
					<div className="relative animate-fade-in lg:pl-8">
						<div className="relative">
							<div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-(--secondary)/20 rounded-3xl blur-2xl" />
							<Image
								width={800}
								height={400}
								src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=700&fit=crop"
								alt="Caring for loved ones"
								className="relative rounded-3xl shadow-2xl w-full object-cover aspect-4/5"
							/>

							{/* Floating Card */}
							<div className="absolute -bottom-6 -left-6 bg-[#F8F6F6] rounded-2xl p-4 animate-float">
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
										<Shield className="w-6 h-6 text-primary" />
									</div>
									<div>
										<p className="font-semibold text-(--foreground)">
											100% Verified
										</p>
										<p className="text-sm text-(--muted-foreground)">
											Background checked
										</p>
									</div>
								</div>
							</div>

							{/* Stats Card */}
							<div className="absolute -top-4 -right-4 bg-[#F8F6F6] rounded-2xl p-4">
								<div className="text-center">
									<p className="text-3xl font-bold text-primary">
										10K+
									</p>
									<p className="text-sm text-(--muted-foreground)">
										Happy Families
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
