import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ReactLenis from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import Chatbot from "@/components/chat/Chatbot";
import { safeJsonLd } from "@/lib/utils";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-display",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.shimul.codes/"),
	title: {
		default: "Injamamul Islam Shimul (Bax) | Full Stack Developer",
		template: "%s | Injamamul Islam Shimul",
	},
	description:
		"Full Stack Developer portfolio of Injamamul Islam Shimul (Bax). Specializing in React, Next.js, TypeScript, and scalable web applications.",
	alternates: {
		canonical: "https://www.shimul.codes/",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
	},
	keywords: [
		"Bax",
		"Shimul",
		"Injamamul Islam",
		"Full Stack Developer",
		"Software Engineer",
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"Web Development",
		"JavaScript",
		"TypeScript",
		"Portfolio",
	],
	authors: [
		{
			name: "Injamamul Islam Shimul",
			url: "https://www.shimul.codes/",
		},
	],
	creator: "Injamamul Islam Shimul",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.shimul.codes/",
		title: "Injamamul Islam Shimul (Bax) | Full Stack Developer",
		description:
			"Full Stack Developer portfolio of Injamamul Islam Shimul (Bax). Specializing in React, Next.js, TypeScript, and scalable web applications.",
		siteName: "Shimul - A developer with taste",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Injamamul Islam Shimul (Bax) - Full Stack Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Injamamul Islam Shimul (Bax) | Full Stack Developer",
		description:
			"Full Stack Developer portfolio of Injamamul Islam Shimul (Bax). Specializing in React, Next.js, TypeScript, and scalable web applications.",
		creator: "@islamshimul27",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
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
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
					}}
				/>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link
					href="https://fonts.gstatic.com"
					rel="preconnect"
					crossOrigin="anonymous"
				/>
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} antialiased bg-background-light dark:bg-background-dark text-card-dark dark:text-white transition-colors duration-300`}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: safeJsonLd({
							"@context": "https://schema.org",
							"@type": "ProfilePage",
							mainEntity: {
								"@type": "Person",
								name: "Injamamul Islam Shimul",
								alternateName: "Bax",
								jobTitle: "Full Stack Developer",
								url: "https://www.shimul.codes",
								image: "https://www.shimul.codes/me.png",
								sameAs: [
									"https://github.com/ii-shimul",
									"https://linkedin.com/in/ii-shimul",
									"https://facebook.com/zahannami",
								],
								email: "islamshimul27@gmail.com",
								address: {
									"@type": "PostalAddress",
									addressLocality: "Sylhet",
									addressCountry: "BD",
								},
								knowsAbout: [
									"JavaScript",
									"TypeScript",
									"React",
									"Next.js",
									"Node.js",
									"MongoDB",
									"PostgreSQL",
									"Tailwind CSS",
								],
							},
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: safeJsonLd({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Shimul — Full Stack Developer Portfolio",
							url: "https://www.shimul.codes",
							description:
								"Full Stack Developer portfolio of Injamamul Islam Shimul (Bax). Specializing in React, Next.js, TypeScript, and scalable web applications.",
							author: {
								"@type": "Person",
								name: "Injamamul Islam Shimul",
							},
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: safeJsonLd({
							"@context": "https://schema.org",
							"@type": "ItemList",
							name: "Featured Projects by Injamamul Islam Shimul",
							itemListElement: [
								{
									"@type": "ListItem",
									position: 1,
									item: {
										"@type": "SoftwareApplication",
										name: "HostelMate",
										description:
											"Meal management system where users browse, order, and review meals with admin dashboards and Stripe integration.",
										url: "https://hostelmate-b7e8e.web.app/",
										applicationCategory: "WebApplication",
										operatingSystem: "All",
									},
								},
								{
									"@type": "ListItem",
									position: 2,
									item: {
										"@type": "SoftwareApplication",
										name: "Tourna - Tournament Manager",
										description:
											"Tournament management platform where users create teams, manage brackets, and determine champions.",
										url: "https://tourna-nine.vercel.app/",
										applicationCategory: "WebApplication",
										operatingSystem: "All",
									},
								},
								{
									"@type": "ListItem",
									position: 3,
									item: {
										"@type": "SoftwareApplication",
										name: "SharePlate",
										description:
											"Community food sharing platform connecting individuals to share excess food and reduce waste.",
										url: "https://shareplate-72dea.web.app/",
										applicationCategory: "WebApplication",
										operatingSystem: "All",
									},
								},
								{
									"@type": "ListItem",
									position: 4,
									item: {
										"@type": "SoftwareApplication",
										name: "PlanetCare",
										description:
											"Volunteer management and donation platform for environmental cleanup events and sustainability drives.",
										url: "https://planetcare-bd.web.app/",
										applicationCategory: "WebApplication",
										operatingSystem: "All",
									},
								},
								{
									"@type": "ListItem",
									position: 5,
									item: {
										"@type": "SoftwareApplication",
										name: "Ocean Xplorer",
										description:
											"Interactive animated frontend experience showcasing modern motion design and typography.",
										url: "https://ocean-xplorer.web.app/",
										applicationCategory: "WebApplication",
										operatingSystem: "All",
									},
								},
							],
						}),
					}}
				/>
				<Analytics />
				<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary/50 selection:text-gray-600 dark:selection:bg-primary/30 dark:selection:text-gray-300">
					<Header />
					<ReactLenis root options={lenisOptions}>
						<main>{children}</main>
					</ReactLenis>
					<Footer />
				</div>
				<Chatbot />
			</body>
		</html>
	);
}
