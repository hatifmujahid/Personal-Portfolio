import { motion } from "framer-motion"
import React, { useRef } from 'react'
import {FaGit, FaReact, FaNodeJs, FaCss3, FaHtml5} from "react-icons/fa"
import {DiDocker, DiPython, DiJavascript} from "react-icons/di"



function Skilltype({skill}) {
    
    const parentRef1 = useRef();
    const parentRef2= useRef();
    const parentRef3 = useRef();
    if (skill === "Frameworks") {
        return (
            <div className="flex flex-col items-center mt-4 justify-center max-[800px]:scale-75" ref={parentRef1}>
                <h1 className="text-white text-3xl ">Frameworks</h1>
                
                <motion.div drag dragConstraints={parentRef1} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <FaCss3 className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef1} className="m-2  h-20 w-20 bg-[#2E8BC0]">
                    <FaNodeJs className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef1} className="m-2  h-20 w-20 bg-[#2E8BC0]">
                    <FaHtml5 className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef1} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <FaReact className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef1} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <svg className="p-3" width="80px" height="80px" viewBox="0 0 128 128">
                        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                    </svg>          
                </motion.div>
                
                
            </div>
        )
    }
    if (skill === "Languages") {

        return (
            <div className="flex flex-col items-center mt-4 justify-center max-[800px]:scale-75" ref={parentRef2}>
                <h1 className="text-white text-3xl">Languages</h1>
                <motion.div drag dragConstraints={parentRef2} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <DiPython className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef2} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <DiJavascript className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef2} className="flex items-center justify-center h-20 w-20 bg-[#2E8BC0]">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className="p-3" width="80px" height="80px"><path d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"/></svg>
                </motion.div>
                <motion.div drag dragConstraints={parentRef2} className="flex items-center justify-center m-2 h-20 w-20 bg-[#2E8BC0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="80px" className="p-3" height="80px" viewBox="0 0 50 50">
                    <path fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path  fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path  fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path>
                    </svg>
                </motion.div>
            </div>
        )
    }
    if (skill === "Productivity") {

        return (
            <div  className="flex flex-col items-center mt-4 justify-center max-[800px]:scale-75" ref={parentRef3}>
                <h1 className="text-white text-3xl">Productivity</h1>
                <motion.div drag dragConstraints={parentRef3} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <FaGit className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef3} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <DiDocker className="h-20 w-20 p-3"/>
                </motion.div>
                <motion.div drag dragConstraints={parentRef3} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    <svg  className="p-3" width="80px" height="80px"  viewBox="0 0 128 128">
                        <path fill="none" d="M4.24 4.24h119.53v119.53H4.24z"></path><path fill="#293138" d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm26.34-60.5l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"></path><path fill="#4FA847" d="M99.12 90.73l-9.4 5.62c-.25.15-.43.31-.43.61v2.46c0 .3.2.43.45.28l9.54-5.8c.25-.15.29-.42.29-.72v-2.17c0-.3-.2-.42-.45-.28z"></path>
                    </svg>
                </motion.div>
                <motion.div drag dragConstraints={parentRef3} className="m-2 h-20 w-20 bg-[#2E8BC0]">
                    
                    <svg className="p-3" width="80px" height="80px" viewBox="0 0 128 128">
                        <g><path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656zm0 0"></path><path d="M12.734 87.105H115.23v5.31H12.734zm0 0"></path><path d="M66.031 119.688L14.766 90.09l2.656-4.602 51.266 29.602zm0 0M110.566 42.543L59.301 12.941l2.656-4.597 51.266 29.597zm0 0"></path><path d="M17.434 42.523l-2.657-4.601 51.27-29.598 2.656 4.598zm0 0"></path><path d="M109.621 96.852L58.375 8.09l4.598-2.656 51.25 88.761zm0 0M16.8 34.398h5.313v59.204h-5.312zm0 0"></path><path d="M105.887 34.398h5.312v59.204h-5.312zm0 0"></path><path d="M65.129 117.441l-2.32-4.02 44.586-25.745 2.32 4.02zm0 0"></path><path d="M118.238 95.328c-3.07 5.344-9.918 7.168-15.261 4.098-5.344-3.074-7.168-9.922-4.098-15.266 3.074-5.344 9.922-7.168 15.266-4.097 5.375 3.105 7.199 9.921 4.093 15.265M29.09 43.84c-3.074 5.344-9.922 7.168-15.266 4.097-5.344-3.074-7.168-9.921-4.097-15.265 3.074-5.344 9.921-7.168 15.265-4.098 5.344 3.106 7.168 9.922 4.098 15.266M9.762 95.328c-3.075-5.344-1.25-12.16 4.093-15.266 5.344-3.07 12.16-1.246 15.266 4.098 3.07 5.344 1.246 12.16-4.098 15.266-5.375 3.07-12.191 1.246-15.261-4.098M98.91 43.84c-3.07-5.344-1.246-12.16 4.098-15.266 5.344-3.07 12.16-1.246 15.265 4.098 3.07 5.344 1.247 12.16-4.097 15.266-5.344 3.07-12.192 1.246-15.266-4.098M64 126.656a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 104.32a11.158 11.158 0 0111.168 11.168c0 6.145-4.992 11.168-11.168 11.168M64 23.68a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 1.344a11.158 11.158 0 0111.168 11.168A11.158 11.158 0 0164 23.68"></path></g>
                    </svg>
                </motion.div>
            </div>
        )
    }
}
export default function Skills() {
    function handleClick() {
        const skills = document.querySelector(".skills-heading")
        skills.animate([
            {transform: "translateY(100px)"},
            {opacity: 0},
            
        ], {
            duration: 1000,
            fill: "forwards",
        })
        const container = document.querySelector(".container-skill")
        container.animate([
            {transform: "translateY(0px)"},
            {opacity: 100},
        ], {
            duration: 1000,
            fill: "forwards",
        })
    }
    return (
        <div className="flex items-center justify-center max-[800px]:scale-75">
            <motion.div className="skills-heading cursor-pointer flex items-center justify-center absolute max-[800px]:scale-75" initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }} onClick={handleClick}>
                <h1 className=" cursor-pointer p-16 z-10 heading-skill absolute text-center text-5xl font-bold text-white" >
                    Skills
                </h1>
            </motion.div>
            <div class="container-skill opacity-10">
                <div class="color-div bg-black bg-opacity-50">
                    <Skilltype skill="Languages"/>
                </div>
                <div class="color-div bg-[#a01414] bg-opacity-50">
                    <Skilltype skill="Productivity"/>
                </div>
                <div class="color-div bg-[#0C2D48] bg-opacity-50">
                    <Skilltype skill="Frameworks"/>
                </div>
            </div>
        </div>    
    )
}

