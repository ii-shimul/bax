"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, ReactNode } from "react";

export const HoverEffect = ({
	items,
	className,
	updateCodeWith,
}: {
	items: {
		title: string;
		icon: ReactNode;
		description?: string;
		hoverColor?: string;
		link?: string;
	}[];
	className?: string;
	updateCodeWith: (techTitle: string[] | undefined) => void;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2.5 md:gap-4",
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
								className="absolute -inset-1 h-[calc(100%+8px)] w-[calc(100%+8px)] bg-primary/20 block rounded-xl"
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
					<div
						onMouseEnter={() => updateCodeWith([item.title])}
						onMouseLeave={() => updateCodeWith(undefined)}
						className="rounded-xl h-full w-full p-4 sm:p-4 overflow-hidden bg-gray-200 dark:bg-background-dark border border-gray-200 dark:border-border-dark group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] relative z-20 transition-all duration-300"
					>
						<div className="relative z-50 flex flex-row items-center gap-3 sm:gap-4">
							<CardIcon hoverColor={item.hoverColor}>{item.icon}</CardIcon>
							<div className="flex flex-col">
								<CardTitle>{item.title}</CardTitle>
								{item.description && (
									<CardDescription className="max-sm:hidden">
										{item.description}
									</CardDescription>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
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
				"text-3xl sm:text-4xl text-gray-500 transition-colors shrink-0",
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
				"text-md font-semibold text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors",
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
