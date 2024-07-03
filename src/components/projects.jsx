import Project from "./project"
import devday from "../assets/devday.png"
import coder from "../assets/coders_cup.png"

export default function Projects() {

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
            <Project name="ACM Devday'24" 
            span="Register" 
            link="https://acmdevday.com" 
            description="A registration portal for ACM Devday'24, a conference for developers, designers, and tech enthusiasts." 
            img={devday}
            />
          </li>
          <li class="mb-12">
            <Project name="ACM Coder's Cup 2024" 
            span="Register" 
            link="https://www.acmcoderscup.online/" 
            description="Welcome to the Coder's Cup website, where you can register as a participant for our exciting coding 
            competition! This web application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and 
            is hosted at acmcoderscup.online."
            img={coder} 
            />
          </li>
          <li class="mb-12">
            <Project name="ACM Devday'24" 
            span="Register" 
            link="https://acmdevday.com" 
            description="A registration portal for ACM Devday'24, a conference for developers, designers, and tech enthusiasts." />
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
