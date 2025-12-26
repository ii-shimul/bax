import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ReactLenis from "lenis/react";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["cyrillic"],
});

export const metadata: Metadata = {
	title: "Bax",
	description: "A developer with taste.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const lenisOptions = {
		lerp: 0.1,
		duration: 1.5,
		smoothWheel: true,
		wheelMultiplier: 1,
		touchMultiplier: 2,
	};
	return (
		<html className="dark" lang="en">
			<head>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link href="https://fonts.gstatic.com" rel="preconnect" />
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={`${inter.variable} ${inter.className} antialiased bg-background-light dark:bg-background-dark text-card-dark dark:text-white transition-colors duration-300`}
			>
				<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary/30 selection:text-gray-300">
					<Header />
					<ReactLenis root options={lenisOptions}>
						{children}
					</ReactLenis>
					<Footer />
				</div>
			</body>
		</html>
	);
}
