import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fetchGithubRepos } from "./lib/fetch-github-repos.js";

function githubReposDevPlugin(token) {
  return {
    name: "github-repos-dev",
    configureServer(server) {
      server.middlewares.use("/api/github-repos", async (req, res, next) => {
        if (req.method !== "GET") return next();
        try {
          const repos = await fetchGithubRepos(token);
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "no-store");
          res.end(JSON.stringify({ repos }));
        } catch {
          res.statusCode = 502;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Failed to load repositories" }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), githubReposDevPlugin(env.GITHUB_TOKEN)],
  };
});
