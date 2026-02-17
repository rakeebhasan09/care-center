import React from "react";
import { postUser } from "@/action/server/auth";
import SocialLoginButtons from "@/components/SocialLoginButtons/SocialLoginButtons";
import {
	ArrowRight,
	CreditCard,
	Eye,
	EyeOff,
	Heart,
	Lock,
	Mail,
	User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const router = useRouter();

	const handleRegisterForm = async (data) => {
		const result = await postUser(data);
		if (result.acknowledged) {
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Registration Successfull.",
				showConfirmButton: false,
				timer: 1500,
			});
			reset();
			router.push("/");
		}
	};
	return (
		<div className="min-h-screen flex">
			{/* Left Side - Image */}
			<div className="hidden lg:flex flex-1 bg-hero-gradient items-center justify-center p-12 relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-(--secondary)/20 rounded-full blur-3xl" />
				</div>
				<div className="relative text-center max-w-md">
					<Image
						width={160}
						height={160}
						src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=400&fit=crop"
						alt="Caregiver with child"
						className="w-64 h-64 rounded-full object-cover mx-auto mb-8 border-4 border-card shadow-xl"
					/>
					<h2 className="text-2xl font-heading font-bold mb-4">
						Join Our Care Community
					</h2>
					<p className="text-(--muted-foreground)">
						Create an account to access trusted care services for
						your loved ones.
					</p>
				</div>
			</div>

			{/* Right Side - Form */}
			<div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-(--background)">
				<div className="w-full max-w-md space-y-6">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-2 group mb-5"
					>
						<div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
							<Heart className="w-5 h-5 text-(--primary-foreground)" />
						</div>
						<span className="text-xl font-heading font-bold text-(--foreground)">
							Care<span className="text-primary">.xyz</span>
						</span>
					</Link>
					<div>
						<h1 className="text-3xl font-heading font-bold mb-1">
							Create Account
						</h1>
						<p className="text-(--muted-foreground)">
							Join us to book trusted care services
						</p>
					</div>

					{/* Register Form */}
					<form
						onSubmit={handleSubmit(handleRegisterForm)}
						className="space-y-3"
					>
						{/* NID Number */}
						<div>
							<label className="mb-2 block">NID Number</label>
							<div className="relative">
								<CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-(--muted-foreground)" />
								<input
									type="text"
									placeholder="Enter Your NID Number"
									className="pl-10 w-full py-2 border border-(--border) outline-none"
									{...register("NIDNumber", {
										required: true,
									})}
								/>
								{errors.NIDNumber?.type === "required" && (
									<p className="text-red-500 text-xs">
										NIDNumber is required
									</p>
								)}
							</div>
						</div>
						{/* Name */}
						<div>
							<label className="mb-2 block">Full Name</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-(--muted-foreground)" />
								<input
									type="text"
									placeholder="Write your full name"
									className="pl-10 w-full py-2 border border-(--border) outline-none"
									{...register("fullname", {
										required: true,
									})}
								/>
								{errors.fullname?.type === "required" && (
									<p className="text-red-500 text-xs">
										Full Name is required
									</p>
								)}
							</div>
						</div>
						{/* Contact */}
						<div>
							<label className="mb-2 block">Contact Number</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-(--muted-foreground)" />
								<input
									type="text"
									placeholder="Write your Contact Number"
									className="pl-10 w-full py-2 border border-(--border) outline-none"
									{...register("mobile", {
										required: true,
									})}
								/>
								{errors.mobile?.type === "required" && (
									<p className="text-red-500 text-xs">
										Contact number is required
									</p>
								)}
							</div>
						</div>

						{/* Email */}
						<div>
							<label className="mb-2 block">Email Address</label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-(--muted-foreground)" />
								<input
									type="email"
									placeholder="you@example.com"
									className="pl-10 w-full py-2 border border-(--border) outline-none"
									{...register("email", {
										required: true,
									})}
								/>
								{errors.email?.type === "required" && (
									<p className="text-red-500 text-xs">
										Email is required
									</p>
								)}
							</div>
						</div>

						{/* Password */}
						<div>
							<label htmlFor="password" className="mb-2 block">
								Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									className="pl-10 pr-10 w-full py-2 border border-(--border) outline-none"
									{...register("password", {
										required: true,
									})}
								/>
								{errors.password?.type === "required" && (
									<p className="text-red-500 text-xs">
										Password is required
									</p>
								)}
								<button
									type="button"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								>
									{showPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
						</div>
						<div>
							<button
								type="submit"
								disabled={isLoading}
								className="w-full group flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 bg-primary text-(--primary-foreground) shadow-lg hover:shadow-xl hover:scale-[1.02] text-base h-11 px-5 py-2"
							>
								{isLoading
									? "Creating Account..."
									: "Create Account"}
								<ArrowRight className="w-4 h-4 ml-2" />
							</button>
						</div>
					</form>

					{/* divider */}
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-(--border)" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-(--background) px-2 text-(--muted-foreground)">
								Or continue with
							</span>
						</div>
					</div>

					<SocialLoginButtons />

					<p className="text-center text-sm text-(--muted-foreground)">
						Don&apos;t have an account?{" "}
						<Link
							href="/login"
							className="text-primary hover:underline font-medium"
						>
							Sign In
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
