import {
	Heart,
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	const fullYear = new Date().getFullYear();
	return (
		<footer className="bg-(--foreground) text-(--background) py-10 md:py-16 lg:py-24">
			<div className="container">
				{/* Footer Top */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
					{/* Brand */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center gap-2">
							<div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
								<Heart className="w-5 h-5 text-(--primary-foreground)" />
							</div>
							<span className="text-xl font-bold">
								Care<span className="text-primary">.xyz</span>
							</span>
						</Link>
						<p className="text-background/70 text-sm leading-relaxed">
							Making caregiving easy, secure, and accessible for
							everyone. Trusted by thousands of families.
						</p>
						<div className="flex items-center gap-4">
							{[Facebook, Twitter, Instagram, Linkedin].map(
								(Icon, i) => (
									<Link
										key={i}
										href="#"
										className="w-10 h-10 rounded-full bg-(--background)/10 flex items-center justify-center hover:bg-primary hover:text-(--primary-foreground) transition-colors"
									>
										<Icon className="w-4 h-4" />
									</Link>
								),
							)}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold text-lg mb-4">
							Quick Links
						</h4>
						<ul className="space-y-3">
							{[
								"Home",
								"About Us",
								"Services",
								"My Bookings",
								"Contact",
							].map((link) => (
								<li key={link}>
									<Link
										href="#"
										className="text-(--background)/70 text-sm hover:text-primary transition-colors"
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-semibold text-lg mb-4">
							Our Services
						</h4>
						<ul className="space-y-3">
							{[
								"Baby Care",
								"Elderly Care",
								"Special Care",
								"Home Nursing",
								"Night Care",
							].map((service) => (
								<li key={service}>
									<Link
										href="#"
										className="text-(--background)/70 text-sm hover:text-primary transition-colors"
									>
										{service}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-semibold text-lg mb-4">
							Contact Us
						</h4>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<span className="text-(--background)/70 text-sm">
									123 Care Street, Dhaka, Bangladesh
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-primary shrink-0" />
								<span className="text-(--background)/70 text-sm">
									+880 1234 567890
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-primary shrink-0" />
								<span className="text-(--background)/70 text-sm">
									support@care.xyz
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-(--background)/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-(--background)/60 text-sm">
						© {fullYear} Care.xyz. All rights reserved.
					</p>
					<div className="flex items-center gap-6">
						<Link
							href="#"
							className="text-(--background)/60 text-sm hover:text-primary transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="text-(--background)/60 text-sm hover:text-primary transition-colors"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
