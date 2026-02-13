import { Calendar, Clock, HeartPulse, MapPin } from "lucide-react";
import React from "react";

const MyBookingPage = () => {
	return (
		<section className="section-padding bg-[#FCFAF7] h-full">
			<div className="container">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-(--foreground) mb-2">
						My Bookings
					</h1>
					<p className="text-(--muted-foreground)">
						Track and manage all your care service bookings
					</p>
				</div>

				<div className="space-y-5">
					<div className="bg-(--card) rounded-2xl p-6 card-shadow hover:card-hover-shadow transition-all">
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
							{/* Service Info */}
							<div className="flex items-center gap-4">
								<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
									<HeartPulse className="w-7 h-7 text-primary" />
								</div>
								<div className="space-y-1">
									<div className="flex items-center gap-2">
										<h3 className="font-semibold text-gray-900">
											Elderly Care
										</h3>
										<span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
											Pending
										</span>
									</div>

									<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
										<span className="flex items-center gap-1">
											<Clock className="w-4 h-4" />1 hours
										</span>

										<span className="flex items-center gap-1">
											<MapPin className="w-4 h-4" />
											Teknaf, Cox&apos;s Bazar
										</span>

										<span className="flex items-center gap-1">
											<Calendar className="w-4 h-4" />
											February 11, 2026 at 10:02 PM
										</span>
									</div>
								</div>
							</div>
							{/* Right Content */}
							<div className="flex flex-col items-center md:items-end gap-4 justify-between md:justify-end">
								<span className="text-lg font-semibold text-emerald-600">
									৳600
								</span>

								<div className="flex items-center gap-3">
									<button className="px-4 py-2 text-sm font-medium border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
										View Details
									</button>

									<button className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-(--card) rounded-2xl p-6 card-shadow hover:card-hover-shadow transition-all">
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
							{/* Service Info */}
							<div className="flex items-center gap-4">
								<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
									<HeartPulse className="w-7 h-7 text-primary" />
								</div>
								<div className="space-y-1">
									<div className="flex items-center gap-2">
										<h3 className="font-semibold text-gray-900">
											Elderly Care
										</h3>
										<span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
											Pending
										</span>
									</div>

									<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
										<span className="flex items-center gap-1">
											<Clock className="w-4 h-4" />1 hours
										</span>

										<span className="flex items-center gap-1">
											<MapPin className="w-4 h-4" />
											Teknaf, Cox&apos;s Bazar
										</span>

										<span className="flex items-center gap-1">
											<Calendar className="w-4 h-4" />
											February 11, 2026 at 10:02 PM
										</span>
									</div>
								</div>
							</div>
							{/* Right Content */}
							<div className="flex flex-col items-end gap-4 justify-between md:justify-end">
								<span className="text-lg font-semibold text-emerald-600">
									৳600
								</span>

								<div className="flex items-center gap-3">
									<button className="px-4 py-2 text-sm font-medium border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
										View Details
									</button>

									<button className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyBookingPage;
