import {motion} from "framer-motion";

const LogoSection = () => {
    return (
        <div className="py-4 md:py-5 text-center">
            <div className="flex justify-center gap-6 text-5xl md:text-[5rem] font-great-vibes tracking-widest">
                <motion.h1 whileInView={{y: 0, opacity: 1}} initial={{y: -100, opacity: 0}} transition={{duration: 1}}>
                    Žene u islamu
                </motion.h1>
            </div>
        </div>
    )
}

export default LogoSection