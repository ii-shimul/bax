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
        <div className="shrink-0 w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center mr-2">
          <RiRobot2Line className="text-primary text-sm" />
        </div>
      )}
			<div
				className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
					isUser
						? "bg-primary text-white rounded-br-none"
						: "bg-neutral-800 text-neutral-200 rounded-bl-none"
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
