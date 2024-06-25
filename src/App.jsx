import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Socials from "./components/socials";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid lg:grid-cols-2 h-full w-full ">
        {/* Left Side */}
        <div className="bg-gray-200 p-4 sticky overflow-hidden lg:top-0 flex flex-col justify-center h-screen sm:overflow-visible">
          <div className="mt-8 flex flex-col text-center justify-center items-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              <a href="/">Muhammad Hatif Mujahid</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-black sm:text-xl">
              Full-Stack Engineer, App developer, AI engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-black">
              I'm a software engineer based in Pakistan specializing in building
              solutions for the web. I'm passionate about building products that
              improve the lives of those around me.
            </p>
            <nav
              className="nav hidden lg:block"
              aria-label="In-page jump links"
            >
              <ul className="mt-16 w-max">
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-black group-focus-visible:w-16 group-focus-visible:bg-black motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-black group-focus-visible:text-black">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3"
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-black group-focus-visible:w-16 group-focus-visible:bg-black motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-black group-focus-visible:text-black">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-black group-focus-visible:w-16 group-focus-visible:bg-black motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-black group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <Socials />
        </div>

        {/* Right Side */}
        <div className="bg-black p-16 overflow-auto h-screen sm:h-auto">
          <About />
          <Experience />
          <div class="mt-12">
            <a
              class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
              href="https://drive.google.com/file/d/1xluQqMo5Ex_svVl348Tb_Zd2tiXY_GAT/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
                View Full{" "}
                <span class="inline-block">
                  Resume
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
          </div>
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
