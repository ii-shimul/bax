import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Works from "@/components/sections/Works";

export default function Home() {
	return (
		<>
			<Hero />
			<TechStack />
			<Works />
			<Blogs />
		</>
	);
}
