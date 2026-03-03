"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useState } from "react";
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiMongoose,
	SiPostgresql,
	SiSupabase,
	SiGit,
	SiTailwindcss,
} from "react-icons/si";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { motion } from "motion/react";
import {
	blurFadeUp,
	fadeUp,
	staggerContainer,
	viewportOnce,
} from "@/lib/animations";

const techItems = [
	{
		title: "JavaScript",
		icon: <SiJavascript />,
		description: "Dynamic scripting language",
		hoverColor: "#F7DF1E",
	},
	{
		title: "TypeScript",
		icon: <SiTypescript />,
		description: "JavaScript but better",
		hoverColor: "#3178C6",
	},
	{
		title: "React",
		icon: <SiReact />,
		description: "JavaScript library",
		hoverColor: "#61DAFB",
	},
	{
		title: "Next.js",
		icon: <SiNextdotjs />,
		description: "React framework",
		hoverColor: "#FFFFFF",
	},
	{
		title: "Node.js",
		icon: <SiNodedotjs />,
		description: "JavaScript for backend",
		hoverColor: "#339933",
	},
	{
		title: "Express",
		icon: <SiExpress />,
		description: "Node.js web framework",
		hoverColor: "#FFFFFF",
	},
	{
		title: "MongoDB",
		icon: <SiMongodb />,
		description: "NoSQL database",
		hoverColor: "#47A248",
	},
	{
		title: "Mongoose",
		icon: <SiMongoose />,
		description: "MongoDB ODM",
		hoverColor: "#880000",
	},
	{
		title: "PostgreSQL",
		icon: <SiPostgresql />,
		description: "Relational database",
		hoverColor: "#4169E1",
	},
	{
		title: "Supabase",
		icon: <SiSupabase />,
		description: "Firebase alternative",
		hoverColor: "#3FCF8E",
	},
	{
		title: "Tailwind CSS",
		icon: <SiTailwindcss />,
		description: "Utility-first CSS",
		hoverColor: "#06B6D4",
	},
	{
		title: "Git",
		icon: <SiGit />,
		description: "Version control",
		hoverColor: "#F05032",
	},
];

const TechStack = () => {
	const [codeWIth, setCodeWith] = useState<string[] | undefined>(undefined);
	const updateCodeWith = (techTitle: string[] | undefined): void => {
		if (techTitle?.length) {
			setCodeWith(techTitle);
		} else {
			setCodeWith([
				"purpose",
				"precision",
				"curiosity",
				"coffee",
				"creativity",
				"deadlines",
			]);
		}
	};
	return (
		<section
			className="w-full border-y border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-card-dark pt-5 pb-5 md:pt-10 md:pb-16 overflow-hidden"
			id="tech"
			aria-labelledby="tech-heading"
		>
			<motion.div
				className="max-w-6xl mx-auto px-4 md:px-10"
				variants={staggerContainer(0.08)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportOnce}
			>
				<motion.h3
					id="tech-heading"
					className="text-sm font-bold mb-5 md:mb-8 text-gray-600 dark:text-gray-500 uppercase tracking-widest font-display"
					variants={blurFadeUp}
				>
					I code with{" "}
					<ContainerTextFlip
						words={codeWIth}
						className="bg-primary/30 px-1 rounded-sm transform transition duration-200"
					/>
				</motion.h3>
				<motion.div variants={fadeUp}>
					<HoverEffect items={techItems} updateCodeWith={updateCodeWith} />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default TechStack;
