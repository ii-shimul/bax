"use client";
import { useState, useEffect } from "react";
import blogs from "@/data/blogs.json";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "motion/react";
import {
	blurFadeUp,
	fadeUp,
	scaleY,
	staggerContainer,
	viewportOnce,
} from "@/lib/animations";

const Blogs = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkWidth = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkWidth();
		window.addEventListener("resize", checkWidth);
		return () => window.removeEventListener("resize", checkWidth);
	}, []);

	return (
		<section
			className="py-5 md:py-16 px-4 md:px-10 max-w-240 mx-auto w-full"
			id="blog"
			aria-labelledby="blog-heading"
		>
			<motion.h2
				id="blog-heading"
				className="text-3xl font-black tracking-tight mb-8 border-b border-gray-200 dark:border-border-dark pb-4 flex items-center gap-3 text-gray-900 dark:text-white"
				variants={blurFadeUp}
				initial="hidden"
				whileInView="visible"
				viewport={viewportOnce}
			>
				<motion.span
					className="w-2 h-8 bg-primary rounded-full origin-bottom"
					variants={scaleY}
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
				/>
				Latest Thoughts
			</motion.h2>
			<motion.div
				className="flex flex-col gap-4"
				variants={staggerContainer(0.1)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportOnce}
			>
				{blogs.map((blog) => (
					<Modal key={blog.id}>
						<ModalTrigger>
							<motion.article
								className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-1 p-2 md:p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-card-dark transition-colors cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-border-dark"
								variants={fadeUp}
							>
								<span className="text-primary text-start font-mono text-sm font-bold min-w-35">
									{blog.date}
								</span>
								<div className="flex-1 min-w-0">
									<h3 className="text-xl font-bold text-start text-gray-900 dark:text-white transition-colors mb-2 font-display">
										{blog.title}
									</h3>
									<p className="text-gray-600 truncate text-start dark:text-gray-400 text-sm leading-relaxed">
										{blog.body}
									</p>
								</div>
								{!isMobile && (
									<span className="material-symbols-outlined text-gray-400 dark:text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 self-center transform -translate-x-2.5 group-hover:translate-x-0 duration-300">
										arrow_forward
									</span>
								)}
							</motion.article>
						</ModalTrigger>
						<ModalBody>
							<ModalContent className="overflow-y-auto">
								<header className="mb-6 border-b border-gray-100 dark:border-neutral-800 pb-4">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-display">
										{blog.title}
									</h3>
									<div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-mono text-primary">{blog.date}</span>
									</div>
								</header>

								<article className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
									{blog.body.split("\n\n").map((para, idx) => (
										<p key={idx}>{para}</p>
									))}
								</article>
							</ModalContent>
						</ModalBody>
					</Modal>
				))}
			</motion.div>
		</section>
	);
};

export default Blogs;
