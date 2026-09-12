import blogs from "@/data/blogs.json";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { safeJsonLd } from "@/lib/utils";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return blogs.map((blog) => ({
		slug: blog.id,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const blog = blogs.find((b) => b.id === slug);

	if (!blog) {
		return {
			title: "Article Not Found | Bax",
		};
	}

	const excerpt =
		blog.body.replace(/\n+/g, " ").slice(0, 155).trim() + "...";

	return {
		title: blog.title,
		description: excerpt,
		alternates: {
			canonical: `https://www.shimul.codes/blog/${blog.id}`,
		},
		openGraph: {
			title: `${blog.title} | Injamamul Islam Shimul`,
			description: excerpt,
			type: "article",
			publishedTime: new Date(blog.date).toISOString(),
			authors: ["Injamamul Islam Shimul"],
			url: `https://www.shimul.codes/blog/${blog.id}`,
			images: [
				{
					url: "/og-image.png",
					width: 1200,
					height: 630,
					alt: blog.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: blog.title,
			description: excerpt,
			images: ["/og-image.png"],
		},
	};
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const blog = blogs.find((b) => b.id === slug);

	if (!blog) {
		notFound();
	}

	const blogPostingSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: blog.title,
		description: blog.body.replace(/\n+/g, " ").slice(0, 155).trim() + "...",
		datePublished: new Date(blog.date).toISOString(),
		author: {
			"@type": "Person",
			name: "Injamamul Islam Shimul",
			alternateName: "Bax",
			url: "https://www.shimul.codes",
		},
		publisher: {
			"@type": "Person",
			name: "Injamamul Islam Shimul",
			url: "https://www.shimul.codes",
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://www.shimul.codes/blog/${blog.id}`,
		},
		image: "https://www.shimul.codes/og-image.png",
	};

	return (
		<main className="min-h-screen pt-28 pb-20 px-4 md:px-10 max-w-4xl mx-auto w-full">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: safeJsonLd(blogPostingSchema),
				}}
			/>

			<div className="mb-8">
				<Link
					href="/#blog"
					className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-primary transition-colors group"
					aria-label="Back to all posts"
				>
					<span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
						arrow_back
					</span>
					Back to Articles
				</Link>
			</div>

			<article className="rounded-2xl border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-6 md:p-12 shadow-sm">
				<header className="mb-8 border-b border-gray-200 dark:border-border-dark pb-6">
					<div className="flex items-center gap-3 mb-4">
						<span className="font-mono text-xs md:text-sm font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
							{blog.date}
						</span>
						<span className="text-xs text-gray-500 dark:text-gray-400">
							By Injamamul Islam Shimul
						</span>
					</div>
					<h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white font-display leading-tight">
						{blog.title}
					</h1>
				</header>

				<div className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-6 font-light">
					{blog.body.split("\n\n").map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>

				<footer className="mt-12 pt-8 border-t border-gray-200 dark:border-border-dark flex justify-between items-center flex-wrap gap-4">
					<Link
						href="/#contact"
						className="text-sm font-semibold text-primary hover:underline"
					>
						Have thoughts on this? Get in touch &rarr;
					</Link>
					<Link
						href="/#blog"
						className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
					>
						View more posts
					</Link>
				</footer>
			</article>
		</main>
	);
}
