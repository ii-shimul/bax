import Image from "next/image";

const Hero = () => {
	return (
		<section className="relative flex items-center pt-10 pb-16 px-4 md:px-10 min-h-[90vh] overflow-hidden">
			<div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-grid-pattern" />
			<div className="absolute top-1/4 right-1/4 w-125 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
			<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
				<div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
					<div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full border border-border-dark bg-card-dark backdrop-blur-sm">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
						</span>
						<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
							Available for hire
						</span>
					</div>
					<h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter cyber-glow-text">
						Digital <br />{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
							Architect.
						</span>
					</h1>
					<p className="max-w-xl text-lg text-gray-400 font-light leading-relaxed mx-auto lg:mx-0">
						I&apos;m Shimul, a creative developer crafting accessible,
						pixel-perfect web experiences. I blend modern tech with
						cyber-minimalist aesthetics to build the future of the web.
					</p>
					<div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
						<a
							className="h-12 px-8 flex items-center justify-center rounded-md bg-primary text-white font-bold text-base hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
							href="#contact"
						>
							Start a Project
						</a>
						<a
							className="h-12 px-8 flex items-center justify-center rounded-md border border-primary text-white font-bold text-base hover:bg-primary/10 transition-all duration-300 group"
							href="#"
						>
							<span className="material-symbols-outlined mr-2 text-xl group-hover:animate-bounce">
								download
							</span>
							Download Resume
						</a>
					</div>
				</div>
				<div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
					<div className="relative w-full max-w-125 aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden border border-border-dark group">
						<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
						<Image
							width={600}
							height={750}
							alt="Picture of the developer."
							className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 grayscale group-hover:grayscale-0"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2PDzOHwIAdhLzhNNL-NDDojuehYu-jnMMbjr3lSxTz5jFASBAqJbNorsFGXlp8NFuJV53nye3DvR_Lmf76zq0VE3hSLvz4dbxtaDVFzwAffD43v4YfOfoAVc5uwjsBrMdDX7nzGkrUD7G6oTiQb-9o96VvHFQDkqZfKUdarNfBNsSw9OzqS8EDXPYcB50udQwA03VfEJHpN17SX1x4vA_GN-NqUtBkPViT-ii_R23q7CPCObM1w5SIAHx77Q7FG4VJiUemfZww"
						/>
						<div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md border border-border-dark p-4 rounded-xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 rounded-full bg-card-dark flex items-center justify-center border border-border-dark text-primary">
									<span className="material-symbols-outlined">code</span>
								</div>
								<div>
									<p className="text-sm font-bold text-white">Latest Commit</p>
									<p className="text-xs text-gray-400">
										Refactored core architecture
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-500">
				<span className="material-symbols-outlined text-3xl">
					keyboard_arrow_down
				</span>
			</div>
		</section>
	);
};

export default Hero;
