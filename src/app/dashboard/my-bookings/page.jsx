"use server";
import { bookingByUser } from "@/action/server/booking";
import ActionButtons from "@/components/buttons/ActionButtons";
import { authOptions } from "@/lib/authOptions";
import {
	ArrowRight,
	Calendar,
	Clock,
	HeartPulse,
	MapPin,
	Package,
} from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const MyBookingPage = async () => {
	const session = await getServerSession(authOptions);
	const userEmail = session?.user?.email;
	const myBookings = await bookingByUser(userEmail);

	// Handle Delete

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
					{myBookings.length === 0 ? (
						<div className="text-center py-16 bg-(--card) rounded-2xl card-shadow">
							<Package className="w-16 h-16 text-(--muted-foreground) mx-auto mb-4" />
							<h2 className="text-xl font-semibold text-(--foreground) mb-2">
								No Bookings Yet
							</h2>
							<p className="text-(--muted-foreground) mb-6">
								You haven&apos;t made any bookings. Start by
								exploring our services!
							</p>
							<Link className="btn btn-primary" href="/services">
								Browse Services
								<ArrowRight className="w-4 h-4 ml-2" />
							</Link>
						</div>
					) : (
						myBookings.map((booking) => (
							<div
								key={booking._id}
								className="bg-(--card) rounded-2xl p-6 card-shadow hover:card-hover-shadow transition-all"
							>
								<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
									{/* Service Info */}
									<div className="flex items-center gap-4">
										<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
											<HeartPulse className="w-7 h-7 text-primary" />
										</div>
										<div className="space-y-1">
											<div className="flex items-center gap-2">
												<h3 className="font-semibold text-gray-900">
													{booking.serviceTitle}
												</h3>
												<span
													className={`text-xs font-medium px-2 py-0.5 rounded-full
		${booking.status === "pending" ? "bg-yellow-100 text-yellow-700" : ""}
		${booking.status === "approved" ? "bg-green-100 text-green-700" : ""}
		${booking.status === "rejected" ? "bg-red-100 text-red-700" : ""}
	`}
												>
													{booking.status}
												</span>
											</div>

											<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
												<span className="flex items-center gap-1">
													<Clock className="w-4 h-4" />
													{booking.durationValue}
													{booking.durationType}
												</span>

												<span className="flex items-center gap-1">
													<MapPin className="w-4 h-4" />
													{booking.area},
													{booking.district}
												</span>

												<span className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{`${new Date(
														booking.requestedAt,
													).toLocaleDateString(
														"en-US",
														{
															month: "long",
															day: "numeric",
															year: "numeric",
															timeZone:
																"Asia/Dhaka",
														},
													)} at ${new Date(
														booking.requestedAt,
													).toLocaleTimeString(
														"en-US",
														{
															hour: "numeric",
															minute: "2-digit",
															hour12: true,
															timeZone:
																"Asia/Dhaka",
														},
													)}`}
												</span>
											</div>
										</div>
									</div>
									{/* Right Content */}
									<div className="flex flex-col items-center md:items-end gap-4 justify-between md:justify-end">
										<span className="text-lg font-semibold text-emerald-600">
											৳{booking.totalCost}
										</span>

										<ActionButtons
											booking={{
												...booking,
												_id: booking._id.toString(),
											}}
										/>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default MyBookingPage;
