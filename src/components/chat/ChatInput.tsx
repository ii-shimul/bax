"use client";

import { IoSend } from "react-icons/io5";

interface ChatInputProps {
	value: string;
	onChange: (value: string) => void;
	onSubmit: (e: React.FormEvent) => void;
	disabled: boolean;
}

export function ChatInput({
	value,
	onChange,
	onSubmit,
	disabled,
}: ChatInputProps) {
	return (
		<form
			onSubmit={onSubmit}
			className="p-4 border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
		>
			<div className="flex items-center gap-3">
				<input
					className="flex-1 bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-neutral-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500 dark:placeholder:text-neutral-500"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder="Ask something..."
				/>
				<button
					type="submit"
					disabled={disabled || !value.trim()}
					className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<IoSend className="text-lg" />
				</button>
			</div>
		</form>
	);
}
