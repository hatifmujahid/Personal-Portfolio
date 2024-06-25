export default function Projects(params) {
  return (
    <section
      id="projects"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl my-6">
        Projects
      </h2>
      <div>
        <ul class="group/list">
          <li class="mb-12">
            <div class="group cursor-pointer relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div class="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-200 focus-visible:text-blue-200  group/link text-base"
                    href="https://acmdevday.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Build a Spotify Connected App (opens in a new tab)"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Register for Devday'24 - <span class="inline-block"> ACM NUCES
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </h3>
                <p class="mt-2 text-sm leading-normal">
                  A registration portal for ACM Devday'24, a conference for developers, designers, and tech enthusiasts.
                </p>
              </div>
            </div>
          </li>
        </ul>
        {/* <div class="mt-12">
          <a
            class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span class="border-b border-transparent pb-px transition group-hover:border-blue-200 motion-reduce:transition-none">
                View Full Project
              </span>
              <span class="whitespace-nowrap">
                <span class="border-b border-transparent pb-px transition group-hover:border-blue-200 motion-reduce:transition-none">
                  Archive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
}
