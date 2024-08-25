import { FaArrowDown } from "react-icons/fa6";
import {useRef} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Kuraan from "../assets/zeneuislamu10.jpg";

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
            header: 'Položaj žene u islamu',
            text: 'Položaj žena u islamu je složena tema koja zavisi od tumačenja vjerskih učenja i kulturnih praksi. Islam ženama pruža određena prava, poput obrazovanja, rada i nasljeđa, ali način na koji se ta prava ostvaruju može značajno varirati među muslimanskim zajednicama. Razumijevanje uloge žena u islamu zahtijeva pažljivo razmatranje i vjerskih tekstova i društvenih običaja.',
            link: '/polozaj-zena-u-islamu'
        },
        {
            id: 2,
            header: 'Hidžab',
            text: 'Hidžab je izraz koji se koristi za različite oblike pokrivanja tijela kod muslimanskih žena, a najčešće se odnosi na veo koji pokriva kosu, vrat i ponekad ramena, dok lice ostaje otkriven. Hidžab je važan dio islamske tradicije i simbol vjerskog identiteta, ali njegovo nošenje može imati različita značenja u različitim kulturama i kontekstima.',
            link: '/hidzab'
        },
        {
            id: 3,
            header: 'Rožajska Šamija',
            text: 'Šamija je dio nošnje kod bošnjačke ženske populacije i kulturno nasljeđe rožajskog  kraja, a korišćena je za pokrivanje glave. Nosila se tokom  XIX i početkom XX vijeka. Izrađene od raznih materijala, između ostalih i od pamuka i svile bijele boje. Šamije su ivicama ukrašavane ručno izvezenim ojicama, prišivane na sve četiri strane.',
            link: '/rozajska-samija'
        }

    ]

    const aboutIslam =
        [
            'Islam je monoteistička religija koja potiče od učenja Muhammeda iz 7. vijeka. Zasniva se na vjeri u jednog Boga (Allaha), izabranost Muhammeda za Božijeg poslanika, predodređenost ljudske sudbine, nagradu za dobra djela i kaznu za loša, Sudnji dan i uskrsnuće mrtvih. ',
            'Postulati islama objavljeni su u Hadisima, odnosno zbirkama islamskih knjiga, a u sam temelj islama spada i sveta knjiga Kur\'an. Kur\'an je pisan na arapskom jeziku i sadrži 114 sura (poglavlja). Kur\'an je zbirka objava koje su isključivo od Svevišnjeg Boga i predstavlja isključivo Božiju riječ. Ta poslanica je Muhamedu prenesena preko anđela Gavrila (arap. meleka Džibrila). On je u pustinjskoj pećini volio da se osamljuje i razmišlja o Stvoritelju čitavog svijeta i svih bića i sila. Njemu tada jednom prilikom silazi s nebesa anđeo Gavrilo, prikazuje mu se u liku anđela i nalaže mu odmah da uči u ime Gospodara svih svjetova koji stvara...',
            'Sljedbenici islama se nazivaju muslimani, „oni koji se potčinjavaju“ Božjoj volji. U svijetu ima preko 2 milijarde muslimana, što čini islam drugom najvećom religijom poslije kršćanstva. Osnovne obaveze svakog muslimana su vjera u jednog Boga (Allaha) i Muhameda kao njegovog poslanika, molitva pet puta dnevno, post u mjesecu Ramazanu, davanje milostinje i hadžiluk (hodočašće u Meku) barem jednom u životu. Gotovo svi muslimani pripadaju jednoj od dvije glavne islamske grupe: sunitima (80%) ili šiitima (20%). Islam je preovlađujuća religija na Srednjem Istoku, kao i u mnogim državama Afrike i Azije.'
        ]


    return(
        <div className="bg-green-900 pt-[10vh] px-[5vw]">
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
                <div className={`w-full md:w-[45%] flex justify-center items-center`}>
                    <img src={Kuraan} alt="islam" className="object-cover"/>
                </div>
            </section>
            <section ref={sectionRef} className="flex flex-col md:flex-row gap-6 py-[10vh] font-roboto">
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl uppercase text-green-300 font-semibold">O islamu</h3>
                    <div className="flex flex-col gap-5">
                    {aboutIslam.map((item, index) => {
                        return (
                            <motion.p key={index}
                                      className="text-xl md:text-2xl text-center md:text-start text-green-100"
                                      initial={{y: 50, opacity: 0}}
                                      whileInView={{y: 0, opacity: 1}}
                                      transition={{duration: 1}}
                            >
                                {item}
                            </motion.p>
                        )
                    })
                    }
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full md:w-1/2">
                    {
                        paragraph.map(item => {
                            return (
                                <div key={item.id}>
                                    <motion.h2 className="text-2xl text-green-300 uppercase"
                                               initial={{y:50, opacity: 0}}
                                               whileInView={{y:0, opacity: 1}}
                                               transition={{duration: 1}}
                                    >
                                        {item.header}
                                    </motion.h2>
                                    <motion.p key={item.id}
                                              className="text-2xl text-green-100"
                                              initial={{y:50, opacity: 0}}
                                              whileInView={{y:0, opacity: 1}}
                                              transition={{duration: 1}}
                                    >
                                        {item.text}
                                    </motion.p>
                                    <Link to={item.link} onClick={scrollToTop}>
                                        <motion.button
                                            initial={{y:50, opacity: 0}}
                                            whileInView={{y:0, opacity: 1}}
                                            transition={{duration: 1}}
                                            className="border-2 border-green-100 rounded-md py-2 w-full md:w-fit my-2 px-6 hover:bg-green-100 text-xl duration-300 text-white hover:text-green-900">Pročitaj više</motion.button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default MainPage