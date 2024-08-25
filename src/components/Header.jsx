import {motion} from "framer-motion";

const Header = ({title}) => {
    return (
        <motion.p initial={{y:50, opacity: 0}}
                  whileInView={{y:0, opacity: 1}}
                  transition={{duration: 1}}
                  className="text-center"
        >
            {title}
        </motion.p>
    );
};

export default Header;