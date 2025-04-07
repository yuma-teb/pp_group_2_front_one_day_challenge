import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between container mx-auto py-1">
			<Image
				src="/logo.png"
				alt="logo"
				width={200}
				height={200}
				className="w-44"
			/>
			<Button className="px-6">Login</Button>
		</nav>
	);
};
