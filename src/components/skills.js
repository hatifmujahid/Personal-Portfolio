import { motion } from "framer-motion"

export default function Skills({skill}) {
    
    if (skill === "Web Development") {
        return (
            <div className="flex flex-col items-end mr-20 justify-center">
                <h1 className="text-white text-3xl ">Web Dev</h1>
            </div>
        )
    }
    if (skill === "CyberSecurity") {
        return (
            <div className="flex flex-col items-end mr-20 justify-center">
                <h1 className="text-white text-3xl">CYS</h1>
            </div>
        )
    }
    if (skill === "Tools") {
        return (
            <div  className="flex flex-col items-end mr-20 justify-center content-center">
                <h1 className="text-white text-3xl">MISC</h1>
            </div>
        )
    }
}