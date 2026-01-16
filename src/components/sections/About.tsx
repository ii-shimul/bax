import { FC } from "react";

export const About: FC = () => {
	return (
		<section
			className="relative w-full py-24 px-4 md:px-10 max-w-6xl mx-auto overflow-hidden"
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
				<div className="mb-10 text-center">
					<div className="inline-block mb-4">
						<span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase">
							Get to Know Me
						</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 cyber-glow-text bg-linear-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
						Data Archives
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Professional background and expertise in modern web development
					</p>
				</div>
				<div className="tabs-nav flex gap-8 border-b border-border-dark mb-12 overflow-x-auto no-scrollbar justify-center">
					<label
						className="label-personal cursor-pointer pb-4 px-2 text-lg font-bold text-gray-500 border-b-2 border-transparent hover:text-white transition-all whitespace-nowrap relative group"
						htmlFor="tab-personal"
					>
						<span className="relative z-10">Overview</span>
						<span className="absolute inset-0 bg-primary/5 rounded-t-lg scale-0 group-hover:scale-100 transition-transform"></span>
					</label>
					<label
						className="label-history cursor-pointer pb-4 px-2 text-lg font-bold text-gray-500 border-b-2 border-transparent hover:text-white transition-all whitespace-nowrap relative group"
						htmlFor="tab-history"
					>
						<span className="relative z-10">Experience</span>
						<span className="absolute inset-0 bg-primary/5 rounded-t-lg scale-0 group-hover:scale-100 transition-transform"></span>
					</label>
				</div>

				{/* Overview Tab */}
				<div className="tab-content-personal hidden">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
						{/* Bio Section - 8 columns */}
						<div className="md:col-span-8 bg-linear-to-br from-card-dark to-card-dark/50 border border-border-dark p-8 rounded-2xl cyber-glow-box relative overflow-hidden group min-h-[300px]">
							<div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
							<div className="relative z-10">
								<h3 className="text-2xl font-bold text-white font-display mb-3">
									Professional Summary
								</h3>
								<p className="text-gray-300 leading-relaxed text-base">
									My journey began with exploring technology fundamentals and
									has evolved into creating scalable, user-centric solutions. I
									specialize in full stack development with a strong focus on
									performance optimization, accessibility standards, and
									creating intuitive user experiences. I&apos;m committed to
									writing clean, maintainable code and staying current with
									industry best practices.
								</p>
							</div>
						</div>

						{/* Education Section - 4 columns */}
						<div className="md:col-span-4 bg-linear-to-br from-card-dark to-card-dark/50 border border-border-dark p-8 rounded-2xl cyber-glow-box flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
							<div className="relative z-10">
								<h3 className="text-xl font-bold text-white font-display mb-3">
									Education
								</h3>
								<div className="space-y-2">
									<p className="text-xl font-bold text-white">
										Bachelor&apos;s in Computer Science
									</p>
									<p className="text-primary font-mono text-base">
										Leading University, Sylhet
									</p>
									<p className="text-gray-400 text-sm mt-4">Expected in 2027</p>
								</div>
							</div>
						</div>

						{/* Soft Skills Section - 12 columns */}
						<div className="md:col-span-12 bg-linear-to-br from-card-dark to-card-dark/50 border border-border-dark p-8 rounded-2xl cyber-glow-box relative overflow-hidden group">
							<div className="absolute top-0 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
							<div className="relative z-10">
								<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
									<h3 className="text-2xl font-bold text-white font-display whitespace-nowrap">
										Core Competencies
									</h3>
									<div className="flex flex-wrap gap-4 w-full">
										<div className="p-4 bg-background-dark/50 backdrop-blur-sm rounded-xl border border-border-dark text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
											<p className="text-sm font-bold text-white">
												Problem Solving
											</p>
										</div>
										<div className="p-4 bg-background-dark/50 backdrop-blur-sm rounded-xl border border-border-dark text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
											<p className="text-sm font-bold text-white">
												Communication
											</p>
										</div>
										<div className="p-4 bg-background-dark/50 backdrop-blur-sm rounded-xl border border-border-dark text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
											<p className="text-sm font-bold text-white">
												Collaboration
											</p>
										</div>
										<div className="p-4 bg-background-dark/50 backdrop-blur-sm rounded-xl border border-border-dark text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
											<p className="text-sm font-bold text-white">
												Time Management
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Experience Tab */}
				<div className="tab-content-history hidden">
					<div className="bg-linear-to-br from-card-dark to-card-dark/50 border border-border-dark p-8 rounded-2xl cyber-glow-box relative overflow-hidden group">
						<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-white font-display mb-6">
								Work Experience
							</h3>

							<div className="p-6 bg-primary/5 border border-primary/20 rounded-xl mb-4">
								<h4 className="text-xl font-bold text-white font-display mb-2">
									404: Experience Not Found
								</h4>
								<p className="text-gray-300 leading-relaxed mb-4">
									Looks like my professional experience is still loading... or
									maybe it&apos;s stuck in an infinite loop. 🤔
								</p>
								<div className="bg-background-dark/50 p-4 rounded-lg border border-border-dark font-mono text-sm text-gray-400">
									<span className="text-primary">Error:</span> Cannot read
									property &apos;experience&apos; of undefined
									<br />
									<span className="text-gray-500">
										at Career.getExperience(life.js:23)
									</span>
								</div>
							</div>
							<div className="p-6 bg-green-500/5 border border-green-500/20 rounded-xl">
								<h4 className="text-lg font-bold text-green-400 mb-2">
									Suggested Fix
								</h4>
								<div className="bg-background-dark/50 p-4 rounded-lg border border-border-dark font-mono text-sm text-gray-400 mb-3">
									<span className="text-green-400">+</span>{" "}
									experience.push(yourCompany);
									<br />
									<span className="text-gray-500">
										{`// Your company could be the first entry here!`}
									</span>
								</div>
								<p className="text-gray-400 text-sm leading-relaxed">
									Want to help me fix this error? Let&apos;s connect! 🚀
								</p>
							</div>

							<div className="mt-8 p-4 bg-linear-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
								<p className="text-gray-300 text-sm italic">
									&quot;Every expert was once a beginner. Every master was once
									a disaster.&quot; - T. Harv Eker
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
