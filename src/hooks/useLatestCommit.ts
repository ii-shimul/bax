"use client";

import { useSyncExternalStore } from "react";

export interface LatestCommit {
	repoName: string;
	message: string;
}

type GitHubPushEvent = {
	type: string;
	repo: { name: string };
	created_at: string;
};

let cachedCommit: LatestCommit | null = null;
let isFetching = false;
const listeners = new Set<() => void>();

async function fetchCommit(): Promise<void> {
	if (isFetching || cachedCommit) return;
	isFetching = true;

	try {
		const res = await fetch(
			"https://api.github.com/users/ii-shimul/events/public",
		);
		if (!res.ok) return;
		const events: GitHubPushEvent[] = await res.json();
		const pushEvent = events.find((e) => e.type === "PushEvent");
		const repoName = pushEvent?.repo?.name;
		if (!repoName) return;

		const commitRes = await fetch(
			`https://api.github.com/repos/${repoName}/commits?per_page=1`,
		);
		if (!commitRes.ok) return;
		const data = await commitRes.json();
		if (data?.[0]?.commit?.message) {
			cachedCommit = {
				repoName,
				message: data[0].commit.message as string,
			};
			listeners.forEach((listener) => listener());
		}
	} catch (err: unknown) {
		console.error(err);
	} finally {
		isFetching = false;
	}
}

function subscribe(callback: () => void) {
	listeners.add(callback);
	fetchCommit();
	return () => {
		listeners.delete(callback);
	};
}

function getSnapshot() {
	return cachedCommit;
}

function getServerSnapshot() {
	return null;
}

export function useLatestCommit(): LatestCommit | null {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
