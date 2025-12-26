import { BeforeEffectButton } from "../ui/before-effect-button";
import projects from "@/data/projects.json";

type Project = {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	liveLink: string;
	repoLink: string;
	keyFeatures?: string[];
};

const FeaturedCard = ({ project }: { project: Project }) => (
	<article className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-background-light dark:bg-card-dark border border-gray-200 dark:border-border-dark cyber-glow-box transition-all duration-300">
		<div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
		<div
			className="h-full w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
			style={{ backgroundImage: `url("${project.image}")` }}
		></div>
		<div className="absolute bottom-0 left-0 z-20 p-8 w-full">
			<div className="flex gap-2 mb-4 flex-wrap">
				{project.technologies.slice(0, 3).map((tech) => (
					<span
						key={tech}
						className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white"
					>
						{tech}
					</span>
				))}
			</div>
			<h3 className="text-3xl font-bold text-white mb-2 font-display">
				{project.title}
			</h3>
			<div className="flex items-center justify-between gap-4">
				<p className="text-gray-300 line-clamp-2 max-w-md font-light">
					{project.description}
				</p>
				<a
					className="h-12 w-12 shrink-0 flex items-center justify-center rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
					href={project.liveLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="material-symbols-outlined">arrow_outward</span>
				</a>
			</div>
		</div>
	</article>
);

const ImageHeaderCard = ({ project }: { project: Project }) => (
	<article className="group relative overflow-hidden rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark cyber-glow-box transition-all duration-300 flex flex-col">
		<div
			className="h-48 w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
			style={{ backgroundImage: `url("${project.image}")` }}
		></div>
		<div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-card-dark">
			<div>
				<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">
					{project.title}
				</h3>
				<p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
					{project.description}
				</p>
			</div>
			<div className="flex justify-between items-end mt-6">
				<div className="flex -space-x-2">
					{project.technologies.slice(0, 3).map((tech) => (
						<div
							key={tech}
							className="h-8 w-8 rounded-full border border-white dark:border-card-dark bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[10px] text-gray-800 dark:text-white font-bold"
							title={tech}
						>
							{tech.slice(0, 2).toUpperCase()}
						</div>
					))}
				</div>
				<a
					className="h-10 w-10 rounded-full border border-gray-200 dark:border-border-dark flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors text-gray-500 dark:text-gray-400"
					href={project.liveLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="material-symbols-outlined text-sm">
						arrow_forward
					</span>
				</a>
			</div>
		</div>
	</article>
);

const SplitCard = ({ project }: { project: Project }) => (
	<article className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark cyber-glow-box transition-all duration-300 flex flex-col md:flex-row">
		<div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative z-10">
			<div className="flex gap-2 mb-4 flex-wrap">
				{project.technologies.map((tech) => (
					<span
						key={tech}
						className="px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary border border-primary/20"
					>
						{tech}
					</span>
				))}
			</div>
			<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-display">
				{project.title}
			</h3>
			<p className="text-gray-600 dark:text-gray-400 mb-6 font-light">
				{project.description}
			</p>
			<div className="flex gap-4">
				<a
					className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:text-primary transition-colors w-fit"
					href={project.liveLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					Live Demo{" "}
					<span className="material-symbols-outlined text-sm">open_in_new</span>
				</a>
				<a
					className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold hover:text-primary transition-colors w-fit"
					href={project.repoLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					Code <span className="material-symbols-outlined text-sm">code</span>
				</a>
			</div>
		</div>
		<div
			className="w-full md:w-1/2 min-h-50 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 relative"
			style={{ backgroundImage: `url("${project.image}")` }}
		>
			<div className="absolute inset-0 bg-linear-to-r from-white dark:from-card-dark to-transparent md:block hidden" />
			<div className="absolute inset-0 bg-linear-to-t from-white dark:from-card-dark to-transparent md:hidden block" />
		</div>
	</article>
);

const Works = () => {
	const typedProjects = projects as Project[];

	return (
		<section className="py-24 px-4 md:px-10 max-w-6xl mx-auto w-full" id="work">
			<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
				<div>
					<h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-gray-900 dark:text-white cyber-glow-text">
						Selected Works
					</h2>
					<p className="text-gray-600 dark:text-gray-400">
						A curation of my recent digital products.
					</p>
				</div>
				<BeforeEffectButton className="flex items-center cursor-pointer pt-1.5 gap-1 text-gray-900 dark:text-white font-bold hover:text-primary transition-colors group">
					View All Projects{" "}
					<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
						arrow_forward
					</span>
				</BeforeEffectButton>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(320px,auto)]">
				<FeaturedCard project={typedProjects[0]} />
				<ImageHeaderCard project={typedProjects[1]} />
				<ImageHeaderCard project={typedProjects[2]} />
				<SplitCard project={typedProjects[3]} />
			</div>
		</section>
	);
};

export default Works;
