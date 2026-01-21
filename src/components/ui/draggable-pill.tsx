import { motion, MotionStyle } from "motion/react";
import { RefObject } from "react";

export default function DragPill({
	text,
	icon,
	style,
	containerRef,
}: {
	text: string;
	icon?: string;
	style?: MotionStyle;
	containerRef: RefObject<HTMLElement | null>;
}) {
	return (
		<motion.div
			className="absolute flex items-center gap-2 px-4 py-2 bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-full cursor-grab active:cursor-grabbing select-none overflow-hidden group hover:border-primary/50 hover:shadow-lg transition-all duration-300 z-10"
			style={style}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.05, zIndex: 20 }}
			whileTap={{ scale: 0.95 }}
			drag
			dragConstraints={containerRef}
			dragElastic={0.1}
			dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
		>
			<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

			{icon && (
				<span className="material-symbols-outlined text-primary text-lg relative z-10">
					{icon}
				</span>
			)}

			<span className="font-semibold text-gray-900 dark:text-white text-sm relative z-10 whitespace-nowrap">
				{text}
			</span>
		</motion.div>
	);
}
