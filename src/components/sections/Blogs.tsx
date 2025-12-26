import blogs from "@/data/blogs.json";

const Blogs = () => {
	return (
		<section className="py-16 px-4 md:px-10 max-w-240 mx-auto w-full" id="blog">
			<h2 className="text-3xl font-black tracking-tight mb-8 border-b border-gray-200 dark:border-border-dark pb-4 flex items-center gap-3 text-gray-900 dark:text-white">
				<span className="w-2 h-8 bg-primary rounded-full" />
				Latest Thoughts
			</h2>
			<div className="flex flex-col gap-4">
				{blogs.map((blog) => (
					<article
						key={blog.id}
						className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-card-dark transition-colors cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-border-dark"
					>
						<span className="text-primary font-mono text-sm font-bold min-w-25">
							{blog.date}
						</span>
						<div className="flex-1">
							<h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors mb-2 font-display">
								{blog.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
								{blog.excerpt}
							</p>
						</div>
						<span className="material-symbols-outlined text-gray-400 dark:text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 self-center transform -translate-x-2.5 group-hover:translate-x-0 duration-300">
							arrow_forward
						</span>
					</article>
				))}
			</div>
		</section>
	);
};

export default Blogs;
