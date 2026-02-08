"use client";

import { About } from "@/components/sections/About";
import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Works from "@/components/sections/Works";
import { motion } from "motion/react";

const sectionReveal = {
	hidden: { opacity: 0.0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.8, ease: "easeOut" as const },
	},
};

const viewport = { once: true, margin: "-100px" as const };

export default function Home() {
	return (
		<>
			<Hero />
			<motion.div
				variants={sectionReveal}
				initial="hidden"
				whileInView="visible"
				viewport={viewport}
			>
				<About />
			</motion.div>
			<motion.div
				variants={sectionReveal}
				initial="hidden"
				whileInView="visible"
				viewport={viewport}
			>
				<TechStack />
			</motion.div>
			<motion.div
				variants={sectionReveal}
				initial="hidden"
				whileInView="visible"
				viewport={viewport}
			>
				<Works />
			</motion.div>
			<motion.div
				variants={sectionReveal}
				initial="hidden"
				whileInView="visible"
				viewport={viewport}
			>
				<Blogs />
			</motion.div>
		</>
	);
}
