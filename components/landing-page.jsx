import React from "react";
import { Navbar } from "./nav-bar";
import { HeroSection } from "./hero-section";

const LandingPage = () => {
	return (
		<div>
			{/* Navbar */}
			<div className="bg-[#F7FAFC]">
				<Navbar />
			</div>
			{/* Hero Section */}
			<div>
				<HeroSection />
			</div>
		</div>
	);
};

export default LandingPage;
