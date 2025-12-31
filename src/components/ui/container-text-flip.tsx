"use client";

import React, { useState, useEffect, useId } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
	/** Array of words to cycle through in the animation */
	words?: string[];
	/** Time in milliseconds between word transitions */
	interval?: number;
	/** Additional CSS classes to apply to the container */
	className?: string;
	/** Additional CSS classes to apply to the text */
	textClassName?: string;
	/** Duration of the transition animation in milliseconds */
	animationDuration?: number;
}

export function ContainerTextFlip({
	words = ["better", "modern", "beautiful", "awesome"],
	interval = 3000,
	className,
	textClassName,
	animationDuration = 300,
}: ContainerTextFlipProps) {
	const id = useId();
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const textRef = React.useRef(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
			// Width will be updated in the effect that depends on currentWordIndex
		}, interval);

		return () => clearInterval(intervalId);
	}, [words, interval]);

	return (
		<motion.div
			layout
			layoutId={`words-here-${id}`}
			transition={{ duration: animationDuration / 2000 }}
			className={cn("relative inline-block", className)}
			key={words[currentWordIndex]}
		>
			<motion.div
				transition={{
					duration: animationDuration / 1000,
					ease: "easeInOut",
				}}
				className={cn("inline-block", textClassName)}
				ref={textRef}
				layoutId={`word-div-${words[currentWordIndex]}-${id}`}
			>
				<motion.div className="inline-block">
					{words.length > 1 ? (
						words[currentWordIndex].split("").map((letter, index) => (
							<motion.span
								key={index}
								initial={{
									opacity: 0,
									filter: "blur(10px)",
								}}
								animate={{
									opacity: 1,
									filter: "blur(0px)",
								}}
								transition={{
									delay: index * 0.02,
								}}
							>
								{letter}
							</motion.span>
						))
					) : (
						<motion.span
							initial={{
								opacity: 0,
								filter: "blur(10px)",
							}}
							animate={{
								opacity: 1,
								filter: "blur(0px)",
							}}
							transition={{
								delay: 1 * 0.02,
							}}
						>
							{words[0]}
						</motion.span>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
