import { GITHUB_USER, normalizeRepo, isListed } from "../../lib/fetch-github-repos.js";

const WORKING_ON_DAYS = 60;
const WORKING_ON_MAX = 4;
const GITHUB_LIST_MAX = 8;

export { GITHUB_USER };

export const FEATURED_GITHUB = new Set([
  "carecloud-voice-agent",
  "AI-JailBreak-eval",
  "fixed-daam-frontend",
  "straVIBE",
  "stravibe-cursor-extension",
]);

const REPO_BLURBS = {
  "AI-JailBreak-eval":
    "Direct-request LLM refusal eval — ASR and over-refusal across Claude and OpenAI.",
  "carecloud-voice-agent":
    "Voice AI patient registration over PSTN. Vapi, GPT-4.1, MongoDB, live dashboard.",
  "fixed-daam-frontend":
    "Pay now, collect later. React storefront for locking today's prices.",
  straVIBE:
    "CLI that syncs local coding-agent token usage to a public leaderboard.",
  "stravibe-cursor-extension":
    "VS Code / Cursor extension for the straVIBE AI-usage leaderboard.",
  Coders-cup-website2023:
    "MERN registration platform for ACM Coder's Cup, hosted at acmcoderscup.online.",
  "Dev-Day-2024-website":
    "Conference site and registration for ACM Developer's Day '24.",
  DD_Chatbot_24:
    "Real-time IBM WatsonX chatbot for high-concurrency DevDay engagement.",
  weatherapp:
    "Weather app backed by a GraphQL API on Vercel, reading OpenWeather.",
};

export function applyBlurb(repo) {
  if (repo.description) return repo;
  const blurb = REPO_BLURBS[repo.name];
  return blurb ? { ...repo, description: blurb } : repo;
}

export function splitRepos(repos) {
  const listed = repos
    .filter(isListed)
    .sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt));

  const privateRepos = listed.filter((r) => r.isPrivate);
  const publicRepos = listed.filter((r) => !r.isPrivate);

  let workingOn = privateRepos.slice(0, WORKING_ON_MAX);
  if (workingOn.length === 0) {
    const cutoff = Date.now() - WORKING_ON_DAYS * 24 * 60 * 60 * 1000;
    workingOn = publicRepos
      .filter((r) => new Date(r.pushedAt).getTime() > cutoff)
      .slice(0, 3);
  }

  const workingNames = new Set(workingOn.map((r) => r.name));
  const rest = publicRepos.filter((r) => !workingNames.has(r.name)).slice(0, GITHUB_LIST_MAX);

  return { workingOn, repos: rest };
}

export async function loadGithubRepos() {
  try {
    const res = await fetch("/api/github-repos");
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.repos)) return data.repos;
    }
  } catch {
    // fall through to the public GitHub API (local preview / API down)
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed&type=owner`
  );
  if (!res.ok) throw new Error("GitHub API error");
  const data = await res.json();
  return data.map(normalizeRepo).filter(isListed);
}

export function displayName(name) {
  return name
    .split(/[-_]+/)
    .map((part) => {
      if (!part) return part;
      if (part !== part.toLowerCase()) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

export function yearOf(iso) {
  return new Date(iso).getFullYear();
}

export function timeAgo(iso) {
  const days = Math.round((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.round(months / 12)} yr ago`;
}
