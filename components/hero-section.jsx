import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-5xl my-5 mt-25 leading-16 text-[#143A47]">
				Engage, Learn & Challenge Yourself
				<br /> with Our Interactive Quiz Platform
			</h1>
			<p className="text-muted-foreground">
				Welcome to the ultimate Quiz Platform for students, teachers, and quiz
				enthusiasts! Create, test, and host <br /> live quizzes with a seamless,
				interactive experience.
			</p>
			<Button className="mt-7">
				Get Started <ArrowRight />
			</Button>
			<div className="mx-auto flex justify-center items-center mt-30">
				<Image
					src="/website-hero-section.png"
					alt="website-hero-section"
					width={1000}
					height={1000}
					className="w-[60rem]"
				/>
				<Image src="/line.png" alt="line" width={100} height={100} />
			</div>
		</div>
	);
};
