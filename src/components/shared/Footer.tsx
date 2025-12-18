import { LiftButton } from "../ui/lift-button";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer
			className="mt-auto border-t border-border-dark bg-[#050505] pt-24 pb-10"
			id="contact"
		>
			<div className="px-4 md:px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
				<div className="flex flex-col gap-6">
					<h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white font-display">
						Let&apos;s work <br />
						<span className="text-primary">together.</span>
					</h2>
					<p className="text-gray-400 max-w-sm text-lg">
						Have a project in mind? I&apos;m currently available for freelance
						work and open to new opportunities.
					</p>
					<div className="flex gap-4 mt-8">
						<a
							className="h-12 w-12 rounded-full border border-border-dark bg-card-dark flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
							href="#"
						>
							<span className="font-bold text-sm">in</span>
						</a>
						<a
							className="h-12 w-12 rounded-full border border-border-dark bg-card-dark flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
							href="#"
						>
							<span className="material-symbols-outlined text-xl">code</span>
						</a>
						<a
							className="h-12 w-12 rounded-full border border-border-dark bg-card-dark flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
							href="#"
						>
							<span className="material-symbols-outlined text-xl">mail</span>
						</a>
					</div>
				</div>
				<form className="flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-4">
						<input
							className="w-full h-14 bg-card-dark border border-border-dark rounded-lg px-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
							placeholder="Name"
							type="text"
						/>
						<input
							className="w-full h-14 bg-card-dark border border-border-dark rounded-lg px-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
							placeholder="Email"
							type="email"
						/>
					</div>
					<textarea
						className="w-full bg-card-dark border border-border-dark rounded-xl p-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600 resize-none"
						placeholder="Tell me about your project..."
						rows={4}
						defaultValue={""}
					/>
					<LiftButton
						className="mt-2 h-12 w-full md:w-auto self-start px-6 rounded-lg text-white font-bold text-lg"
						type="button"
					>
						Send Message
					</LiftButton>
				</form>
			</div>
			<div className="px-4 md:px-10 max-w-6xl mx-auto mt-20 pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
				<p>© {year} Bax. All rights reserved.</p>
				<div className="flex gap-6 mt-4 md:mt-0">
					<a className="hover:text-primary transition-colors" href="#">
						Privacy Policy
					</a>
					<a className="hover:text-primary transition-colors" href="#">
						Terms of Service
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
