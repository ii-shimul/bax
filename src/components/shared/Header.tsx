import Image from "next/image";
import { LiftButton } from "../ui/lift-button";
import { Tooltip } from "../ui/tooltip-card";
import me from "../../app/favicon.ico";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-light/90 dark:bg-background-dark/80 backdrop-blur-md">
			<div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
				<Tooltip content="Bax: A codename extracted from Bombax ceiba, the scientific identity of the Shimul tree.">
					<div className="flex justify-center items-center gap-2 group cursor-pointer">
						<Image
							src={me}
							height={20}
							width={20}
							alt="developer logo"
							className="block"
						/>
						<h2 className="text-xl font-bold tracking-tighter uppercase group-hover:text-primary transition-colors font-display leading-none">
							Bax
						</h2>
					</div>
				</Tooltip>
				<nav className="hidden md:flex items-center gap-8">
					<a
						className="text-sm font-medium hover:text-primary transition-colors"
						href="#about"
					>
						About
					</a>
					<a
						className="text-sm font-medium hover:text-primary transition-colors"
						href="#work"
					>
						Work
					</a>
					<a
						className="text-sm font-medium hover:text-primary transition-colors"
						href="#blog"
					>
						Blog
					</a>
				</nav>
				<div className="flex items-center gap-4">
					<LiftButton
						className="hidden sm:flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300"
						href="#contact"
					>
						Contact Me
					</LiftButton>
					<button className="md:hidden text-white hover:text-primary transition-colors">
						<span className="material-symbols-outlined">menu</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
