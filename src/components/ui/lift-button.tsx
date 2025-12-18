"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type LiftButtonProps = {
	children: ReactNode;
	className?: string;
	bgColor?: string;
	shadowColor1?: string;
	shadowColor2?: string;
	href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const LiftButton = ({
	children,
	className,
	bgColor = "#ef4444",
	shadowColor1 = "#dc2626",
	shadowColor2 = "#b91c1c",
	href,
	...props
}: LiftButtonProps) => {
	const buttonContent = (
		<button
			className={cn("lift-button", className)}
			type="button"
			style={
				{
					"--bg-color": bgColor,
					"--shadow-color-1": shadowColor1,
					"--shadow-color-2": shadowColor2,
				} as React.CSSProperties
			}
			{...props}
		>
			{children}
			<style jsx>{`
				.lift-button {
					cursor: pointer;
					background-color: var(--bg-color);
					border: none;
					border-radius: 5px;
					transition: all 0.4s;
				}

				.lift-button:hover {
					border-radius: 5px;
					transform: translateY(-10px);
					box-shadow: 0 7px 0 -2px var(--shadow-color-1),
						0 15px 0 -4px var(--shadow-color-2),
						0 16px 10px -3px var(--shadow-color-2);
				}

				.lift-button:active {
					transition: all 0.2s;
					transform: translateY(-5px);
					box-shadow: 0 2px 0 -2px var(--shadow-color-1),
						0 8px 0 -4px var(--shadow-color-2),
						0 12px 10px -3px var(--shadow-color-2);
				}
			`}</style>
		</button>
	);

	if (href) {
		return <a href={href}>{buttonContent}</a>;
	}

	return buttonContent;
};
