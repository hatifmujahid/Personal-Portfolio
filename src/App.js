import React, { useEffect, useState } from "react";
import Loading from "./components/loading";
import Buttons from "./components/buttons";
import Projects from "./components/projects";
import Carousel from "./components/carousel";
import Timeline from "./components/timeline";
import { motion } from "framer-motion";
import Skills from "./components/skills";
import "./App.css";


function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        setTimeout(() => {
            document.getElementById("section").style.opacity = 1;
        }, 1200);
    }, []);
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
        },
    };
    const url = (name, wrap = false) =>
        `${
            wrap ? "url(" : ""
        }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
            wrap ? ")" : ""
        }`;
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background:
                            "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
                        backgroundImage: url("stars", true),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="transition duration-1300 ease-in-out flex flex-col"
                >
                    <section
                        className="h-screen max-[800px]:scale-75 w-screen flex flex-col items-center justify-center opacity-0 ease-in duration-100 mt-5"
                        id="section"
                    >
                        <motion.div
                            className="container"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: -270,
                                borderRadius: "100%",
                            }}
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                className="item"
                            >
                                <motion.rect
                                    x="10"
                                    y="10"
                                    width="20"
                                    height="80"
                                    variants={icon}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        default: {
                                            duration: 3,
                                            ease: "easeInOut",
                                        },
                                        fill: {
                                            duration: 3,
                                            ease: [1, 0, 0.8, 1],
                                        },
                                    }}
                                />

                                <motion.rect
                                    x="70"
                                    y="10"
                                    width="20"
                                    height="80"
                                    variants={icon}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        default: {
                                            duration: 2,
                                            ease: "easeInOut",
                                        },
                                        fill: {
                                            duration: 2,
                                            ease: [1, 0, 0.8, 1],
                                        },
                                    }}
                                />

                                <motion.rect
                                    x="10"
                                    y="45"
                                    width="80"
                                    height="20"
                                    variants={icon}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        default: {
                                            duration: 3,
                                            ease: "easeInOut",
                                        },
                                        fill: {
                                            duration: 3,
                                            ease: [1, 0, 0.8, 1],
                                        },
                                    }}
                                />
                            </motion.svg>
                        </motion.div>

                        {/* <ToastQuote /> */}
                        <div className="py-4 px-4 max-w-screen-xl text-center lg:py-16 snap-center">
                            <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                                <span
                                    style={{
                                        display: "inline-block",
                                        "vertical-align": "top",
                                        "max-width": "700px",
                                    }}
                                >
                                    Hey, My name is
                                </span>
                                <br></br> Hatif Mujahid
                            </h1>

                            <img
                                src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=35&pause=1000&color=B0B0B0&center=true&width=800&height=100&lines=Welcome+to+my+portfolio!;Open+to+Work;Exploring+AI%2FML;MERN+%7C+Next+JS+%7C+Nest+JS+Developer;Cyber+Security+Enthusiast"
                                alt="Typing SVG"
                            />
                            <a href="https://drive.google.com/file/d/1eVv3tqRd2OFzfrfcBLTgkzqfkKx_Ue7p/view?usp=sharing">
                                <button
                                    type="button"
                                    className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2 -ml-1 text-[#626890]"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="ethereum"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                                        ></path>
                                    </svg>
                                    My resume
                                </button>
                                <button
                                    type="button"
                                    className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4 mr-2 fill-current text-gray-600"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657+.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"
                                        />
                                    </svg>
                                    My Github
                                </button>
                            </a>
                        </div>
                        <Buttons />
                    </section>

                    <div className="flex items-center justify-center skill-section">
                        <Skills />
                    </div>

                    

                    <div className="flex flex-col max-[800px]:scale-75 w-screen h-screen ">
                        <div className="h-screen w-screen flex flex-col items-center justify-center ease-in duration-100 mb-10">
                            <h1 className="text-center text-5xl font-bold text-white">
                                Career Timeline
                            </h1>
                            <Timeline />
                        </div>
                    </div>

                    <div className="skills flex flex-col items-center w-screen h-screen max-[800px]:scale-75 lg:scale-100">
                        <h1 className="text-center text-5xl font-bold text-white mb-4">
                            Projects
                        </h1>
                        <Projects />
                        <div>
                            <a class="fancy" href="https://github.com/hatifmujahid">
                                <span class="top-key"></span>
                                <span class="text">Check out more at Github</span>
                                <span class="bottom-key-1"></span>
                                <span class="bottom-key-2"></span>
                            </a>
                        </div>
                    </div>
                    <div className="skills flex flex-col items-center w-screen h-screen max-[800px]:scale-75 lg:scale-100">
                        <h1 className="text-center text-5xl font-bold text-white">
                            Certificates
                        </h1>
                        <Carousel />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
