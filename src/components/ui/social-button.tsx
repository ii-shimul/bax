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
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background-color: var(--bg-color);
					border: none;
					font-weight: 600;
					display: flex;
					align-items: center;
					justify-content: center;
					box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
					cursor: pointer;
					transition-duration: 0.3s;
					overflow: hidden;
					position: relative;
				}

				.social-button-icon {
					width: 20px;
					height: 20px;
					display: flex;
					align-items: center;
					justify-content: center;
					transition-duration: 0.3s;
					color: var(--text-color);
				}

				.social-button-icon :global(svg) {
					width: 100%;
					height: 100%;
					fill: var(--text-color);
				}

				.social-button-label {
					position: absolute;
					top: -20px;
					color: var(--text-color);
					transition-duration: 0.3s;
					font-size: 2px;
					opacity: 0;
				}

				.social-button:hover {
					width: 140px;
					border-radius: 50px;
					background-color: var(--hover-bg-color);
				}

				.social-button:hover .social-button-icon {
					width: 50px;
					transform: translateY(60%);
				}

				.social-button:hover .social-button-label {
					font-size: 13px;
					opacity: 1;
					transform: translateY(30px);
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
