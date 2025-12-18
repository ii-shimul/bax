"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, ReactNode } from "react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string;
		icon: ReactNode;
		description?: string;
		hoverColor?: string;
		link?: string;
	}[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				className
			)}
		>
			{items.map((item, idx) => (
				<div
					key={item.title}
					className="relative group block  h-full w-full"
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
						<CardIcon hoverColor={item.hoverColor}>{item.icon}</CardIcon>
						<div className="flex flex-col">
							<CardTitle>{item.title}</CardTitle>
							{item.description && (
								<CardDescription>{item.description}</CardDescription>
							)}
						</div>
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
			<div className="relative z-50 flex flex-row items-center gap-4">
				{children}
			</div>
		</div>
	);
};

export const CardIcon = ({
	className,
	children,
	hoverColor,
}: {
	className?: string;
	children: React.ReactNode;
	hoverColor?: string;
}) => {
	return (
		<div
			className={cn(
				"text-4xl text-gray-500 transition-colors shrink-0",
				className
			)}
			style={
				hoverColor
					? ({ "--hover-color": hoverColor } as React.CSSProperties)
					: undefined
			}
		>
			<span className="group-hover:text-(--hover-color) transition-colors">
				{children}
			</span>
		</div>
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
				"text-md font-semibold text-gray-500 group-hover:text-white transition-colors",
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
	return <p className={cn("text-xs text-zinc-500", className)}>{children}</p>;
};
