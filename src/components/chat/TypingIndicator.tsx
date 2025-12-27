"use client";

import { RiRobot2Line } from "react-icons/ri";

export function TypingIndicator() {
	return (
		<div className="flex items-end justify-start">
			<div className="shrink-0 w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center mr-2">
				<RiRobot2Line className="text-primary text-sm" />
			</div>
			<div className="bg-neutral-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
				<span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
				<span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
				<span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></span>
			</div>
		</div>
	);
}
