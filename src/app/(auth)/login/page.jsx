"use client";
import SocialLoginButtons from "@/components/SocialLoginButtons/SocialLoginButtons";
import { ArrowRight, Eye, EyeOff, Heart, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const handleLoginForm = (data) => {
		alert("Login form submitted.");
		console.log(data);
	};
	return (
		<div className="min-h-screen flex">
			{/* Left Side - Form */}
			<div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-(--background)">
				<div className="w-full max-w-md space-y-8">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-2 group mb-8"
					>
						<div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
							<Heart className="w-5 h-5 text-(--primary-foreground)" />
						</div>
						<span className="text-xl font-heading font-bold text-(--foreground)">
							Care<span className="text-primary">.xyz</span>
						</span>
					</Link>
					<div>
						<h1 className="text-3xl font-heading font-bold mb-2">
							Welcome Back
						</h1>
						<p className="text-(--muted-foreground)">
							Sign in to continue booking care services
						</p>
					</div>

					{/* Login Form */}
					<form
						onSubmit={handleSubmit(handleLoginForm)}
						className="space-y-6"
					>
						{/* Email */}
						<div>
							<label htmlFor="email" className="mb-2 block">
								Email Address
							</label>
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
								{isLoading ? "Signing in..." : "Sign In"}
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
							href="/register"
							className="text-primary hover:underline font-medium"
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>

			{/* Right Side - Image */}
			<div className="hidden lg:flex flex-1 bg-hero-gradient items-center justify-center p-12 relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-(--secondary)/20 rounded-full blur-3xl" />
				</div>
				<div className="relative text-center max-w-md">
					<Image
						width={160}
						height={160}
						src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=400&fit=crop"
						alt="Happy family"
						className="w-64 h-64 rounded-full object-cover mx-auto mb-8 border-4 border-card shadow-xl"
					/>
					<h2 className="text-2xl font-heading font-bold mb-4">
						Trusted Care for Your Family
					</h2>
					<p className="text-(--muted-foreground)">
						Join thousands of families who trust Care.xyz for
						reliable, professional care services.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
