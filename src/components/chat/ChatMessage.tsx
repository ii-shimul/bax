"use client";

import type { UIMessage } from "ai";
import { RiRobot2Line } from "react-icons/ri";

interface ChatMessageProps {
	message: UIMessage;
}

export function ChatMessage({ message }: ChatMessageProps) {
	const isUser = message.role === "user";

	return (
		<div
			className={`flex items-end ${isUser ? "justify-end" : "justify-start"}`}
		>
			{!isUser && (
				<div className="shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mr-2 border border-gray-200 dark:border-neutral-700">
					<RiRobot2Line className="text-primary text-sm" />
				</div>
			)}
			<div
				className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
					isUser
						? "bg-primary text-white rounded-br-none"
						: "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-neutral-200 border border-gray-200 dark:border-neutral-700 rounded-bl-none"
				}`}
			>
				{message.parts?.map((part, i) =>
					part.type === "text" ? (
						<span key={i} className="whitespace-pre-wrap">
							{part.text}
						</span>
					) : null
				)}
			</div>
		</div>
	);
}
