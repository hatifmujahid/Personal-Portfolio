export const GITHUB_USER = "hatifmujahid";

export const HIDDEN_REPOS = new Set([
  "hatifmujahid",
  "hatifmujahid.github.io",
  "Personal-Portfolio",
]);

export function normalizeRepo(repo) {
  return {
    name: repo.name,
    description: repo.description,
    url: repo.private ? null : repo.html_url,
    homepage: repo.homepage || null,
    language: repo.language,
    topics: repo.topics || [],
    stars: repo.stargazers_count || 0,
    isPrivate: Boolean(repo.private),
    pushedAt: repo.pushed_at,
    fork: repo.fork,
    archived: repo.archived,
  };
}

export function isListed(repo) {
  return !repo.fork && !repo.archived && !HIDDEN_REPOS.has(repo.name);
}

export async function fetchGithubRepos(token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "hatifmujahid-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const url = token
    ? "https://api.github.com/user/repos?per_page=100&sort=pushed&affiliation=owner"
    : `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed&type=owner`;

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}`);
  }

  const data = await res.json();
  return data.map(normalizeRepo).filter(isListed);
}
