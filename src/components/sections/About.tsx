import { FC } from "react";

const softSkills = [
	{
		skill: "Problem Solving",
		icon: "psychology",
	},
	{
		skill: "Communication",
		icon: "chat",
	},
	{
		skill: "Teamwork",
		icon: "group_work",
	},
	{
		skill: "Attention to Details",
		icon: "details",
	},
];

export const About: FC = () => {
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
				<div className="mb-6 text-center">
					<div className="inline-block mb-4">
						<span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase">
							Get to Know Me
						</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 cyber-glow-text bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
						Data Archives
					</h2>
					<p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
						Professional background and expertise in modern development
					</p>
				</div>
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
					<div className="grid grid-cols-1 md:grid-cols-12 gap-5">
						<div className="md:col-span-8 relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
							<h3 className="font-mono text-primary text-sm mb-4 tracking-widest border-b border-gray-200 dark:border-border-dark pb-2 inline-block">
								MY_ORIGIN
							</h3>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light text-base">
								<span className="text-primary font-bold mr-2">&gt;</span>
								My journey began with exploring technology fundamentals and has
								evolved into creating scalable, user-centric solutions. I
								specialize in full stack development with a strong focus on
								performance optimization, accessibility standards, and creating
								intuitive user experiences. I&apos;m committed to writing clean,
								maintainable code and staying current with industry best
								practices.
							</p>
							<div className="mt-4 pt-6 border-t border-gray-200 dark:border-border-dark/50 flex flex-wrap gap-4 md:gap-6 text-xs font-mono text-gray-500">
								<span className="flex items-center gap-2">
									<span className="material-symbols-outlined text-sm">
										wifi
									</span>{" "}
									[STATUS: ONLINE]
								</span>
								<span className="flex items-center gap-2">
									<span className="material-symbols-outlined text-sm">
										location_on
									</span>{" "}
									[LOC: REMOTE_READY]
								</span>
								<span className="flex items-center gap-2">
									<span className="material-symbols-outlined text-sm">
										bolt
									</span>{" "}
									[ENERGY: MAX]
								</span>
							</div>
						</div>

						<div className="md:col-span-4 relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col justify-center">
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
						</div>

						<div className="md:col-span-12 relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
							<h3 className="font-mono text-primary text-sm mb-4 tracking-widest border-b border-gray-200 dark:border-border-dark pb-2 inline-block">
								SOFT_SKILLS
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								{softSkills.map((skill) => (
									<div
										key={skill.skill}
										className="flex justify-start items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-background-dark/50 border border-gray-200 dark:border-border-dark rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all group/item cursor-default"
									>
										<span className="material-symbols-outlined text-gray-400 group-hover/item:text-primary/60 transition-colors text-2xl">
											{skill.icon}
										</span>
										<div>
											<span className="font-bold text-gray-900 dark:text-white text-sm block">
												{skill.skill}
											</span>
											<span className="text-[10px] text-gray-500 font-mono"></span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="tab-content-history hidden">
					<div className="relative group bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-5 md:p-8 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
						<h3 className="font-mono text-primary text-sm mb-6 tracking-widest border-b border-gray-200 dark:border-border-dark pb-2 inline-block">
							WORK_EXPERIENCE
						</h3>

						<div className="space-y-6">
							<div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-primary text-2xl">
										error_outline
									</span>
									<h4 className="font-mono text-gray-900 dark:text-white text-lg">
										404: Experience Not Found
									</h4>
								</div>
								<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-light">
									<span className="text-primary font-bold mr-2">&gt;</span>
									Looks like my professional experience is still loading... or
									maybe it&apos;s stuck in an infinite loop. 🤔
								</p>
								<div className="bg-gray-100 dark:bg-background-dark/50 p-4 rounded-lg border border-gray-200 dark:border-border-dark font-mono text-sm text-gray-600 dark:text-gray-400">
									<span className="text-primary">Error:</span> Cannot read
									property &apos;experience&apos; of undefined
									<br />
									<span className="text-gray-500">
										at Career.getExperience(life.js:23)
									</span>
								</div>
							</div>

							<div className="p-6 bg-green-500/5 border border-green-500/20 rounded-lg">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-green-400 text-2xl">
										lightbulb
									</span>
									<h4 className="font-mono text-green-400 text-lg">
										SUGGESTED_FIX
									</h4>
								</div>
								<div className="bg-gray-100 dark:bg-background-dark/50 p-4 rounded-lg border border-gray-200 dark:border-border-dark font-mono text-sm text-gray-600 dark:text-gray-400 mb-3">
									<span className="text-green-400">+</span>{" "}
									experience.push(yourCompany);
									<br />
									<span className="text-gray-500">
										{`// Your company could be the first entry here!`}
									</span>
								</div>
								<p className="text-gray-400 text-sm leading-relaxed font-light">
									<span className="text-green-400 font-bold mr-2">&gt;</span>
									Want to help me fix this error? Let&apos;s connect! 🚀
								</p>
							</div>
						</div>

						<div className="mt-8 p-4 bg-linear-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
							<p className="text-gray-700 dark:text-gray-300 text-sm italic">
								&quot;Every expert was once a beginner. Every master was once a
								disaster.&quot; - T. Harv Eker
							</p>
						</div>

						<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-gray-900 dark:text-white opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none hidden md:block">
							work
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
