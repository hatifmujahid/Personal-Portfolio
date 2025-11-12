export default function Experience() {
  return (
    <section id="experience" className="mt-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
        Experience
      </h2>
      <ol class="group/list">
        {/* Software Engineer & DevOps Engineer - Current Role */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="August 2024 to Present"
            >
              Aug 2024 — Present
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Software Engineer & DevOps Engineer ➡ <span class="inline-block"> Blue Ocean Strategic Partners </span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                <ul class="list-disc ml-4">
                  <li>Increased output of scheduled Power Automate flows by fixing Automation and logical errors.</li>
                  <li>Implemented docker deployments to reduce server budget by 30%, and reduce error rates by 25%.</li>
                  <li>Implemented Desktop automation using OpenCV and PyAutoGUI and web automation using selenium for multitude of clients.</li>
                  <li>Worked on Azure OCR to parse invoice receipts, which were then posted on the desktop application by automation process.</li>
                  <li>Created azure data factory pipelines to ingest data from excel and push it to Database instance.</li>
                  <li>Managed teams of 6-8 people on multitude of projects ranging from Web Portals to RPA projects.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Docker
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Azure
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Power Automate
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    OpenCV
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Selenium
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Freelance Software Engineer */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="January 2024 — July 2024"
            >
              Jan 2024 — Jul 2024
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Freelance Software Engineer ➡ <span class="inline-block"> Central Depository Company of Pakistan </span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                <ul class="list-disc ml-4">
                  <li>Developed REST APIs to solve daily tasks such as integration of CDC portal with EasyPaisa.</li>
                  <li>Solve live deployment bugs for Back-Office team.</li>
                  <li>Devised an alternative localhost deployment policy to reduce development time by 50%.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {/* Note: Technologies are typically pulled from the original code or inferred,
                    but since the CV image doesn't list them, I'll use the original component's list
                    as a placeholder, though a custom list for this role would be better. */}
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    REST APIs
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Fintech Integration
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Java
                  </div>
                </li>
                {/* Add other relevant technologies if known, e.g., Java/Python, SQL, etc. */}
              </ul>
            </div>
          </div>
        </li>

        {/* Tech Lead Developer's Day '24 - Added as it overlaps with Freelance, but is a significant leadership role */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="September 2023 — May 2024"
            >
              Sep 2023 — May 2024
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Tech Lead Developer's Day '24 ➡ <span class="inline-block"> FAST National University ACM Chapter </span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                <ul class="list-disc ml-4">
                  <li>Developed web solutions for the event in April 2024.</li>
                  <li>These include: DevDay Website, Attendance Management system and Chatbot using IBM WatsonX.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {/* Using technologies from the original component's third entry, which was Tech Lead */}
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    IBM WatsonX
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    React
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Node JS
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    NoSQL
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Software Engineer Intern */}
        <li class="mt-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="July 2023 — August 2023"
            >
              Jul 2023 — Aug 2023
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Software Engineer Intern ➡ <span class="inline-block"> Systems Limited </span>
                    </span>
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                <ul class="list-disc ml-4">
                  <li>Worked in Cloud App Development and Maintenance department, with a team working on HR Management Portal named SYSHCM.</li>
                  <li>Helped develop a new module for their HR system to make new Salary slips automatically.</li>
                </ul>
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                {/* Using technologies from the original component's second entry, which was Intern */}
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Cloud App Dev
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    HR Systems
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Java
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300 ">
                    Angular
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
}
