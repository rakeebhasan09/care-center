import { Baby, HeartPulse, Stethoscope, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
	const services = [
		{
			id: 1,
			icon: Baby,
			title: "Baby Care",
			titleBn: "শিশু যত্ন",
			description:
				"Professional babysitting and childcare services for infants and toddlers. Our caregivers are trained in child development and safety.",
			price: "৳500/hour",
			features: [
				"Age 0-5 years",
				"Feeding & diaper change",
				"Play activities",
				"Sleep monitoring",
			],
			image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
			color: "bg-pink-50",
		},
		{
			id: 2,
			icon: HeartPulse,
			title: "Elderly Care",
			titleBn: "বয়স্ক সেবা",
			description:
				"Compassionate care for senior family members. Assistance with daily activities, medication reminders, and companionship.",
			price: "৳600/hour",
			features: [
				"Daily assistance",
				"Medication reminder",
				"Mobility support",
				"Companionship",
			],
			image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=300&fit=crop",
			color: "bg-blue-50",
		},
		{
			id: 3,
			icon: Stethoscope,
			title: "Special Care",
			titleBn: "বিশেষ সেবা",
			description:
				"Specialized care for family members with medical needs or disabilities. Trained professionals with medical backgrounds.",
			price: "৳800/hour",
			features: [
				"Medical assistance",
				"Physical therapy",
				"24/7 monitoring",
				"Emergency response",
			],
			image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=300&fit=crop",
			color: "bg-green-50",
		},
	];
	return (
		<section className="section-padding bg-[#FCFAF7]">
			<div className="container">
				{/* Section Header */}
				<div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
						Our Services
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-(--foreground) mb-4">
						Care Services for{" "}
						<span className="text-primary">Every Need</span>
					</h2>
					<p className="text-(--muted-foreground)">
						Choose from our range of professional caregiving
						services tailored to meet your family&apos;s unique
						needs.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => {
						const Icon = service.icon;
						return (
							<div
								key={service.id}
								className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-2"
							>
								{/* Image */}
								<div className="relative h-48 overflow-hidden">
									<Image
										width={300}
										height={150}
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div
										className={`absolute top-4 left-4 p-3 rounded-xl ${service.color}`}
									>
										<Icon className="w-6 h-6 text-primary" />
									</div>
								</div>

								{/* Content */}
								<div className="p-6 space-y-4">
									<div className="flex items-center justify-between">
										<div>
											<h3 className="text-xl font-bold text-(--foreground)">
												{service.title}
											</h3>
											<p className="text-sm text-(--muted-foreground)">
												{service.titleBn}
											</p>
										</div>
										<span className="text-lg font-bold text-primary">
											{service.price}
										</span>
									</div>

									<p className="text-sm text-(--muted-foreground) line-clamp-2">
										{service.description}
									</p>

									<ul className="grid grid-cols-2 gap-2">
										{service.features.map((feature) => (
											<li
												key={feature}
												className="text-xs text-(--muted-foreground) flex items-center gap-1"
											>
												<span className="w-1.5 h-1.5 rounded-full bg-primary" />
												{feature}
											</li>
										))}
									</ul>

									<Link href={`/services/${service.id}`}>
										<button className="w-full group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 bg-primary text-(--primary-foreground) hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] h-11 px-5 py-2">
											View Details
											<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
