import { getServices } from "@/action/server/services";
import { Baby, HeartPulse, Stethoscope, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection = async () => {
	const services = (await getServices()) || [];
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
						return (
							<div
								key={service._id}
								className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-2 flex flex-col"
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
								</div>

								{/* Content */}
								<div className="p-6 space-y-4 flex flex-col grow">
									<div className="grow">
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

										<p className="text-sm text-(--muted-foreground) line-clamp-2 b-2 mb-2">
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
									</div>

									<Link href={`/services/${service._id}`}>
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
