"use client";
import me from "../../../public/me.jpeg";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
import ScrambledText from "../ui/scramble-text";
import {
	FaLocationCrosshairs,
	FaFacebook,
	FaLinkedin,
	FaGithub,
	FaWhatsapp,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BeforeEffectButton } from "../ui/before-effect-button";
import { SocialButton } from "../ui/social-button";
import { LiftButton } from "../ui/lift-button";
import { useEffect, useState } from "react";

type GitHubPushEvent = {
	type: string;
	repo: { name: string };
	created_at: string;
};

const Hero = () => {
	const [latestCommit, setLatestCommit] = useState<string | null>(null);

	useEffect(() => {
		fetch("https://api.github.com/users/ii-shimul/events/public")
			.then((res) => res.json())
			.then((events: GitHubPushEvent[]) => {
				const repoName = events.find((e) => e.type === "PushEvent")?.repo.name;
				if (!repoName) return;
				return fetch(
					`https://api.github.com/repos/${repoName}/commits?per_page=1`
				);
			})
			.then((res) => res?.json())
			.then((data) => {
				if (data?.[0]?.commit?.message) {
					setLatestCommit(data[0].commit.message);
				}
			})
			.catch(console.error);
	}, []);
	return (
		<section className="relative flex items-center pt-10 pb-16 min-h-[90vh] overflow-hidden">
			<div className="max-w-6xl mx-auto w-full px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
				<div className="flex flex-col text-center lg:text-left order-2 lg:order-1">
					<div className="flex flex-wrap mb-5 items-center gap-3 justify-center lg:justify-start">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark backdrop-blur-sm">
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
					</div>
					<h1 className="text-3xl md:text-4xl xl:text-6xl font-black mb-2 leading-tight tracking-tighter cyber-glow-text">
						<span className="block text-xl md:text-2xl xl:text-3xl tracking-tight font-medium text-gray-600 dark:text-gray-400 mb-2">
							Hey there, I&apos;m
						</span>
						<span className="block text-gray-900 dark:text-white">
							Injamamul Islam
						</span>
						<span className="block text-6xl md:text-7xl xl:text-9xl text-transparent bg-clip-text bg-linear-to-r from-primary to-red-400 mt-1">
							Shimul{" "}
							<span className="tracking-[-0.4em] animate-blink text-red-500 bg-none">
								.........
							</span>
						</span>
					</h1>
					<ScrambledText className="mb-5 text-gray-700 dark:text-gray-300">
						A{" "}
						<span className="font-bold text-2xl md:text-3xl xl:text-4xl">
							Full Stack Developer
						</span>{" "}
						crafting accessible, pixel-perfect web experiences. I blend modern
						tech with cyber-minimalist aesthetics to build the future of the
						web.
					</ScrambledText>
					<div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
						<a href="#contact">
							<LiftButton className="h-12 px-8 flex items-center justify-center rounded-md bg-primary text-white font-bold text-base ">
								Start a Project
							</LiftButton>
						</a>
						<a
							href="https://drive.google.com/file/d/1dk8RWrHrERC_i12qk3q1Edy7iX9_x_9L/view?usp=sharing"
							target="blank"
						>
							<BeforeEffectButton className="h-12 px-8 flex items-center justify-center rounded-md border border-primary text-gray-900 dark:text-white font-bold text-base hover:bg-primary/10 cursor-pointer">
								<span className="material-symbols-outlined mr-2 text-xl">
									download
								</span>
								Resume
							</BeforeEffectButton>
						</a>
					</div>
					<div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">
						<SocialButton
							icon={<FaGithub />}
							label="GitHub"
							hoverBgColor="rgb(36, 41, 47)"
							href="https://github.com/ii-shimul"
						/>
						<SocialButton
							icon={<FaLinkedin />}
							label="LinkedIn"
							hoverBgColor="rgb(0, 119, 181)"
							href="https://linkedin.com/in/ii-shimul"
						/>
						<SocialButton
							icon={<SiGmail />}
							label="Email"
							hoverBgColor="rgb(234, 67, 53)"
							href="mailto:islamshimul27@email.com"
						/>
						<SocialButton
							icon={<FaWhatsapp />}
							label="WhatsApp"
							hoverBgColor="rgb(37, 211, 102)"
							href="https://wa.me/8801756651557"
						/>
						<SocialButton
							icon={<FaFacebook />}
							label="Facebook"
							hoverBgColor="rgb(24, 119, 242)"
							href="https://facebook.com/zahannami"
						/>
					</div>
				</div>
				<div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
					<CometCard className="w-full max-w-125">
						<div className="relative w-full aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-border-dark group">
							<div className="absolute inset-0 z-10"></div>
							<Image
								width={600}
								height={750}
								alt="Picture of the developer."
								className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
								src={me}
							/>
							<div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-black/70 backdrop-blur-md border border-gray-200 dark:border-border-dark p-4 rounded-xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
								<div className="flex items-center gap-3">
									<div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-card-dark flex items-center justify-center border border-gray-200 dark:border-border-dark text-primary">
										<span className="material-symbols-outlined">code</span>
									</div>
									<div>
										<p className="text-sm font-bold text-gray-900 dark:text-white">
											Latest Commit
										</p>
										<p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
											{latestCommit || "Loading..."}
										</p>
									</div>
								</div>
							</div>
						</div>
					</CometCard>
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-400 dark:text-gray-500">
				<span className="material-symbols-outlined text-3xl">
					keyboard_arrow_down
				</span>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e52e_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e52e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[35px_34px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
		</section>
	);
};

export default Hero;
