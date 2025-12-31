"use client";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SocialButton } from "../ui/social-button";
import { useEffect, useState } from "react";

const Socials = () => {
	const [width, setWidth] = useState<number | undefined>();
	useEffect(() => {
		setWidth(document.documentElement.clientWidth);
	}, []);

	return (
		<div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
			{width && width > 700 ? (
				<SocialButton
					className="hidden md:block"
					icon={<FaFacebook />}
					label="Facebook"
					hoverBgColor="rgb(24, 119, 242)"
					href="https://facebook.com/zahannami"
				/>
			) : (
				""
			)}
		</div>
	);
};

export default Socials;
