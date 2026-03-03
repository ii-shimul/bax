import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ReactLenis from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import Chatbot from "@/components/chat/Chatbot";
import Script from "next/script";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.shimul.codes/"),
	title: {
		default: "Bax | Full Stack Developer",
		template: "%s | Bax",
	},
	description:
		"Portfolio of Injamamul Islam Shimul, a Full Stack Developer specializing in building exceptional digital experiences, scalable web applications, and intuitive user interfaces. Explore my latest projects and technical expertise.",
	alternates: {
		canonical: "https://www.shimul.codes/",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/me.png",
	},
	keywords: [
		"Bax",
		"Shimul",
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
			name: "Shimul",
			url: "https://www.shimul.codes/",
		},
	],
	creator: "Injamamul Islam Shimul",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.shimul.codes/",
		title: "Shimul | Full Stack Developer",
		description:
			"Portfolio of Shimul, a Full Stack Developer specializing in building exceptional digital experiences. Explore my latest projects and technical expertise.",
		siteName: "Shimul - A developer with taste",
		images: [
			{
				url: "/me.png",
				width: 1696,
				height: 1847,
				alt: "Shimul - Full Stack Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Shimul | Full Stack Developer",
		description:
			"Portfolio of Shimul, a Full Stack Developer specializing in building exceptional digital experiences.",
		creator: "@islamshimul27",
		images: ["/me.png"],
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
				className={`${inter.variable} ${inter.className} antialiased bg-background-light dark:bg-background-dark text-card-dark dark:text-white transition-colors duration-300`}
			>
				<Script
					id="json-ld-person"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
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
								email: "islamshimul27@email.com",
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
				<Script
					id="json-ld-website"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Shimul — Full Stack Developer Portfolio",
							url: "https://www.shimul.codes",
							description:
								"Portfolio of Shimul, a Full Stack Developer specializing in building exceptional digital experiences.",
							author: {
								"@type": "Person",
								name: "Injamamul Islam Shimul",
							},
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
