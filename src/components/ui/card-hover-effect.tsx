"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string;
		icon: string;
		link?: string;
	}[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8",
				className
			)}
		>
			{items.map((item, idx) => (
				<div
					key={item.title}
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-primary/10 block rounded-xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<CardIcon>{item.icon}</CardIcon>
						<CardTitle>{item.title}</CardTitle>
					</Card>
				</div>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-xl h-full w-full p-4 overflow-hidden bg-background-dark border border-border-dark group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] relative z-20 transition-all duration-300",
				className
			)}
		>
			<div className="relative z-50 flex flex-col items-center justify-center gap-3 py-2">
				{children}
			</div>
		</div>
	);
};

export const CardIcon = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<span
			className={cn(
				"material-symbols-outlined text-4xl text-gray-500 group-hover:text-primary transition-colors",
				className
			)}
		>
			{children}
		</span>
	);
};

export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				"text-xs font-bold text-gray-500 group-hover:text-white transition-colors",
				className
			)}
		>
			{children}
		</h4>
	);
};

export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
