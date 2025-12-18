import React from "react";

const Works = () => {
	return (
		<section className="py-24 px-4 md:px-10 max-w-6xl mx-auto w-full" id="work">
			<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
				<div>
					<h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 cyber-glow-text">
						Selected Works
					</h2>
					<p className="text-gray-400">
						A curation of my recent digital products.
					</p>
				</div>
				<a
					className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group"
					href="#"
				>
					View All Projects{" "}
					<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
						arrow_forward
					</span>
				</a>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(320px,auto)]">
				<article className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-card-dark border border-border-dark cyber-glow-box transition-all duration-300">
					<div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
					<div
						className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
						data-alt="Abstract dark fluid wave pattern representing a modern fintech dashboard interface"
						style={{
							backgroundImage:
								'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB38w0en_Lqd25yumNkO5EiCGuCMGONF2ETO86Q4jTNR6w9pfXVdFTjZotXwfd2nHDLhbXgYnZnItsNPf3DllXHXBYnDDGce46FX2etvNw3Cl_WpuxEC10g2M36BHE4_R9g2ek9w1AXV7c6XdsXYcYa4kbf5bam8yNQmNRcNeYxVJx2ZUHVANFn_iu2Eddq9pGVtb9mZaECfOdLyg01AFVLL1VFvzgg4INoy0svUdktP1q7pZwAlZtrjL1D8iT1_7vTHtVC0kWKfw")',
						}}
					></div>
					<div className="absolute bottom-0 left-0 z-20 p-8 w-full">
						<div className="flex gap-2 mb-4">
							<span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-xs font-bold text-primary">
								Fintech
							</span>
							<span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
								React
							</span>
						</div>
						<h3 className="text-3xl font-bold text-white mb-2 font-display">
							Nova Banking Dashboard
						</h3>
						<div className="flex items-center justify-between">
							<p className="text-gray-300 line-clamp-2 max-w-md font-light">
								A comprehensive financial analytics platform with real-time data
								visualization and secure transaction management.
							</p>
							<a
								className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
								href="#"
							>
								<span className="material-symbols-outlined">arrow_outward</span>
							</a>
						</div>
					</div>
				</article>
				<article className="group relative overflow-hidden rounded-xl bg-card-dark border border-border-dark cyber-glow-box transition-all duration-300 p-8 flex flex-col justify-between">
					<div className="mb-6">
						<div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
							<span className="material-symbols-outlined text-3xl">
								shopping_cart
							</span>
						</div>
						<h3 className="text-2xl font-bold text-white mb-2 font-display">
							E-Comm API
						</h3>
						<p className="text-gray-400 text-sm leading-relaxed">
							Headless e-commerce solution built with Node.js and MongoDB. High
							performance and scalable architecture.
						</p>
					</div>
					<div className="flex flex-wrap gap-2 mt-auto">
						<span className="px-3 py-1 rounded-full bg-background-dark border border-border-dark text-xs text-gray-400">
							Node.js
						</span>
						<span className="px-3 py-1 rounded-full bg-background-dark border border-border-dark text-xs text-gray-400">
							MongoDB
						</span>
						<span className="px-3 py-1 rounded-full bg-background-dark border border-border-dark text-xs text-gray-400">
							Docker
						</span>
					</div>
					<div className="mt-6 pt-6 border-t border-border-dark flex justify-between items-center">
						<span className="text-xs font-bold text-gray-500 uppercase">
							Backend
						</span>
						<a
							className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
							href="#"
						>
							View Code{" "}
							<span className="material-symbols-outlined text-sm">code</span>
						</a>
					</div>
				</article>
				<article className="group relative overflow-hidden rounded-xl bg-card-dark border border-border-dark cyber-glow-box transition-all duration-300 flex flex-col">
					<div
						className="h-48 w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
						data-alt="Cyberpunk style neon city lights representing a security application"
						style={{
							backgroundImage:
								'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAI7vbX6V5Q7yCyQso0wRaZfecM6Ut_rH-g8gHUuN2bZOnOtZB0RsgD0nsnLo7nMg-Mnka9lJ-N34XOYTaDgZOJOMRpBrW22TB-mCS2OiTXig_VTLoSnJ9lvx3Mvfn4HgRZmo3hENKIy_W8MxMPdbFaNWfOFD-u5LAdIwz9uFHcFXBh1cXhF-4Z7J78Urvec2BHhu08G9t2SJ0yPRZdy75oyPi2K47dXabZLHshfdrUqJNpj24irJlk1Mp360X-EmjmZ-TYonc8XQ")',
						}}
					></div>
					<div className="p-6 flex-1 flex flex-col justify-between bg-card-dark">
						<div>
							<h3 className="text-xl font-bold text-white mb-2 font-display">
								CyberSec Audit Tool
							</h3>
							<p className="text-gray-400 text-sm">
								Automated vulnerability scanner for small businesses.
							</p>
						</div>
						<div className="flex justify-between items-end mt-6">
							<div className="flex -space-x-2">
								<div className="h-8 w-8 rounded-full border border-card-dark bg-gray-800 flex items-center justify-center text-[10px] text-white font-bold">
									TS
								</div>
								<div className="h-8 w-8 rounded-full border border-card-dark bg-gray-700 flex items-center justify-center text-[10px] text-white font-bold">
									PY
								</div>
							</div>
							<a
								className="h-10 w-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors text-gray-400"
								href="#"
							>
								<span className="material-symbols-outlined text-sm">
									arrow_forward
								</span>
							</a>
						</div>
					</div>
				</article>
				<article className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-card-dark border border-border-dark cyber-glow-box transition-all duration-300 flex flex-col md:flex-row">
					<div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative z-10">
						<div className="flex gap-2 mb-4">
							<span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary border border-primary/20">
								AI Integration
							</span>
						</div>
						<h3 className="text-2xl font-bold text-white mb-3 font-display">
							Prompt Engineer Portfolio
						</h3>
						<p className="text-gray-400 mb-6 font-light">
							A clean, minimalist platform for showcasing AI prompts and
							generated art. Features a custom masonry layout and dark mode
							toggle.
						</p>
						<a
							className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors w-fit"
							href="#"
						>
							Live Demo{" "}
							<span className="material-symbols-outlined text-sm">
								open_in_new
							</span>
						</a>
					</div>
					<div
						className="w-full md:w-1/2 min-h-50 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
						data-alt="Abstract blue and pink gradient waves representing AI generation"
						style={{
							backgroundImage:
								'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSsxOH2wUv4Jut6b3ijQHab0rAcPo9yRRiwm63YnJxgTKUcX_tnIoKZvXrWfbiwf0HcPcI49jCMyV4O6_QsVeYmXjs5zz1A6M94CwTcTLO1GEyXEb2YksFwG5D_lsYVioKG9GA13D5iwZ8oDynJe2Zd_NJdGYX3AVGqo4-1-wvXywGmJyBsJETq9_eypjdsitXqjYg6PxW2Zey54xyBPn-crOV-ZlPSx8mAC14fyrKmaAQ2P7A9Lb8yoVqgk5WtCMFvJGt_KJ2Ew")',
						}}
					>
						<div className="absolute inset-0 bg-linear-to-r from-card-dark to-transparent md:block hidden" />
						<div className="absolute inset-0 bg-linear-to-t from-card-dark to-transparent md:hidden block" />
					</div>
				</article>
			</div>
		</section>
	);
};

export default Works;
