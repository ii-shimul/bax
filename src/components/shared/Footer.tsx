"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LiftButton } from "../ui/lift-button";
import Socials from "./Socials";

const Footer = () => {
	const year = new Date().getFullYear();
	const form = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<string | null>(null);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.current) return;
		setLoading(true);
		setStatus(null);

		emailjs
			.sendForm("portfolio", "portfolio-template", form.current, {
				publicKey: "2R3alK2GIRs9GRCJF",
			})
			.then(() => {
				setLoading(false);
				setStatus("Message sent successfully!");
				form.current?.reset();
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setStatus("Failed to send message. Please try again.");
			});
	};

	return (
		<footer
			className="mt-auto border-t border-gray-200 dark:border-border-dark bg-background-light/50 dark:bg-[#050505] py-6 md:pt-24 md:pb-10"
			id="contact"
		>
			<div className="px-4 md:px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
				<div className="flex flex-col gap-4">
					<h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 dark:text-white font-display">
						Let&apos;s work <br />
						<span className="text-primary">together.</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-sm text-lg">
						Have a project in mind? I&apos;m currently available for freelance
						work and open to new opportunities.
					</p>
					<Socials />
				</div>
				<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-4">
						<input
							name="user_name"
							className="w-full h-14 bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-lg px-6 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
							placeholder="Name"
							type="text"
							required
						/>
						<input
							name="user_email"
							className="w-full h-14 bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-lg px-6 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
							placeholder="Email"
							type="email"
							required
						/>
					</div>
					<textarea
						name="message"
						className="w-full bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
						placeholder="Tell me about your project..."
						rows={4}
						required
					/>
					{status && (
						<p
							className={`text-sm ${
								status.includes("success") ? "text-green-500" : "text-red-500"
							}`}
						>
							{status}
						</p>
					)}
					<LiftButton
						className="mt-2 h-12 w-full md:w-auto self-start px-6 rounded-lg text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
						type="submit"
						disabled={loading}
					>
						{loading ? (
							<span className="flex items-center gap-2">
								<span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
								Sending...
							</span>
						) : (
							"Send Message"
						)}
					</LiftButton>
				</form>
			</div>
			<div className="px-4 md:px-10 max-w-6xl mx-auto mt-5 md:mt-20 pt-8 border-t border-gray-200 dark:border-border-dark flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600">
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
