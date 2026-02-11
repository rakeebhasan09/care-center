import { Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
	const testimonials = [
		{
			name: "Fatima Rahman",
			role: "Mother of 2",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
			content:
				"Care.xyz has been a lifesaver! The babysitter they connected us with is amazing with our kids. We can finally have date nights again!",
			rating: 5,
		},
		{
			name: "Karim Ahmed",
			role: "Son caring for elderly parents",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
			content:
				"Finding reliable care for my 80-year-old mother was stressful until I found Care.xyz. Their caregivers are professional and compassionate.",
			rating: 5,
		},
		{
			name: "Nusrat Jahan",
			role: "Working Professional",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
			content:
				"The booking process is so simple and the pricing is transparent. I appreciate being able to see exactly what I'm paying for upfront.",
			rating: 5,
		},
	];

	const metrics = [
		{ value: "10K+", label: "Families Helped" },
		{ value: "500+", label: "Caregivers" },
		{ value: "50K+", label: "Bookings" },
		{ value: "98%", label: "Satisfaction" },
	];
	return (
		<section className="section-padding bg-(--card)">
			<div className="container">
				{/* Section Header */}
				<div className="text-center max-w-2xl mx-auto mb-16">
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
						Testimonials
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-(--foreground) mb-4">
						What <span className="text-primary">Families Say</span>
					</h2>
					<p className="text-(--muted-foreground)">
						Hear from families who have experienced the Care.xyz
						difference.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-(--background) rounded-2xl p-6 card-shadow relative h-full flex flex-col"
						>
							<div className="grow">
								<Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

								{/* Rating */}
								<div className="flex gap-1 mb-4">
									{Array.from({
										length: testimonial.rating,
									}).map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 fill-(--secondary) text-(--secondary)"
										/>
									))}
								</div>

								{/* Content */}
								<p className="text-(--foreground) mb-6 leading-relaxed">
									&quot;{testimonial.content}&quot;
								</p>
							</div>

							{/* Author */}
							<div className="flex items-center gap-3">
								<Image
									width={400}
									height={200}
									src={testimonial.image}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-(--foreground)">
										{testimonial.name}
									</p>
									<p className="text-sm text-(--muted-foreground)">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Metrics */}
				<div className="bg-primary rounded-2xl p-8 md:p-12">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{metrics.map((metric) => (
							<div key={metric.label} className="text-center">
								<p className="text-4xl md:text-5xl font-bold text-(--primary-foreground) mb-2">
									{metric.value}
								</p>
								<p className="text-(--primary-foreground)/80 text-sm">
									{metric.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
