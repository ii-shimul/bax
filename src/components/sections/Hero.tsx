"use client";
import me from "../../../public/me.png";
import asciiMe from "../../../public/ascii-me.png";
import { CometCard } from "@/components/ui/comet-card";
import ScrambledText from "../ui/scramble-text";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BeforeEffectButton } from "../ui/before-effect-button";
import { LiftButton } from "../ui/lift-button";
import { useEffect, useState } from "react";
import { Highlight } from "../ui/hero-highlight";
import Socials from "../shared/Socials";
import { ImageSwap } from "../ui/image-swap";
import { Lens } from "../ui/lens";
import { BackgroundBeams } from "../ui/bg-beams";
import { motion, useScroll, useTransform } from "motion/react";
import {
	staggerContainer,
	fadeUp,
	blurFadeUp,
	scaleIn,
} from "@/lib/animations";

type GitHubPushEvent = {
	type: string;
	repo: { name: string };
	created_at: string;
};

const Hero = () => {
	const [latestCommit, setLatestCommit] = useState<{
		repoName: string | undefined;
		message: string;
	} | null>(null);
	const [hovering, setHovering] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 1024);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		let repoName: string | undefined;
		fetch("https://api.github.com/users/ii-shimul/events/public")
			.then((res) => res.json())
			.then((events: GitHubPushEvent[]) => {
				repoName = events.find((e) => e.type === "PushEvent")?.repo.name;
				if (!repoName) return;
				return fetch(
					`https://api.github.com/repos/${repoName}/commits?per_page=1`,
				);
			})
			.then((res) => res?.json())
			.then((data) => {
				if (data?.[0]?.commit?.message) {
					setLatestCommit({
						repoName: repoName,
						message: data[0].commit.message,
					});
				}
			})
			.catch(console.error);
	}, []);
	const { scrollYProgress } = useScroll();
	const beamsY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

	return (
		<section className="relative flex items-center pt-5 pb-5 md:pt-10 md:pb-16 min-h-[90vh] overflow-hidden">
			<motion.div
				className="max-w-6xl mx-auto w-full px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 items-center relative z-10"
				variants={staggerContainer(0.12, 0.1)}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="flex flex-col text-center lg:text-left order-2 lg:order-1"
					variants={staggerContainer(0.1)}
				>
					<motion.div
						className="flex flex-wrap mb-5 items-center gap-3 justify-center lg:justify-start"
						variants={fadeUp}
					>
						<div className="inline-flex max-sm:hidden items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark backdrop-blur-sm">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
							</span>
							<span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-widest">
								Available for hire
							</span>
						</div>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark backdrop-blur-sm">
							<span className="text-4px text-primary dark:text-primary-dark">
								<FaLocationCrosshairs />
							</span>
							<span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-widest">
								Sylhet, Bangladesh
							</span>
						</div>
					</motion.div>
					<motion.h1
						className=" font-black mb-2 leading-tight tracking-tighter cyber-glow-text"
						variants={staggerContainer(0.12)}
					>
						<motion.span
							className="block text-xl md:text-2xl xl:text-3xl tracking-tight font-medium text-gray-600 dark:text-gray-400 mb-2"
							variants={blurFadeUp}
						>
							Hey there, I&apos;m
						</motion.span>
						<motion.span
							className="block text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white"
							variants={blurFadeUp}
						>
							Injamamul Islam
						</motion.span>
						<motion.span
							className="block text-[64px] md:text-7xl xl:text-[100px] text-transparent bg-clip-text bg-linear-to-r from-primary to-red-400 mt-1"
							variants={blurFadeUp}
						>
							SHIMUL
							<span className="inline-block w-7 h-2 lg:w-10 xl:w-12 xl:h-3.5 md:h-2.5 lg:h-3 ml-1 bg-red-400 animate-caret-blink rounded-full translate-y-0.5  align-baseline"></span>
						</motion.span>
					</motion.h1>
					<motion.div variants={fadeUp}>
						<ScrambledText className="my-2 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
							A{" "}
							<Highlight className="font-bold text-2xl md:text-3xl xl:text-4xl">
								Full Stack Developer
							</Highlight>{" "}
							who loves turning ideas into clean, functional websites. I care
							about the details and enjoy building things that actually work
							well for people.
						</ScrambledText>
					</motion.div>
					<motion.div
						className="flex flex-wrap gap-4 justify-center lg:justify-start py-3"
						variants={staggerContainer(0.1)}
					>
						<motion.a href="#work" variants={fadeUp}>
							<LiftButton className=" h-12 px-8 flex items-center justify-center rounded-md bg-primary text-white font-bold text-base ">
								My Projects
							</LiftButton>
						</motion.a>
						<motion.a
							href="https://drive.google.com/file/d/1dk8RWrHrERC_i12qk3q1Edy7iX9_x_9L/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							variants={fadeUp}
						>
							<BeforeEffectButton className="h-12 px-8 flex items-center justify-center rounded-md border border-primary text-gray-900 dark:text-white font-bold text-base hover:bg-primary/10 cursor-pointer">
								<span className="material-symbols-outlined mr-2 text-xl">
									download
								</span>
								Resume
							</BeforeEffectButton>
						</motion.a>
					</motion.div>
					<motion.div variants={fadeUp}>
						<Socials />
					</motion.div>
				</motion.div>
				<motion.div
					className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
					variants={scaleIn}
				>
					<CometCard className="w-full max-w-115 lg:max-w-110">
						{isMobile ?
							<div className="relative w-full aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-border-dark group">
								<div className="absolute inset-0 z-10"></div>
								<ImageSwap
									src={me}
									hoverSrc={asciiMe}
									alt="Picture of Injamamul Islam Shimul"
								/>
								<div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-black/70 backdrop-blur-md border border-gray-200 dark:border-border-dark max-sm:p-2.5 p-4 rounded-xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 shrink-0 rounded-full bg-gray-100 dark:bg-card-dark flex items-center justify-center border border-gray-200 dark:border-border-dark text-primary">
											<span className="material-symbols-outlined">code</span>
										</div>
										<div>
											<p className="max-sm:text-xs text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
												Latest commit{" "}
												{latestCommit ? `in ${latestCommit.repoName}` : ""}
											</p>
											<p className="max-sm:text-[10px] text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
												{latestCommit?.message || "Loading..."}
											</p>
										</div>
									</div>
								</div>
							</div>
						:	<Lens hovering={hovering} setHovering={setHovering}>
								<div className="relative w-full aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-border-dark group">
									<div className="absolute inset-0 z-10"></div>
									<ImageSwap
										src={me}
										hoverSrc={asciiMe}
										alt="Picture of Injamamul Islam Shimul"
										hovering={hovering}
									/>
									<div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-black/70 backdrop-blur-md border border-gray-200 dark:border-border-dark max-sm:p-2.5 p-4 rounded-xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
										<div className="flex items-center gap-3">
											<div className="h-10 w-10 shrink-0 rounded-full bg-gray-100 dark:bg-card-dark flex items-center justify-center border border-gray-200 dark:border-border-dark text-primary">
												<span className="material-symbols-outlined">code</span>
											</div>
											<div>
												<p className="max-sm:text-xs text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
													Latest commit{" "}
													{latestCommit ? `in ${latestCommit.repoName}` : ""}
												</p>
												<p className="max-sm:text-[10px] text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
													{latestCommit?.message || "Loading..."}
												</p>
											</div>
										</div>
									</div>
								</div>
							</Lens>
						}
					</CometCard>
				</motion.div>
			</motion.div>
			<motion.div
				className="absolute max-lg:bottom-4 bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-400 dark:text-gray-500"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.4, duration: 0.6 }}
			>
				<span className="material-symbols-outlined text-3xl">
					keyboard_arrow_down
				</span>
			</motion.div>
			{/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#a0a0a040_1px,transparent_1px),linear-gradient(to_bottom,#a0a0a040_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[35px_34px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
			<motion.div style={{ y: beamsY }}>
				<BackgroundBeams />
			</motion.div>
		</section>
	);
};

export default Hero;
