"use client";
import { FC, useEffect, useRef, useState } from "react";
import DragPill from "../ui/draggable-pill";
import { motion } from "motion/react";
import {
	staggerContainer,
	fadeUp,
	blurFadeUp,
	scaleIn,
	viewportOnce,
} from "@/lib/animations";

const softSkills = [
	{
		skill: "Problem Solving",
		icon: "psychology",
	},
	{
		skill: "Creativity",
		icon: "lightbulb",
	},
	{
		skill: "Attention to Details",
		icon: "details",
	},
	{
		skill: "Adaptability",
		icon: "plug_connect",
	},
	{
		skill: "Communication",
		icon: "chat",
	},
	{
		skill: "Teamwork",
		icon: "group_work",
	},
];

export const About: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	return (
		<section
			className="relative w-full py-5 md:pb-16 md:pt-10 px-4 md:px-10 max-w-6xl mx-auto overflow-hidden"
			id="about"
		>
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "1s" }}
				></div>
			</div>

			<input
				defaultChecked
				className="hidden"
				id="tab-personal"
				name="about_tabs"
				type="radio"
			/>
			<input
				className="hidden"
				id="tab-history"
				name="about_tabs"
				type="radio"
			/>
			<div className="w-full relative z-10">
				<motion.div
					className="mb-6 text-center"
					variants={staggerContainer(0.12)}
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
				>
					<motion.div className="inline-block mb-4" variants={fadeUp}>
						<span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase">
							Get to Know Me
						</span>
					</motion.div>
					<motion.h2
						className="text-4xl md:text-6xl font-black tracking-tight mb-4 cyber-glow-text bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
						variants={blurFadeUp}
					>
						Data Archives
					</motion.h2>
					<motion.p
						className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
						variants={fadeUp}
					>
						Professional background and expertise in modern development
					</motion.p>
				</motion.div>
				<div className="tabs-nav flex gap-8 border-b border-gray-200 dark:border-border-dark mb-8 overflow-x-auto no-scrollbar justify-center">
					<label
						className="label-personal cursor-pointer pb-4 px-2 text-lg font-bold text-gray-500 border-b-2 border-transparent hover:text-gray-900 dark:hover:text-white transition-all whitespace-nowrap relative group"
						htmlFor="tab-personal"
					>
						<span className="relative z-10">Overview</span>
						<span className="absolute inset-0 bg-primary/5 rounded-t-lg scale-0 group-hover:scale-100 transition-transform"></span>
					</label>
					<label
						className="label-history cursor-pointer pb-4 px-2 text-lg font-bold text-gray-500 border-b-2 border-transparent hover:text-gray-900 dark:hover:text-white transition-all whitespace-nowrap relative group"
						htmlFor="tab-history"
					>
						<span className="relative z-10">Experience</span>
						<span className="absolute inset-0 bg-primary/5 rounded-t-lg scale-0 group-hover:scale-100 transition-transform"></span>
					</label>
				</div>

				<div className="tab-content-personal hidden">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-12 gap-5"
						variants={staggerContainer(0.15)}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
					>
						<motion.div
							className="lg:col-span-8 md:col-span-7 relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden cyber-glow-box transition-all duration-300"
							variants={fadeUp}
						>
							<h3 className="font-mono text-primary text-sm mb-4 tracking-widest border-b border-gray-200 dark:border-border-dark pb-2 inline-block">
								MY_ORIGIN
							</h3>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light text-sm md:text-base">
								<span className="text-primary font-bold mr-2">&gt;</span>
								My journey started with a screwdriver in hand, fixing broken
								electronics around the house just to see how they worked. That
								tactile curiosity naturally evolved into a fascination with the
								digital world. I wanted to know not just how devices were built,
								but how the software inside them lived. Today, I channel that
								same desire to deconstruct and rebuild into writing clean,
								efficient code, backed by a strong foundation in mathematics and
								logic.
							</p>
							<div className="mt-3 pt-3 md:pt-5 border-t border-gray-200 dark:border-border-dark/50 flex flex-wrap gap-3 lg:gap-6 text-xs font-mono text-gray-500">
								<span className="flex items-center gap-2 max-lg:hidden">
									<span className="material-symbols-outlined">wifi</span>{" "}
									[STATUS: ONLINE]
								</span>
								<span className="flex items-center gap-2">
									<span className="material-symbols-outlined max-sm:text-[4px]">
										location_on
									</span>{" "}
									[LOC: REMOTE_READY]
								</span>
								<span className="flex items-center gap-2">
									<span className="material-symbols-outlined max-sm:text-[4px]">
										bolt
									</span>{" "}
									[ENERGY: MAX]
								</span>
							</div>
						</motion.div>

						<motion.div
							className="lg:col-span-4 md:col-span-5 relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden cyber-glow-box transition-all duration-300 flex flex-col justify-center"
							variants={fadeUp}
						>
							<h3 className="font-mono text-primary text-sm mb-4 tracking-widest border-b border-gray-200 dark:border-border-dark pb-2 inline-block w-fit">
								ACADEMIC_STATUS
							</h3>
							<div className="space-y-4 relative z-10">
								<div className="group/item">
									<p className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-widest">
										Degree_Type
									</p>
									<p className="text-gray-900 dark:text-white font-bold text-lg font-display">
										Bachelor&apos;s in Computer Science
									</p>
								</div>
								<div className="group/item">
									<p className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-widest">
										Institution
									</p>
									<p className="text-gray-900 dark:text-white font-bold text-lg font-display">
										Leading University, Sylhet
									</p>
								</div>
								<div>
									<p className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-widest">
										Timeframe
									</p>
									<span className="font-mono text-xs bg-primary/5 inline-block px-2 py-1 rounded border border-primary/20">
										2023 — 2027
									</span>
								</div>
							</div>
							<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-gray-900 dark:text-white opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none hidden md:block">
								school
							</span>
						</motion.div>

						<motion.div
							ref={containerRef}
							className="md:col-span-12 relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden cyber-glow-box transition-all duration-300 min-h-70"
							variants={fadeUp}
						>
							<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
								<span className="text-[3rem] md:text-[8rem] font-black text-black dark:text-white dark:opacity-[0.05] opacity-[0.09] tracking-widest whitespace-nowrap">
									SOFT SKILLS
								</span>
							</div>
							{softSkills.map((skill, index) => {
								const mobilePositions = [
									{ top: "10%", left: "5%", rotate: -3 },
									{ top: "10%", left: "55%", rotate: 2 },
									{ top: "35%", left: "7%", rotate: 3 },
									{ top: "35%", left: "60%", rotate: -2 },
									{ top: "70%", left: "5%", rotate: -4 },
									{ top: "70%", left: "55%", rotate: 3 },
								];
								const desktopPositions = [
									{ top: "10%", left: "10%", rotate: -4 },
									{ top: "10%", left: "70%", rotate: 3 },
									{ top: "40%", left: "30%", rotate: -3 },
									{ top: "40%", left: "60%", rotate: 4 },
									{ top: "70%", left: "15%", rotate: -5 },
									{ top: "70%", left: "75%", rotate: 2 },
								];
								const positions = isMobile ? mobilePositions : desktopPositions;
								const pos = positions[index % positions.length];
								return (
									<DragPill
										key={skill.skill}
										text={skill.skill}
										icon={skill.icon}
										containerRef={containerRef}
										style={{
											top: pos.top,
											left: pos.left,
											rotate: `${pos.rotate}deg`,
										}}
									/>
								);
							})}
						</motion.div>
					</motion.div>
				</div>

				<div className="tab-content-history hidden">
					<motion.div
						className="relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden cyber-glow-box transition-all duration-300"
						variants={scaleIn}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
					>
						<h3 className="font-mono text-primary text-sm mb-6 tracking-widest border-b border-gray-200 dark:border-border-dark pb-2 inline-block">
							WORK_EXPERIENCE
						</h3>

						<div className="space-y-3.5 md:space-y-5">
							<div className="p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-primary text-2xl">
										error_outline
									</span>
									<h4 className="font-mono text-gray-900 dark:text-white md:text-lg">
										404: Experience Not Found
									</h4>
								</div>
								<div className="bg-gray-100 dark:bg-background-dark/50 p-4 rounded-lg border border-gray-200 dark:border-border-dark font-mono text-sm max-sm:text-xs text-gray-600 dark:text-gray-400">
									<span className="text-primary">Error:</span> Cannot read
									property &apos;experience&apos; of undefined
									<br />
									<span className="text-gray-500">
										at Career.getExperience(life.js:23)
									</span>
								</div>
							</div>

							<div className="p-4 md:p-6 bg-green-500/5 border border-green-500/20 rounded-lg hover:border-green-500/40 transition-colors">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-green-400 text-2xl">
										lightbulb
									</span>
									<h4 className="font-mono text-green-400 md:text-lg">
										SUGGESTED_FIX
									</h4>
								</div>
								<div className="bg-gray-100 dark:bg-background-dark/50 max-sm:text-xs p-4 rounded-lg border border-gray-200 dark:border-border-dark font-mono text-sm text-gray-600 dark:text-gray-400 mb-3">
									<span className="text-green-400">+</span>{" "}
									experience.push(yourCompany);
									<br />
									<span className="text-gray-500">
										{`// Your company could be the first entry here!`}
									</span>
								</div>
								<p className="text-gray-400 text-sm leading-relaxed font-light">
									<span className="text-green-400 font-bold mr-2">&gt;</span>
									Want to help me fix this error?{" "}
									<a href="#contact" className="hover:underline">
										Let&apos;s connect! 🚀
									</a>
								</p>
							</div>
						</div>

						<div className="mt-4 md:mt-6 p-4 bg-linear-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
							<p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm italic">
								&quot;Every expert was once a beginner. Every master was once a
								disaster.&quot; - T. Harv Eker
							</p>
						</div>

						<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-gray-900 dark:text-white opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none hidden md:block">
							work
						</span>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
