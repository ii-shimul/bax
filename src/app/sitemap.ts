import type { MetadataRoute } from "next";
import blogs from "@/data/blogs.json";

export default function sitemap(): MetadataRoute.Sitemap {
	const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
		url: `https://www.shimul.codes/blog/${blog.id}`,
		lastModified: new Date(blog.date),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [
		{
			url: "https://www.shimul.codes",
			lastModified: new Date("2026-09-12"),
			changeFrequency: "monthly",
			priority: 1,
		},
		...blogEntries,
	];
}
