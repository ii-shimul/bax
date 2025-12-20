import React from "react";

const Blogs = () => {
	return (
		<section className="py-16 px-4 md:px-10 max-w-240 mx-auto w-full" id="blog">
			<h2 className="text-3xl font-black tracking-tight mb-8 border-b border-border-dark pb-4 flex items-center gap-3">
				<span className="w-2 h-8 bg-primary rounded-full" />
				Latest Thoughts
			</h2>
			<div className="flex flex-col gap-4">
				<article className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 p-6 rounded-xl hover:bg-card-dark transition-colors cursor-pointer border border-transparent hover:border-border-dark">
					<span className="text-primary font-mono text-sm font-bold min-w-25">
						Oct 24, 2023
					</span>
					<div className="flex-1">
						<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2 font-display">
							The future of Serverless Components
						</h3>
						<p className="text-gray-400 text-sm leading-relaxed">
							Exploring the shift towards edge computing and how it impacts
							frontend architecture...
						</p>
					</div>
					<span className="material-symbols-outlined text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 self-center transform -translate-x-2.5 group-hover:translate-x-0 duration-300">
						arrow_forward
					</span>
				</article>
				<article className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 p-6 rounded-xl hover:bg-card-dark transition-colors cursor-pointer border border-transparent hover:border-border-dark">
					<span className="text-primary font-mono text-sm font-bold min-w-25">
						Sep 12, 2023
					</span>
					<div className="flex-1">
						<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2 font-display">
							Mastering Tailwind CSS Config
						</h3>
						<p className="text-gray-400 text-sm leading-relaxed">
							How to set up a scalable design system using Tailwind&apos;s
							configuration file effectively...
						</p>
					</div>
					<span className="material-symbols-outlined text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 self-center transform -translate-x-2.5 group-hover:translate-x-0 duration-300">
						arrow_forward
					</span>
				</article>
				<article className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 p-6 rounded-xl hover:bg-card-dark transition-colors cursor-pointer border border-transparent hover:border-border-dark">
					<span className="text-primary font-mono text-sm font-bold min-w-25">
						Aug 05, 2023
					</span>
					<div className="flex-1">
						<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2 font-display">
							Accessibility in Modern Web Apps
						</h3>
						<p className="text-gray-400 text-sm leading-relaxed">
							Why a11y matters more than ever and how to implement it without
							sacrificing design...
						</p>
					</div>
					<span className="material-symbols-outlined text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 self-center transform -translate-x-2.5 group-hover:translate-x-0 duration-300">
						arrow_forward
					</span>
				</article>
			</div>
		</section>
	);
};

export default Blogs;
