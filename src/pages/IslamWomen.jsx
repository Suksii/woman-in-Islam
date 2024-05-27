import {motion} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import {useRef} from "react";
const IslamWomen = () => {

    const sectionRef = useRef([])

    const aboutIslamSections = [
        {
            id: 1,
            title: 'Osnovni principi islama',
            descriptions: [
                {
                    id: 1,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 2,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 3,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                }
            ],
            images: [
                {
                    id: 1,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                },
                {
                    id: 2,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                },
                {
                    id: 3,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                }
            ]
        },
        {
            id: 2,
            title: 'Istorija islama i njegovo širenje',
            descriptions: [
                {
                    id: 1,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 2,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 3,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                }
            ],
            images: [
                {
                    id: 1,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                },
                {
                    id: 2,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                },
                {
                    id: 3,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                }
            ]
        },
        {
            id: 3,
            title: 'Najčešći simboli islama i njihovo značenje',
            descriptions: [
                {
                    id: 1,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 2,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 3,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                }
            ],
            images: [
                {
                    id: 1,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                },
                {
                    id: 2,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 2'
                },
                {
                    id: 3,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 3'
                }
            ]
        },
        {
            id: 4,
            title: 'Svete knjige islama',
            descriptions: [
                {
                    id: 1,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 2,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                },
                {
                    id: 3,
                    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.'
                }
            ],
            images: [
                {
                    id: 1,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 1'
                },
                {
                    id: 2,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 2'
                },
                {
                    id: 3,
                    image: 'https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg',
                    imageDescription: 'Slika 3'
                }
            ]
        }
    ]

    const scrollToSection = (index) => {
        sectionRef.current[index].scrollIntoView({behavior: 'smooth'})
    }

    return(
        <>
            <div className="bg-green-950 h-[250px] text-5xl md:text-[4.5rem] flex justify-center items-center font-roboto text-green-100">
                <motion.p initial={{y:50, opacity: 0}}
                          whileInView={{y:0, opacity: 1}}
                          transition={{duration: 1}}
                          className="text-center"
                >
                    Položaj žena u islamu
                </motion.p>
            </div>
            <section className="w-full md:w-[90%] mx-auto flex justify-center flex-wrap font-roboto">
                {
                    aboutIslamSections.map(item => {
                        return (
                            <motion.div key={item.id}
                                        className="w-1/3 min-w-[300px] md:p-10"
                                        initial={{y:50, opacity: 0}}
                                        whileInView={{y:0, opacity: 1}}
                                        transition={{duration: 1}}
                            >
                                <h2 className="text-2xl font-semibold py-4 text-center md:text-start">{item.title}</h2>
                                <p className="text-center md:text-start">{item.descriptions[0].description}</p>
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
                aboutIslamSections.map((item) => {
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
                                                <motion.p key={desc.id}
                                                          className="text-xl p-10"
                                                          initial={{y:50, opacity: 0}}
                                                          whileInView={{y:0, opacity: 1}}
                                                          transition={{duration: 1}}>
                                                    {desc.description}
                                                </motion.p>
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