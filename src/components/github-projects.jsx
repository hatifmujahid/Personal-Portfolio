import { useEffect, useState } from "react";
import {
  GITHUB_USER,
  loadGithubRepos,
  splitRepos,
  timeAgo,
  displayName,
  yearOf,
} from "../lib/github";

export function useGithubRepos() {
  const [workingOn, setWorkingOn] = useState([]);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    loadGithubRepos()
      .then((all) => {
        if (cancelled) return;
        const split = splitRepos(all);
        setWorkingOn(split.workingOn);
        setRepos(split.repos);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { workingOn, repos, status };
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WorkingOnRow({ repo }) {
  const title = displayName(repo.name);
  const tags = [repo.language, ...repo.topics].filter(Boolean).slice(0, 4);
  const TitleTag = repo.url ? "a" : "span";
  const titleProps = repo.url
    ? {
        href: repo.url,
        target: "_blank",
        rel: "noreferrer noopener",
        "aria-label": `${title} (opens in a new tab)`,
      }
    : {};

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
          Now
        </span>
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <TitleTag
            {...titleProps}
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-blue-200 focus-visible:text-blue-200"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {title}
              {repo.isPrivate && (
                <span className="ml-2 text-xs font-normal text-slate-500">Private</span>
              )}
              {repo.url && <Arrow />}
            </span>
          </TitleTag>
        </h3>
        {repo.description && (
          <p className="mt-2 text-sm leading-normal text-slate-400">{repo.description}</p>
        )}
        <p className="mt-2 text-xs text-slate-500">Updated {timeAgo(repo.pushedAt)}</p>
        {tags.length > 0 && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tags.map((tag) => (
              <li key={tag} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function GithubRow({ repo }) {
  const title = displayName(repo.name);
  const TitleTag = repo.url ? "a" : "span";
  const titleProps = repo.url
    ? {
        href: repo.url,
        target: "_blank",
        rel: "noreferrer noopener",
        "aria-label": `${title} (opens in a new tab)`,
      }
    : {};

  return (
    <div className="group relative grid items-baseline gap-x-4 py-3 transition-all sm:grid-cols-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-0 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50" />
      <span className="z-10 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {yearOf(repo.pushedAt)}
      </span>
      <div className="z-10 flex min-w-0 items-baseline justify-between gap-3 sm:col-span-6">
        <TitleTag
          {...titleProps}
          className="group/link inline-flex min-w-0 items-baseline text-base font-medium leading-tight text-slate-200 hover:text-blue-200 focus-visible:text-blue-200"
        >
          <span className="absolute -inset-x-4 inset-y-0 hidden rounded lg:block" />
          <span className="truncate">{title}</span>
          {repo.url && <Arrow />}
        </TitleTag>
        {repo.language && (
          <span className="shrink-0 text-xs text-slate-500">{repo.language}</span>
        )}
      </div>
    </div>
  );
}

function WorkingSkeleton() {
  return (
    <div className="grid animate-pulse gap-4 sm:grid-cols-8">
      <div className="h-3 w-10 rounded bg-slate-800 sm:col-span-2" />
      <div className="space-y-2 sm:col-span-6">
        <div className="h-4 w-2/3 rounded bg-slate-800" />
        <div className="h-3 w-1/3 rounded bg-slate-800/80" />
      </div>
    </div>
  );
}

function GithubSkeleton() {
  return (
    <div className="grid animate-pulse items-baseline gap-4 py-3 sm:grid-cols-8">
      <div className="h-3 w-8 rounded bg-slate-800 sm:col-span-2" />
      <div className="h-4 w-1/2 rounded bg-slate-800 sm:col-span-6" />
    </div>
  );
}

export function WorkingOn({ workingOn, status }) {
  if (status === "error") return null;
  if (status === "ready" && workingOn.length === 0) return null;

  return (
    <div className="mb-16">
      <h3 className="text-sm font-medium text-slate-200">Currently building</h3>
      <ul className="group/list mt-6">
        {status === "loading"
          ? [0, 1].map((i) => (
              <li key={i} className="mb-10">
                <WorkingSkeleton />
              </li>
            ))
          : workingOn.map((repo) => (
              <li key={repo.name} className="mb-10 last:mb-0">
                <WorkingOnRow repo={repo} />
              </li>
            ))}
      </ul>
    </div>
  );
}

export function GithubList({ repos, status }) {
  if (status === "error") {
    return (
      <p className="mt-16 text-sm text-slate-500">
        Couldn’t load GitHub repositories.{" "}
        <a
          className="text-blue-300 hover:text-blue-200"
          href={`https://github.com/${GITHUB_USER}?tab=repositories`}
          target="_blank"
          rel="noreferrer noopener"
        >
          View them on GitHub
        </a>
        .
      </p>
    );
  }

  if (status === "ready" && repos.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-sm font-medium text-slate-200">On GitHub</h3>
      <ul className="group/list mt-4">
        {status === "loading"
          ? [0, 1, 2, 3, 4].map((i) => (
              <li key={i}>
                <GithubSkeleton />
              </li>
            ))
          : repos.map((repo) => (
              <li key={repo.name}>
                <GithubRow repo={repo} />
              </li>
            ))}
      </ul>
      <div className="mt-8">
        <a
          className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300"
          href={`https://github.com/${GITHUB_USER}?tab=repositories`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View all repositories on GitHub (opens in a new tab)"
        >
          View all repositories
          <Arrow />
        </a>
      </div>
    </div>
  );
}
