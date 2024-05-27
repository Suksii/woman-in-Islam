import {motion} from "framer-motion";

const FamilyAndMarriage = () => {
    return (
        <div className="bg-green-950 h-[250px] text-[4.5rem] flex justify-center items-center font-roboto text-green-100">
            <motion.p initial={{y:50, opacity: 0}}
                      whileInView={{y:0, opacity: 1}}
                      transition={{duration: 1}}>
                Porodica i brak
            </motion.p>
        </div>
    )
}

export default FamilyAndMarriage