import { motion } from "framer-motion"

export default function Skills({skill}) {
    
    if (skill === "Web Development") {
        return (
            <motion.div >
                <h1 className="text-white text-2xl ">Web Dev</h1>
            </motion.div>
        )
    }
    if (skill === "CyberSecurity") {
        return (
            <motion.div>
                <h1 className="text-white">CYS</h1>
            </motion.div>
        )
    }
    if (skill === "Tools") {
        return (
            <motion.div>
                <h1 className="text-white">MISC</h1>
            </motion.div>
        )
    }
}