import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
	const links = (
		<>
			<li>
				<ActiveLink href={"/"}>Home</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/services"}>Services</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/about"}>About</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/contact"}>Contact</ActiveLink>
			</li>
		</>
	);
	return (
		<section className="bg-[#FEFEFD] shadow-sm py-3 md:py-5">
			<div className="container">
				<div className="navbar min-h-0 p-0">
					<div className="navbar-start">
						<label
							htmlFor="mobile-drawer"
							className="lg:hidden mr-4 cursor-pointer"
						>
							<Menu />
						</label>
						{/* Logo */}
						<Link
							href="/"
							className="flex items-center gap-2 group"
						>
							<div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
								<Heart className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold text-foreground">
								Care<span className="text-primary">.xyz</span>
							</span>
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0">{links}</ul>
					</div>
					<div className="navbar-end">
						<div className="flex items-center gap-3">
							<Link
								href={"/login"}
								className="btn btn-primary text-base"
							>
								Login
							</Link>
							<Link
								href={"/register"}
								className="btn btn-primary btn-outline text-base hidden md:flex"
							>
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile Menu Sidebar */}
			<div className="drawer">
				<input
					id="mobile-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-side">
					<label
						htmlFor="mobile-drawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu bg-[#FEFEFD] min-h-full w-80 p-0">
						<div className="flex shadow-sm items-center justify-between py-3 px-2">
							{/* Logo */}
							<Link
								href="/"
								className="flex items-center gap-2 group"
							>
								<div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
									<Heart className="w-5 h-5 text-white" />
								</div>
								<span className="text-xl font-bold text-foreground">
									Care
									<span className="text-primary">.xyz</span>
								</span>
							</Link>
							<div>
								<label
									htmlFor="mobile-drawer"
									aria-label="close sidebar"
									className="drawer-overlay"
								>
									<X size={30} className="cursor-pointer" />
								</label>
							</div>
						</div>
						{/* Sidebar content here */}
						<div className="pt-5 pl-2.5">{links}</div>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
