"use client";

import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { Suspense } from "react";

const RegisterPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RegisterForm />
		</Suspense>
	);
};

export default RegisterPage;
