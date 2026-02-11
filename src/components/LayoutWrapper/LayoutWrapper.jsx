"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

/**
 * This component controls when Navbar and Footer should be visible
 */
export default function LayoutWrapper({ children }) {
	const pathname = usePathname();

	// Routes where Navbar & Footer should be hidden
	const authRoutes = ["/login", "/register"];

	// Check if current route is an auth route
	const hideLayout = authRoutes.includes(pathname);

	return (
		<>
			{/* Show Navbar only if not auth route */}
			{!hideLayout && <Navbar />}

			<main className="min-h-[calc(100vh-585px)]">{children}</main>

			{/* Show Footer only if not auth route */}
			{!hideLayout && <Footer />}
		</>
	);
}
