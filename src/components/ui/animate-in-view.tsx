"use client";

import { motion, type Variants } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface AnimateInViewProps {
	children: React.ReactNode;
	variants?: Variants;
	className?: string;
	as?: keyof typeof motion;
	delay?: number;
}

export const AnimateInView = ({
	children,
	variants = fadeUp,
	className,
	as = "div",
	delay = 0,
}: AnimateInViewProps) => {
	const Component = motion[as] as typeof motion.div;

	const delayedVariants: Variants =
		delay ?
			{
				hidden: variants.hidden,
				visible: {
					...(typeof variants.visible === "object" ? variants.visible : {}),
					transition: {
						...((
							typeof variants.visible === "object" &&
							variants.visible !== null &&
							"transition" in variants.visible
						) ?
							(variants.visible.transition as Record<string, unknown>)
						:	{}),
						delay,
					},
				},
			}
		:	variants;

	return (
		<Component
			variants={delayedVariants}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
			className={className}
		>
			{children}
		</Component>
	);
};
