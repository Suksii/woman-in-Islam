import {motion} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import {useRef} from "react";
import Header from "../components/Header.jsx";
import {IslamWomenData} from "../constants/IslamWomenData.jsx";
const IslamWomen = () => {

    const sectionRef = useRef([])



    const scrollToSection = (index) => {
        sectionRef.current[index].scrollIntoView({behavior: 'smooth'})
    }

    return(
        <>
            <div className="bg-green-950 h-[250px] text-5xl md:text-[4.5rem] flex justify-center items-center font-roboto text-green-100">
                <Header title={"Položaj žena u islamu"}/>
            </div>
            <section className="w-full md:w-[90%] mx-auto flex justify-center flex-wrap font-roboto">
                {
                    IslamWomenData.map(item => {
                        return (
                            <motion.div key={item.id}
                                        className="w-1/3 min-w-[300px] md:p-10"
                                        initial={{y:50, opacity: 0}}
                                        whileInView={{y:0, opacity: 1}}
                                        transition={{duration: 1}}
                            >
                                <h2 className="text-2xl font-semibold py-4 text-center md:text-start">{item.title}</h2>
                                <div className="text-center md:text-start line-clamp-6">{item.descriptions[0].description}</div>
                                <div className="flex justify-center items-center md:justify-start gap-3 my-5">
                                    <div className="p-4 border border-green-950 text-green-950 w-fit rounded-full cursor-pointer hover:translate-x-1 duration-300 hover:text-white hover:bg-green-950" onClick={() => scrollToSection(item.id)}>
                                        <FaArrowRight/>
                                    </div>
                                    <span className="text-xl">Saznaj više</span>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </section>
            {
                IslamWomenData.map((item) => {
                    return (
                        <section key={item.id} ref={el => sectionRef.current[item.id] = el}>
                            <motion.h2 className="text-2xl bg-green-950 h-[80px] flex justify-center text-center items-center font-roboto text-green-100"
                                       initial={{y:50, opacity: 0}}
                                       whileInView={{y:0, opacity: 1}}
                                       transition={{duration: 1}}>
                                {item.title}
                            </motion.h2>
                            <div className="flex items-center flex-col lg:flex-row">
                                <div style={{flex:2}}>
                                    {
                                        item.descriptions?.map(desc => {
                                            return (
                                                <motion.div key={desc.id}
                                                          className="text-xl px-10 py-5"
                                                          initial={{y:50, opacity: 0}}
                                                          whileInView={{y:0, opacity: 1}}
                                                          transition={{duration: 1}}>
                                                    {desc.description}
                                                </motion.div>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{flex:1}}>
                                    {
                                        item.images?.map(img => {
                                            return (
                                                <motion.div key={img.id}
                                                            initial={{y:50, opacity: 0}}
                                                            whileInView={{y:0, opacity: 1}}
                                                            transition={{duration: 1}}
                                                            className="flex flex-col items-center m-10"
                                                >

                                                    <img src={img.image}
                                                         alt="image"
                                                         className="w-[80%] lg:w-[450px] object-cover"

                                                    />
                                                    <p className="font-roboto font-light italic text-sm">{img?.imageDescription}</p>
                                                </motion.div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}

export default IslamWomen