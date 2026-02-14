"use client";

import {
	ArrowLeft,
	Clock,
	MapPin,
	CreditCard,
	HeartPulse,
	Plus,
	Minus,
	CircleCheck,
	AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import upazilas from "../../../data/areaByDistrict.json";
import { use, useEffect, useState } from "react";

const STEPS = {
	DURATION: 1,
	LOCATION: 2,
	CONFIRM: 3,
};

const divisions = [
	"Dhaka",
	"Chittagong",
	"Rajshahi",
	"Khulna",
	"Barishal",
	"Sylhet",
	"Rangpur",
	"Mymensingh",
];

const districtsByDivision = {
	Dhaka: [
		"Dhaka",
		"Gazipur",
		"Narayanganj",
		"Tangail",
		"Manikganj",
		"Munshiganj",
		"Narsingdi",
		"Faridpur",
	],
	Chittagong: [
		"Chittagong",
		"Cox's Bazar",
		"Comilla",
		"Rangamati",
		"Bandarban",
		"Khagrachhari",
		"Feni",
	],
	Rajshahi: [
		"Rajshahi",
		"Bogra",
		"Pabna",
		"Sirajganj",
		"Natore",
		"Nawabganj",
		"Joypurhat",
		"Naogaon",
	],
	Khulna: [
		"Khulna",
		"Jessore",
		"Satkhira",
		"Bagerhat",
		"Narail",
		"Magura",
		"Kushtia",
		"Meherpur",
	],
	Barishal: [
		"Barishal",
		"Patuakhali",
		"Bhola",
		"Pirojpur",
		"Jhalokathi",
		"Barguna",
	],
	Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
	Rangpur: [
		"Rangpur",
		"Dinajpur",
		"Gaibandha",
		"Kurigram",
		"Lalmonirhat",
		"Nilphamari",
		"Panchagarh",
		"Thakurgaon",
	],
	Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
};

const BookingPage = ({ params }) => {
	const { serviceId } = use(params);
	const router = useRouter();
	const [activeStep, setActiveStep] = useState(STEPS.DURATION);
	const [durationType, setDurationType] = useState("hours");
	const [durationValue, setDurationValue] = useState(1);
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const [division, setDivision] = useState("");
	const [district, setDistrict] = useState("");
	const [area, setArea] = useState("");

	const areas = upazilas[district];

	const isLocationFormValid =
		phone.trim().length > 0 && address.trim().length > 0;

	// Price Calculation
	const multiplier = durationType === "days" ? 8 : 1;
	const totalCost = 500 * durationValue * multiplier;

	useEffect(() => {
		document.title =
			"Book your service Baby Sitting & Elderly Care Service Platform";
	}, []);

	const handleBookingForm = (e) => {
		e.preventDefault();
		console.log({
			durationType,
			durationValue,
			division,
			district,
			area,
			phone,
			address,
			totalCost,
		});
		router.push("/dashboard/my-bookings");
	};

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

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Form */}
					<div className="lg:col-span-2 space-y-8">
						{/* Step Indicators */}
						{/* ================= Step Tabs ================= */}
						<div className="flex flex-wrap gap-3 mb-8">
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
						<form
							onSubmit={handleBookingForm}
							className="bg-(--card) rounded-2xl p-6 md:p-8 card-shadow animate-fade-in"
						>
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
												defaultValue="hours"
												className="select w-full border border-(--border) outline-none"
												onChange={(e) =>
													setDurationType(
														e.target.value,
													)
												}
											>
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
								<div className="card space-y-4">
									<h2 className="text-xl font-semibold flex items-center gap-2">
										<MapPin className="w-5 h-5 text-primary" />
										Select Location
									</h2>

									{/* Division and Distric */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										{/* Division */}
										<div>
											<label className="block mb-2">
												Division
											</label>
											<select
												defaultValue="Select Division"
												className="select w-full border border-(--border) outline-none"
												onChange={(e) => {
													setDivision(e.target.value);
													setDistrict("");
												}}
											>
												<option disabled={true}>
													Select Division
												</option>
												{divisions.map((division) => (
													<option
														key={division}
														value={division}
													>
														{division}
													</option>
												))}
											</select>
										</div>
										{/* District */}
										<div>
											<label className="block mb-2">
												District
											</label>
											<select
												defaultValue="Select District"
												className="select w-full border border-(--border) outline-none"
												disabled={!division}
												onChange={(e) => {
													setDistrict(e.target.value);
													setArea("");
												}}
											>
												<option disabled={true}>
													Select District
												</option>
												{division &&
													districtsByDivision[
														division
													]?.map((dist) => (
														<option
															key={dist}
															value={dist}
														>
															{dist}
														</option>
													))}
											</select>
										</div>
									</div>

									{/* Area and Mobile */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										{/* Area */}
										<div>
											<label className="block mb-2">
												Area / City
											</label>
											<select
												defaultValue="Select Area / City"
												className="select w-full border border-(--border) outline-none"
												disabled={!district}
												onChange={(e) => {
													setArea(e.target.value);
												}}
											>
												<option disabled={true}>
													Select Area / City
												</option>
												{division &&
													areas?.map((city) => (
														<option
															key={city}
															value={city}
														>
															{city}
														</option>
													))}
											</select>
										</div>
										{/* Mobile */}
										<div className="space-y-2">
											<label className="block">
												Contact Number
											</label>
											<input
												type="text"
												placeholder="Type your phone number"
												className="w-full border border-(--border) rounded outline-none py-1.5 px-2"
												required
												value={phone}
												onChange={(e) =>
													setPhone(e.target.value)
												}
											/>
										</div>
									</div>

									{/* Full Address */}
									<div className="space-y-2">
										<label className="block">
											Full Address
										</label>
										<textarea
											className="w-full border border-(--border) rounded outline-none py-1.5 px-2"
											name=""
											placeholder="Type full address."
											rows={3}
											required
											value={address}
											onChange={(e) =>
												setAddress(e.target.value)
											}
										></textarea>
									</div>

									{/* Special Instructions */}
									<div className="space-y-2">
										<label className="block">
											Special Instructions (Optional)
										</label>
										<textarea
											className="w-full border border-(--border) rounded outline-none py-1.5 px-2"
											name=""
											placeholder="Type Special Instructions."
											rows={3}
										></textarea>
									</div>

									<div className="flex flex-wrap gap-5 mt-6">
										<button
											onClick={() =>
												setActiveStep(STEPS.DURATION)
											}
											className="btn btn-outline btn-primary border border-primary flex-1 items-center gap-2"
										>
											← Back
										</button>

										<button
											onClick={() =>
												setActiveStep(STEPS.CONFIRM)
											}
											disabled={!isLocationFormValid}
											className={`btn btn-primary border border-primary flex-1 items-center gap-2
		${!isLocationFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
										>
											Continue →
										</button>
									</div>
								</div>
							)}

							{/* ================= Step 3: Confirm ================= */}
							{activeStep === STEPS.CONFIRM && (
								<div className="card">
									<h2 className="text-xl font-bold text-(--foreground) mb-6 flex items-center gap-2">
										<CircleCheck className="w-5 h-5 text-primary" />
										Confirm Booking
									</h2>

									<div className="space-y-6">
										{/* Service Summary */}
										<div className="flex items-center gap-4 p-4 bg-(--muted) rounded-xl">
											<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
												<HeartPulse className="w-6 h-6 text-primary" />
											</div>
											<div>
												<p className="font-semibold text-(--foreground)">
													Elderly Care
												</p>
												<p className="text-sm text-(--muted-foreground)">
													বয়স্ক সেবা
												</p>
											</div>
										</div>
										{/* Booking Details */}
										<div className="space-y-4">
											<div className="flex justify-between py-2 border-b border-(--border)">
												<span className="text-(--muted-foreground)">
													Duration
												</span>
												<span className="font-medium text-(--foreground)">
													{durationValue}{" "}
													{durationType}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-(--border)">
												<span className="text-(--muted-foreground)">
													Location
												</span>
												<span className="font-medium text-(--foreground) text-right">
													{area}, {district},
													{division}
												</span>
											</div>
											<div className="flex justify-between py-2 border-b border-(--border)">
												<span className="text-(--muted-foreground)">
													Address
												</span>
												<span className="font-medium text-(--foreground) text-right max-w-50">
													{address}
												</span>
											</div>
											<div className="flex justify-between py-2">
												<span className="text-lg font-semibold text-(--foreground)">
													Total Cost
												</span>
												<span className="text-2xl font-bold text-primary">
													৳{totalCost}
												</span>
											</div>
										</div>
										{/* Notice */}
										<div className="flex gap-3 p-4 bg-(--secondary)/20 rounded-xl">
											<AlertCircle className="w-5 h-5 text-(--secondary) shrink-0 mt-0.5" />
											<p className="text-sm text-(--muted-foreground)">
												Your booking will be confirmed
												within 24 hours. You&apos;ll
												receive a confirmation email
												with caregiver details.
											</p>
										</div>
									</div>
								</div>
							)}

							{activeStep === STEPS.CONFIRM && (
								<div className="flex flex-wrap gap-5 mt-6">
									<button
										onClick={() =>
											setActiveStep(STEPS.LOCATION)
										}
										className="btn btn-outline btn-primary border border-primary flex-1 items-center gap-2"
									>
										← Back
									</button>

									<button
										onClick={() =>
											setActiveStep(STEPS.CONFIRM)
										}
										className="btn btn-primary border border-primary flex-1 items-center gap-2"
									>
										Confirm Booking →
									</button>
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
