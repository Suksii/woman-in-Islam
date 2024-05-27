import { FaArrowDown } from "react-icons/fa6";
import {useRef} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const MainPage = () => {

    const sectionRef = useRef(null)

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'instant'})
    }

    const paragraph = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.'
        },
        {
            id: 2,
            text: 'Autem tenetur commodi maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eligendi fugit, facilis velit reiciendis iure laudantium. Praesentium repellat corrupti dolor sit sint obcaecati. Modi aut quo molestiae a explicabo maiores necessitatibus nemo repellendus architecto? Corrupti numquam ullam nostrum, eveniet at doloribus blanditiis aliquid a est porro aspernatur pariatur culpa soluta nesciunt odio quasi maxime debitis illum.'
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.'
        }

    ]

    return(
        <div className="bg-green-900 py-[10vh] px-[5vw]">
            <section className="flex md:flex-row flex-col gap-10 justify-between text-start">
                <div className="w-full md:w-[50%] font-roboto">
                    <h3 className="text-2xl uppercase text-green-300 font-semibold">Islam</h3>
                    <motion.h1 className="text-5xl md:text-[3.5rem] text-center md:text-start text-green-100"
                                initial={{y:50, opacity: 0}}
                                whileInView={{y:0, opacity: 1}}
                                transition={{duration: 1}}
                    >
                        Zajedništvo vjere, različitosti i poštovanja.
                    </motion.h1>
                    <div className="flex items-center mt-12 gap-4 w-fit cursor-pointer hover:translate-y-1 duration-300" onClick={scrollToSection}>
                        <div className="w-fit p-4 border-2 border-green-100 text-green-100 hover:text-green-800 hover:bg-green-100 rounded-full text-xl duration-300"><FaArrowDown/></div>
                        <span className="py-4 text-xl text-green-100">Gledaj dalje</span>
                    </div>
                </div>
                <div className="md:w-[300px] h-[400px] bg-black"></div>
            </section>
            <section ref={sectionRef} className="flex flex-col md:flex-row gap-6 py-[10vh] font-roboto">
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl uppercase text-green-300 font-semibold">O islamu</h3>
                    <motion.h1 className="text-5xl md:text-[3.5rem] text-center md:text-start text-green-100"
                               initial={{y:50, opacity: 0}}
                               whileInView={{y:0, opacity: 1}}
                               transition={{duration: 1}}
                    >
                        An inspiring headline about yourself.</motion.h1>
                    <Link to="/o-islamu" onClick={scrollToTop}>
                        <button className="border-2 border-green-100 rounded-md py-4 w-full md:w-fit px-10 my-5 hover:bg-green-100 text-xl duration-300 text-white hover:text-green-900">Pročitaj više</button>
                    </Link>
                </div>
                <div className="flex flex-col gap-5 w-full md:w-1/2">
                    {
                        paragraph.map(item => {
                            return (
                                <motion.p key={item.id}
                                          className="text-2xl text-green-100"
                                          initial={{y:50, opacity: 0}}
                                          whileInView={{y:0, opacity: 1}}
                                          transition={{duration: 1}}
                                >
                                    {item.text}
                                </motion.p>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default MainPage