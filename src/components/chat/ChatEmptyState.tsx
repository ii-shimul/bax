"use client";

import { RiRobot2Line } from "react-icons/ri";

const suggestedQuestions = [
	"Tell me about Shimul's experience",
	"What is Shimul's current role?",
	"How can I contact Shimul?",
];

interface ChatEmptyStateProps {
	onSuggestionClick: (question: string) => void;
}

export function ChatEmptyState({ onSuggestionClick }: ChatEmptyStateProps) {
	return (
		<div className="h-full flex flex-col items-center justify-center text-center px-4">
			<div className="w-14 h-14 bg-gray-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-4">
				<RiRobot2Line className="text-2xl text-primary" />
			</div>
			<h3 className="text-gray-900 dark:text-white font-semibold mb-2">
				Send a message to start the chat!
			</h3>
			<p className="text-gray-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
				You can ask the bot anything about me and it will help to find the
				relevant information!
			</p>
			<p className="text-gray-500 dark:text-neutral-400 text-sm mb-3">
				Try asking:
			</p>
			<div className="flex flex-col gap-2 w-full">
				{suggestedQuestions.map((question, index) => (
					<button
						key={index}
						onClick={() => onSuggestionClick(question)}
						className="w-full text-left px-4 py-3 bg-gray-100 dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-neutral-800 border border-gray-200 dark:border-neutral-800 rounded-xl text-sm text-gray-900 dark:text-neutral-200 transition-colors"
					>
						{question}
					</button>
				))}
			</div>
		</div>
	);
}
