import type { Variants, Transition } from "motion/react";

export const smooth: Transition = {
	duration: 0.6,
	ease: [0.25, 0.1, 0.25, 1],
};

export const smoothSlow: Transition = {
	duration: 0.8,
	ease: [0.25, 0.1, 0.25, 1],
};

export const spring: Transition = {
	type: "spring",
	stiffness: 100,
	damping: 15,
};

export const springSnappy: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 20,
};


export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
	hidden: {},
	visible: {
		transition: {
			staggerChildren: stagger,
			delayChildren: delay,
		},
	},
});

export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: smooth,
	},
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: smooth,
	},
};

export const blurFadeUp: Variants = {
	hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: smoothSlow,
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.92 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: spring,
	},
};

export const slideInLeft: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: smooth,
	},
};

export const slideInRight: Variants = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: smooth,
	},
};

export const scaleY: Variants = {
	hidden: { scaleY: 0, opacity: 0 },
	visible: {
		scaleY: 1,
		opacity: 1,
		transition: smoothSlow,
	},
};

export const viewportOnce = { once: true, margin: "-80px" as const };
