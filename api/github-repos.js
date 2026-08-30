import { fetchGithubRepos } from "../lib/fetch-github-repos.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const repos = await fetchGithubRepos(process.env.GITHUB_TOKEN);
    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=86400");
    return res.status(200).json({ repos });
  } catch {
    return res.status(502).json({ error: "Failed to load repositories" });
  }
}
