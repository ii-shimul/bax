"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import { ChatEmptyState } from "./ChatEmptyState";
import { TypingIndicator } from "./TypingIndicator";
import { BsChatDots } from "react-icons/bs";
import { IoChevronUp } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";

export default function Chatbot() {
	const { messages, status, sendMessage, error } = useChat({
		transport: new DefaultChatTransport({
			api: "/api/chat",
		}),
	});
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const isLoading = status === "streaming" || status === "submitted";
	const isReady = status === "ready" || status === "error";

	useEffect(() => {
		if (isOpen) {
			messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, isLoading, isOpen]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim() || !isReady) return;
		sendMessage({ text: input });
		setInput("");
	};

	const handleSuggestionClick = (question: string) => {
		if (!isReady) return;
		sendMessage({ text: question });
	};

	return (
		<div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
			<div
				className={`${
					isOpen ? "w-95" : "w-56 lg:w-95"
				} bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out`}
			>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="w-full px-5 py-4 cursor-pointer flex justify-between items-center hover:bg-neutral-900 transition-colors"
				>
					<div className="flex flex-col items-start">
						<span className="text-neutral-400 text-xs">Chat with</span>
						<div className="flex items-center gap-2">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
							</span>
							<span className="text-white font-semibold">Bax Support</span>
						</div>
					</div>
					<div className="text-neutral-400 hover:text-white transition-all p-1 hover:bg-neutral-800 rounded-lg">
						{isOpen ? (
							<IoChevronUp className="text-xl transition-transform duration-300" />
						) : (
							<BsChatDots className="text-xl transition-transform duration-300" />
						)}
					</div>
				</button>

				<div
					className={`grid transition-all duration-300 ease-in-out ${
						isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
					}`}
				>
					<div className="overflow-hidden">
						<div className="border-t border-neutral-800">
							<div
								data-lenis-prevent
								className="h-100 overflow-y-auto overscroll-contain no-scrollbar p-5"
							>
								{messages.length === 0 && !isLoading ? (
									<ChatEmptyState onSuggestionClick={handleSuggestionClick} />
								) : (
									<div className="space-y-4">
										{messages.map((m) => (
											<ChatMessage key={m.id} message={m} />
										))}
										{isLoading && <TypingIndicator />}
										{error && (
											<div className="flex items-end justify-start">
												<div className="shrink-0 w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center mr-2">
													<RiRobot2Line className="text-primary text-sm" />
												</div>
												<div className="max-w-[75%] rounded-2xl rounded-bl-none px-4 py-2.5 text-sm bg-red-900/50 text-red-200 border border-red-800">
													Oops! I&apos;m getting too many questions right now.
													Please try again in a moment.
												</div>
											</div>
										)}
										<div ref={messagesEndRef} />
									</div>
								)}
							</div>

							<ChatInput
								value={input}
								onChange={setInput}
								onSubmit={handleSubmit}
								disabled={isLoading}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
