"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";

type SocialButtonProps = {
	icon: ReactNode;
	label: string;
	lightBgColor?: string;
	darkBgColor?: string;
	hoverBgColor?: string;
	lightTextColor?: string;
	darkTextColor?: string;
	className?: string;
	href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export const SocialButton = ({
	icon,
	label,
	lightBgColor = "rgb(229, 231, 235)",
	darkBgColor = "rgb(20, 20, 20)",
	hoverBgColor = "rgb(255, 69, 69)",
	lightTextColor = "rgb(17, 24, 39)",
	darkTextColor = "white",
	className,
	href,
	...props
}: SocialButtonProps) => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const checkDarkMode = () => {
			setIsDark(document.documentElement.classList.contains("dark"));
		};

		checkDarkMode();

		const observer = new MutationObserver(checkDarkMode);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	const bgColor = isDark ? darkBgColor : lightBgColor;
	const textColor = isDark ? darkTextColor : lightTextColor;

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
					box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
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

				.social-button:hover .social-button-icon,
				.social-button:hover .social-button-label {
					color: white;
				}

				.social-button:hover .social-button-icon :global(svg) {
					fill: white;
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
