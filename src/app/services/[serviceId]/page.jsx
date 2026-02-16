import { getSingleService } from "@/action/server/services";
import BackButtons from "@/components/buttons/BackButtons";
import {
	ArrowRight,
	CheckCircle2,
	Clock,
	HeartPulse,
	Icon,
	Shield,
	Star,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Service Details",
};

const ServiceDetailsPage = async ({ params }) => {
	const { serviceId } = await params;
	const service = await getSingleService(serviceId);

	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-[50vh] min-h-100 overflow-hidden">
				<Image
					width={2000}
					height={500}
					src={service.image}
					alt={service.title}
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-(--foreground)/80 via-(--foreground)/40 to-transparent" />

				<div className="absolute inset-0 flex items-end">
					<div className="container px-4 pb-12">
						<BackButtons />

						<div className="flex items-center gap-4 mb-4">
							<div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
								{/* <Icon  /> */}
								<HeartPulse className="w-8 h-8 text-(--primary-foreground)" />
							</div>
							<div>
								<h1 className="text-3xl md:text-4xl font-bold text-(--background)">
									{service.title}
								</h1>
								<p className="text-(--background)/80">
									{service.titleBn}
								</p>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-4 text-(--background)/90">
							<div className="flex items-center gap-2">
								<Clock className="w-4 h-4" />
								<span>Starting at ৳{service.price}/hour</span>
							</div>
							<div className="flex items-center gap-2">
								<Star className="w-4 h-4 fill-(--secondary) text-(--secondary)" />
								<span>4.9 (500+ reviews)</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="w-4 h-4" />
								<span>150+ caregivers available</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="section-padding bg-[#FCFAF7]">
				<div className="container">
					<div className="grid lg:grid-cols-3 gap-12">
						{/* Main Content */}
						<div className="lg:col-span-2 space-y-10">
							{/* Description */}
							<div>
								<h2 className="text-2xl font-bold text-(--foreground) mb-4">
									About This Service
								</h2>
								<div className="text-[#676F7E] max-w-none">
									{service.longDescription
										.split("\n\n")
										.map((paragraph, index) => (
											<p
												key={index}
												className="text-(--muted-foreground) mb-4 leading-relaxed"
											>
												{paragraph}
											</p>
										))}
								</div>
							</div>
							{/* Features */}
							<div>
								<h2 className="text-2xl font-bold text-(--foreground) mb-6">
									What&apos;s Included
								</h2>
								<div className="grid sm:grid-cols-2 gap-4">
									{service.features.map((feature) => (
										<div
											key={feature}
											className="flex items-start gap-3 p-4 bg-(--card) rounded-xl card-shadow"
										>
											<CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
											<span className="text-(--foreground)">
												{feature}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Why Choose Us */}
							<div>
								<h2 className="text-2xl font-bold text-(--foreground) mb-6">
									Why Choose Care.xyz
								</h2>
								<div className="grid sm:grid-cols-2 gap-4">
									{service.includes.map((item) => (
										<div
											key={item}
											className="flex items-center gap-3"
										>
											<Shield className="w-5 h-5 text-primary shrink-0" />
											<span className="text-(--muted-foreground)">
												{item}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* FAQs */}
							<div>
								<h2 className="text-2xl font-bold text-foreground mb-6">
									Frequently Asked Questions
								</h2>
								<div className="space-y-3">
									{service.faqs.map((faqItem, index) => (
										<div
											key={index}
											className="collapse collapse-plus bg-base-100 border border-base-300"
										>
											<input
												type="radio"
												name="my-accordion-3"
												defaultChecked
											/>
											<div className="collapse-title font-semibold">
												How do I create an account?
											</div>
											<div className="collapse-content text-sm">
												Click the &quot;Sign Up&quot;
												button in the top right corner
												and follow the registration
												process.
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Sidebar - Booking Card */}
						<div className="lg:col-span-1">
							<div className="sticky top-24 bg-(--card) rounded-2xl p-6 card-shadow space-y-6">
								<div className="text-center pb-6 border-b border-(--border)">
									<p className="text-(--muted-foreground) text-sm mb-1">
										Starting at
									</p>
									<p className="text-4xl font-bold text-primary">
										৳{service.price}
										<span className="text-lg text-(--muted-foreground) font-normal">
											/{service.priceUnit}
										</span>
									</p>
								</div>
								<ul className="space-y-3">
									{[
										"Verified caregivers",
										"Flexible scheduling",
										"Secure payment",
										"24/7 support",
									].map((item) => (
										<li
											key={item}
											className="flex items-center gap-2 text-sm text-(--muted-foreground)"
										>
											<CheckCircle2 className="w-4 h-4 text-primary" />
											{item}
										</li>
									))}
								</ul>
								<Link
									href={`/booking/${service._id}`}
									className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 bg-primary text-(--primary-foreground) hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] h-12 rounded-lg px-8 text-base w-full"
								>
									Book This Service
									<ArrowRight className="w-4 h-4 ml-2" />
								</Link>

								<p className="text-xs text-muted-foreground text-center">
									You won&apos;t be charged until you confirm
									the booking
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ServiceDetailsPage;
