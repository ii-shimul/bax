"use client";

import Image from "next/image";
import { LiftButton } from "../ui/lift-button";
import { Tooltip } from "../ui/tooltip-card";
import logo from "../../app/favicon.ico";
import logoRed from "../../../public/logo-red.png";
import { AnimatedThemeToggler } from "../ui/theme-toggler";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-white/90 dark:bg-background-dark/80 backdrop-blur-md">
			<div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-6xl mx-auto w-full">
				<Tooltip content="Bax: A codename extracted from Bombax ceiba, the scientific identity of the Shimul tree.">
					<div className="flex justify-center items-center gap-2 group cursor-pointer">
						<div className="relative w-6.25 h-6.25 perspective-[1000px]">
							<div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
								<div className="absolute w-full h-full backface-hidden">
									<Image
										src={logo}
										height={25}
										width={25}
										alt="developer logo"
										className="block"
									/>
								</div>
								<div className="absolute w-full h-full backface-hidden transform-[rotateY(180deg)]">
									<Image
										src={logoRed}
										height={25}
										width={25}
										alt="developer logo hover"
										className="block"
									/>
								</div>
							</div>
						</div>
						<h1 className="text-xl font-extrabold tracking-tighter uppercase text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors font-display leading-none translate-y-0.5">
							Bax
						</h1>
					</div>
				</Tooltip>
				<div className="flex items-center gap-4">
					<AnimatedThemeToggler className="border-2 cursor-pointer bg-primary/15 rounded-full border-primary/60 p-2.5" />
					<LiftButton
						className="hidden sm:flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300"
						href="#contact"
					>
						Contact Me
					</LiftButton>
					<button className="md:hidden text-gray-900 dark:text-white hover:text-primary transition-colors">
						<span className="material-symbols-outlined">menu</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
