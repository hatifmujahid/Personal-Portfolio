export default function Experience() {
  return (
    <section id="experience" className="mt-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
        Experience
      </h2>
      <ol class="group/list">

        {/* Chainbot Solutions - Current Role */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="January 2026 to Present"
            >
              Jan 2026 — Present
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Software Engineer II ➡ <span class="inline-block">Chainbot Solutions</span>
                      <span class="ml-2 text-xs font-normal text-slate-500">USA (Remote)</span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal text-slate-400">
                <ul class="list-disc ml-4">
                  <li>Developed and optimised a cross-platform TV application using Flutter for the Hello Guest Screen platform, achieving 99.99% uptime and stronger user retention.</li>
                  <li>Refactored and maintained the TypeScript backend infrastructure, improving system reliability and optimising AWS resource utilisation to reduce monthly cloud costs from $400 to $120.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {["Flutter", "TypeScript", "AWS", "Backend Infrastructure"].map((t) => (
                  <li key={t} class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

        {/* Blue Ocean Strategic Partners */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="August 2024 to January 2026"
            >
              Aug 2024 — Jan 2026
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Software Engineer ➡ <span class="inline-block">Blue Ocean Strategic Partners</span>
                      <span class="ml-2 text-xs font-normal text-slate-500">Pittsburgh, USA (Remote)</span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal text-slate-400">
                <ul class="list-disc ml-4">
                  <li>Led a distributed engineering team to architect and deliver secure, full-stack SaaS solutions, managing the entire SDLC for enterprise-grade web portals and complex data automation systems.</li>
                  <li>Architected Docker-based deployments and cloud-native workflows, reducing server costs by 76% while maintaining high availability.</li>
                  <li>Engineered custom data intelligence suites using OpenCV and Selenium to modernise legacy workflows, achieving a 65% boost in operational productivity.</li>
                  <li>Served as the primary technical point of contact for US-based enterprise clients, translating business needs into scalable technical specifications.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {["Docker", "Azure", "Python", "OpenCV", "Selenium", "Power Automate", "SaaS"].map((t) => (
                  <li key={t} class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

        {/* Central Depository Company of Pakistan */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="January 2024 to July 2024"
            >
              Jan 2024 — Jul 2024
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Associate Freelance Software Engineer ➡ <span class="inline-block">Central Depository Company of Pakistan</span>
                      <span class="ml-2 text-xs font-normal text-slate-500">Karachi, Pakistan</span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal text-slate-400">
                <ul class="list-disc ml-4">
                  <li>Developed high-availability REST APIs for secure financial integrations between the CDC portal and digital banking platforms, ensuring strict data integrity and performance standards.</li>
                  <li>Streamlined backend operations by resolving critical deployment bugs and optimising Python codebases, reducing incident rates by 25% for mission-critical financial services.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {["Python", "REST APIs", "PostgreSQL", "Fintech Integration"].map((t) => (
                  <li key={t} class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

        {/* Tech Lead Developer's Day '24 */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="September 2023 to May 2024"
            >
              Sep 2023 — May 2024
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Tech Lead — Developer's Day '24 ➡ <span class="inline-block">FAST National University ACM Chapter</span>
                      <span class="ml-2 text-xs font-normal text-slate-500">Karachi, Pakistan</span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal text-slate-400">
                <ul class="list-disc ml-4">
                  <li>Spearheaded the development of a real-time AI-driven Chatbot using IBM WatsonX, managing backend integration for high-concurrency event engagement.</li>
                  <li>Led development of the DevDay website and Attendance Management system for the April 2024 event.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {["IBM WatsonX", "React", "Node.js", "MongoDB"].map((t) => (
                  <li key={t} class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

        {/* Systems Limited */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="July 2023 to August 2023"
            >
              Jul 2023 — Aug 2023
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Software Engineer Intern ➡ <span class="inline-block">Systems Limited</span>
                      <span class="ml-2 text-xs font-normal text-slate-500">Karachi, Pakistan</span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal text-slate-400">
                <ul class="list-disc ml-4">
                  <li>Contributed to the development and optimisation of the SYSHCM HR Management Portal within the Cloud App Development department, focusing on reliable backend feature enhancements.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {["Java", "Angular", "Cloud App Dev", "HR Systems"].map((t) => (
                  <li key={t} class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>

      </ol>
    </section>
  );
}
