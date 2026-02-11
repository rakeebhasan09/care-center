import Image from "next/image";
import React from "react";
import { CheckCircle2, Users, Award, HeartHandshake } from "lucide-react";

const AboutSection = () => {
	const highlights = [
		"Thoroughly vetted and trained caregivers",
		"Flexible booking for hours, days, or weeks",
		"Transparent pricing with no hidden fees",
		"24/7 customer support available",
	];
	const stats = [
		{ icon: Users, value: "10,000+", label: "Families Served" },
		{ icon: Award, value: "500+", label: "Verified Caregivers" },
		{ icon: HeartHandshake, value: "98%", label: "Satisfaction Rate" },
	];
	return (
		<section className="section-padding bg-[#FFFFFF]">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Image Side */}
					<div className="relative">
						<div className="grid grid-cols-2 gap-4">
							<Image
								width={400}
								height={200}
								src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=500&fit=crop"
								alt="Elderly care"
								className="rounded-2xl shadow-lg w-full h-64 object-cover"
							/>
							<Image
								width={400}
								height={200}
								src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=500&fit=crop"
								alt="Baby care"
								className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
							/>
						</div>

						{/* Stats Overlay */}
						<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] glass-card rounded-2xl p-6">
							<div className="grid grid-cols-3 gap-4">
								{stats.map(({ icon: Icon, value, label }) => (
									<div key={label} className="text-center">
										<Icon className="w-6 h-6 text-primary mx-auto mb-2" />
										<p className="text-xl font-bold text-(--foreground)">
											{value}
										</p>
										<p className="text-xs text-(--muted-foreground)">
											{label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Content Side */}
					<div className="space-y-6 lg:pl-8 mt-12 lg:mt-0">
						<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
							About Care.xyz
						</div>

						<h2 className="text-3xl md:text-4xl font-bold text-(--foreground)">
							We Make Caregiving
							<span className="text-primary">
								Simple & Trusted
							</span>
						</h2>

						<p className="text-(--muted-foreground) leading-relaxed">
							Care.xyz is Bangladesh&apos;s premier caregiving
							platform, connecting families with verified,
							compassionate caregivers. Whether you need a
							babysitter, elderly care, or special assistance, we
							ensure your loved ones receive the care they
							deserve.
						</p>

						<p className="text-(--muted-foreground) leading-relaxed">
							আমাদের লক্ষ্য হচ্ছে caregiving কে সহজ, নিরাপদ এবং
							সবার জন্য অ্যাক্সেসেবল করা। আমরা প্রতিটি caregiver
							কে সতর্কতার সাথে যাচাই করি যাতে আপনি নিশ্চিন্তে
							থাকতে পারেন।
						</p>

						<ul className="space-y-3">
							{highlights.map((item) => (
								<li
									key={item}
									className="flex items-center gap-3"
								>
									<CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
									<span className="text-foreground">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
