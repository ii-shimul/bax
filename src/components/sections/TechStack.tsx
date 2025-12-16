"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const techItems = [
	{ title: "HTML5", icon: "html" },
	{ title: "CSS3", icon: "css" },
	{ title: "JavaScript", icon: "javascript" },
	{ title: "React", icon: "code_blocks" },
	{ title: "Next.js", icon: "deployed_code" },
	{ title: "Node.js", icon: "terminal" },
	{ title: "SQL", icon: "database" },
	{ title: "Figma", icon: "brush" },
];

const TechStack = () => {
	return (
		<section className="w-full border-y border-border-dark bg-card-dark py-12 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 md:px-10 mb-8">
				<h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-display">
					Technological Arsenal
				</h3>
			</div>
			<div className="max-w-7xl mx-auto px-4 md:px-10">
				<HoverEffect items={techItems} />
			</div>
		</section>
	);
};

export default TechStack;
