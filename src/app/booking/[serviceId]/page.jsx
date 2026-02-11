"use client";

import {
	ArrowLeft,
	Clock,
	MapPin,
	CreditCard,
	Icon,
	HeartPulse,
	Plus,
	Minus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

const STEPS = {
	DURATION: 1,
	LOCATION: 2,
	CONFIRM: 3,
};

const BookingPage = ({ params }) => {
	const { serviceId } = use(params);
	const router = useRouter();
	const [activeStep, setActiveStep] = useState(STEPS.DURATION);
	const [durationType, setDurationType] = useState("hours");
	const [durationValue, setDurationValue] = useState(1);

	// Price Calculation
	const multiplier = durationType === "days" ? 8 : 1;
	const totalCost = 500 * durationValue * multiplier;

	return (
		<section className="section-padding bg-[#FCFAF7]">
			<div className="container">
				{/* Header */}
				<div className="mb-8">
					<button
						onClick={() => router.back()}
						className="flex items-center gap-2 text-(--muted-foreground) hover:text-(--foreground) mb-4 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Back
					</button>
					<h1 className="text-3xl font-bold text-(--foreground) mb-2">
						Book Elderly Care
					</h1>
					<p className="text-(--muted-foreground)">
						Complete the form below to book your caregiver
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Form */}
					<div className="lg:col-span-2 space-y-8">
						{/* Step Indicators */}
						{/* ================= Step Tabs ================= */}
						<div className="flex gap-3 mb-8">
							{[
								{
									label: "Duration",
									icon: Clock,
									step: STEPS.DURATION,
								},
								{
									label: "Location",
									icon: MapPin,
									step: STEPS.LOCATION,
								},
								{
									label: "Confirm",
									icon: CreditCard,
									step: STEPS.CONFIRM,
								},
							].map(({ label, icon: Icon, step }) => {
								const isActive = activeStep >= step;

								return (
									<div
										key={label}
										className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all
			${isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}
									>
										<Icon size={18} />

										<span>{label}</span>
									</div>
								);
							})}
						</div>
						<form className="bg-(--card) rounded-2xl p-6 md:p-8 card-shadow animate-fade-in">
							{/* ================= Step 1: Duration ================= */}
							{activeStep === STEPS.DURATION && (
								<div className="card">
									<h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
										<Clock
											size={20}
											className="text-primary"
										/>{" "}
										Select Duration
									</h2>
									<div className="space-y-6">
										{/* Duration Type */}
										<div className="space-y-2">
											<label className="block">
												Duration Type
											</label>
											<select
												defaultValue="Pick Duration"
												className="select w-full border border-(--border) outline-none"
												onChange={(e) =>
													setDurationType(
														e.target.value,
													)
												}
											>
												<option disabled={true}>
													Pick Duration
												</option>
												<option value={"hours"}>
													Hours
												</option>
												<option value={"days"}>
													Days (8 hours/day)
												</option>
											</select>
										</div>
										{/* Number Of Duration */}
										<div>
											<label className="block mb-2">
												Number of {durationType}
											</label>
											<div className="flex items-center gap-4">
												<button
													disabled={
														durationValue === 1
													}
													type="button"
													className="btn btn-primary btn-outline border"
													onClick={() =>
														setDurationValue(
															durationValue - 1,
														)
													}
												>
													<Minus />
												</button>
												<span className="btn btn-outline border border-(--border) hover:bg-transparent cursor-auto">
													{durationValue}
												</span>
												<button
													type="button"
													disabled={
														durationValue === 15
													}
													className="btn btn-primary btn-outline border"
													onClick={() =>
														setDurationValue(
															durationValue + 1,
														)
													}
												>
													<Plus />
												</button>
											</div>
										</div>

										<div className="bg-(--muted) rounded-xl p-4">
											<div className="flex justify-between items-center">
												<span className="text-(--muted-foreground)">
													৳500 × {durationValue}{" "}
													{durationType}
													{durationType === "days" &&
														" × 8 hours"}
												</span>
											</div>
										</div>
									</div>

									<button
										onClick={() =>
											setActiveStep(STEPS.LOCATION)
										}
										className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 bg-primary text-(--primary-foreground) hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] h-11 px-5 py-2 w-full"
									>
										Continue to Location →
									</button>
								</div>
							)}
							{/* ================= Step 2: Location ================= */}
							{activeStep === STEPS.LOCATION && (
								<div className="card">
									<h2 className="text-xl font-semibold">
										Select Location
									</h2>

									<div className="flex justify-between mt-6">
										<button
											onClick={() =>
												setActiveStep(STEPS.DURATION)
											}
											className="btn-outline"
										>
											← Back
										</button>

										<button
											onClick={() =>
												setActiveStep(STEPS.CONFIRM)
											}
											className="btn-primary"
										>
											Continue →
										</button>
									</div>
								</div>
							)}

							{/* ================= Step 3: Confirm ================= */}
							{activeStep === STEPS.CONFIRM && (
								<div className="card">
									<h2 className="text-xl font-semibold">
										Confirm Booking
									</h2>

									<p className="text-gray-500 mt-2">
										Service ID: {serviceId}
									</p>
								</div>
							)}
						</form>
					</div>

					{/* Sidebar - Order Summary */}
					<div className="lg:col-span-1">
						<div className="sticky top-24 bg-(--card) rounded-2xl p-6 card-shadow">
							<h3 className="font-semibold text-(--foreground) mb-4">
								Order Summary
							</h3>
							<div className="flex items-center gap-3 pb-4 border-b border-(--border)">
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
									<HeartPulse className="w-8 h-8 text-primary" />
								</div>
								<div>
									<p className="font-medium text-(--foreground)">
										Elderly Care
									</p>
									<p className="text-sm text-(--muted-foreground)">
										৳500/hour
									</p>
								</div>
							</div>

							<div className="py-4 space-y-2 border-b border-(--border)">
								<div className="flex justify-between text-sm">
									<span className="text-(--muted-foreground)">
										Duration
									</span>
									<span className="text-foreground">
										{durationType === "days"
											? `${durationValue} days`
											: `${durationValue} hours`}
									</span>
								</div>
								{durationType === "days" && (
									<div className="flex justify-between text-sm">
										<span className="text-(--muted-foreground)">
											Hours per day
										</span>
										<span className="text-(--foreground)">
											8 hours
										</span>
									</div>
								)}
							</div>
							<div className="pt-4">
								<div className="flex justify-between">
									<span className="font-semibold text-(--foreground)">
										Total
									</span>
									<span className="text-xl font-bold text-primary">
										৳{totalCost}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingPage;
