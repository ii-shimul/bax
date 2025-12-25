"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type SocialButtonProps = {
	icon: ReactNode;
	label: string;
	bgColor?: string;
	hoverBgColor?: string;
	textColor?: string;
	className?: string;
	href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export const SocialButton = ({
	icon,
	label,
	bgColor = "rgb(20, 20, 20)",
	hoverBgColor = "rgb(255, 69, 69)",
	textColor = "white",
	className,
	href,
	...props
}: SocialButtonProps) => {
	const buttonContent = (
		<button
			className={cn("social-button group", className)}
			type="button"
			{...props}
			style={
				{
					"--bg-color": bgColor,
					"--hover-bg-color": hoverBgColor,
					"--text-color": textColor,
				} as React.CSSProperties
			}
		>
			<span className="social-button-icon">{icon}</span>
			<span className="social-button-label">{label}</span>
			<style jsx>{`
				.social-button {
					min-width: 50px;
					height: 50px;
					padding: 0 15px;
					border-radius: 25px;
					background-color: var(--bg-color);
					border: none;
					font-weight: 600;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0;
					box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
					cursor: pointer;
					overflow: hidden;
					position: relative;
					transition: background-color 0.3s ease, gap 0.3s ease,
						padding 0.3s ease;
				}

				.social-button-icon {
					width: 20px;
					height: 20px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: var(--text-color);
					flex-shrink: 0;
				}

				.social-button-icon :global(svg) {
					width: 100%;
					height: 100%;
					fill: var(--text-color);
				}

				.social-button-label {
					color: var(--text-color);
					font-size: 13px;
					white-space: nowrap;
					max-width: 0;
					overflow: hidden;
					opacity: 0;
					transition: max-width 0.3s ease, opacity 0.3s ease;
				}

				.social-button:hover {
					gap: 8px;
					padding: 0 20px;
					background-color: var(--hover-bg-color);
				}

				.social-button:hover .social-button-label {
					opacity: 1;
					max-width: 150px;
				}
			`}</style>
		</button>
	);

	if (href) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer">
				{buttonContent}
			</a>
		);
	}

	return buttonContent;
};
