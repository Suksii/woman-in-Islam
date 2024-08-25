import {motion} from "framer-motion";
import Header from "../components/Header.jsx";
import Samija1 from "../assets/samija/slika8.jpg";
import Samija2 from "../assets/samija/slika4.jpg";
import Samija3 from "../assets/samija/slika11.jpg";
import Samija4 from "../assets/samija/slika16.jpg";
import Samija5 from "../assets/samija/slika25.jpg";
import Samija6 from "../assets/samija/slika26.jpg";
import Samija7 from "../assets/samija/slika27.jpg";

const RozajskaSamija = () => {
    return (
        <>
            <div className="bg-green-950 h-[250px] text-[4.5rem] flex justify-center items-center font-roboto text-green-100">
                <Header title="Rožajska Šamija"/>
            </div>
            <section className="flex flex-col md:flex-row gap-6 w-[80%] mx-auto py-12">
                <div className="flex flex-col items-center justify-evenly gap-6" style={{flex: 2}}>
                        <motion.p initial={{y:50, opacity: 0}}
                                  whileInView={{y:0, opacity: 1}}
                                  transition={{duration: 1}}
                                  className="text-xl">
                            Šamija je dio nošnje kod bošnjačke ženske populacije i kulturno nasljeđe rožajskog  kraja, a korišćena je za pokrivanje glave. Nosila se tokom  XIX i početkom XX vijeka. Izrađene od raznih materijala, između ostalih i od pamuka i svile bijele boje. Šamije su ivicama ukrašavane ručno izvezenim ojicama, prišivane na sve četiri strane.
                        </motion.p>
                        <motion.p initial={{y:50, opacity: 0}}
                                  whileInView={{y:0, opacity: 1}}
                                  transition={{duration: 1}}
                                  className="text-xl">
                            Šamije su, kao nešto posebno i važno u rožajskom kraju, darivane na peškeš, izrađene od najboljih materijala, nasložene i zavijene u papir da se ne umehraju (izgužvaju). Deponovane su u seharama i čuvane za posebne prilike. Mlađe i starije žene su nosile šamiju sa ojicama u svečanim prilikama: svadbama, mevludima i sunetima.
                        </motion.p>
                </div>
                <div style={{flex: 2}} className="w-full flex justify-center">
                    <motion.img src={Samija1}
                                initial={{y:50, opacity: 0}}
                                whileInView={{y:0, opacity: 1}}
                                transition={{duration: 1}}
                                className="w-full md:w-[500px] object-cover"
                                alt="šamija"/>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row gap-6 w-[80%] mx-auto py-12">
                <div style={{flex: 1}}>
                    <motion.img src={Samija2}

                                initial={{y:50, opacity: 0}}
                                whileInView={{y:0, opacity: 1}}
                                transition={{duration: 1}}
                                className="w-full object-cover"
                                alt="šamija"/>
                </div>
                <div className="flex flex-col items-center justify-evenly gap-6" style={{flex: 1}}>
                    <motion.p initial={{y:50, opacity: 0}}
                                whileInView={{y:0, opacity: 1}}
                                transition={{duration: 1}}
                                className="text-xl">
                        Djevojke i mlađe žene u rožajskom kraju su nosile šamiju savijenu na pero, njene krajeve ukrštale na potiljku, pa ih vraćale i vezivale na vrh glave, dok su starije žene krajeve  ukrštale ispod brade i kačile ih sa strane.Takođe, su nosile mali fes, preko kojeg se stavljala šamija.
                    </motion.p>
                </div>
                <div style={{flex: 1}}>
                <motion.img src={Samija3}
                            initial={{y:50, opacity: 0}}
                            whileInView={{y:0, opacity: 1}}
                            transition={{duration: 1}}
                            className="object-cover"
                            alt="šamija"/>
                </div>
            </section>
            <section className="flex flex-col md:flex-row gap-6 w-[80%] mx-auto py-12">
                <div style={{flex: 2}} className="w-full flex justify-center">
                    <motion.img src={Samija4}
                                initial={{y:50, opacity: 0}}
                                whileInView={{y:0, opacity: 1}}
                                transition={{duration: 1}}
                                className="w-full md:w-[500px] object-cover"
                                alt="šamija"/>


                </div>
                <div className="flex flex-col items-center justify-evenly gap-6" style={{flex: 2}}>
                    <motion.p initial={{y:50, opacity: 0}}
                              whileInView={{y:0, opacity: 1}}
                              transition={{duration: 1}}
                              className="text-xl">
                        Ojice su ukrasne čipke na šamiji. Izrađuju se iglom i svilenim koncem. Ovaj naziv karakterističan je samo za naše krajeve. Ojicama se ukrašavaju rubovi različitih šamija, onih što se nose svakodnevno, i onih za svečane, posebne prilike. Znanja, umeća i veštine izrade ojica se prenosilo s koljena na koljeno, tako da je kćerka znala kako je majka izrađivala iste.
                    </motion.p>
                    <motion.p initial={{y:50, opacity: 0}}
                              whileInView={{y:0, opacity: 1}}
                              transition={{duration: 1}}
                              className="text-xl">
                        Vještina izrade ojica prenosila se s generacije na generaciju, te je postala neizostavni deo tradicije narodne nošnje ovog kraja. Da bi se ovakav jedan element našao na listi nematerijalnog kulturnog nasljeđa bitno je da živi, odnosno da traje kroz istoriju, a i da do danas traje, mada je ostao samo još kod starih  žena. Ova tradicija polako nestaje, ali je zato naš Zavičajni  muzej tu da posjeti na stara dobra vremena, kad je narodna nošnja krasila ženu i činila je jako ponosnom.
                    </motion.p>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] mx-auto py-12">
                <motion.p initial={{y:50, opacity: 0}}
                            whileInView={{y:0, opacity: 1}}
                            transition={{duration: 1}}
                            className="text-xl">
                    Za starije žene obavezna je bila i velika šamija ”namazbes” kojom bi  se pokrivala žena prilikom izlaska iz kuće.
            </motion.p>
            <motion.p initial={{y:50, opacity: 0}}
                      whileInView={{y:0, opacity: 1}}
                      transition={{duration: 1}}
                      className="text-xl">
                Žene iz grada su imale tepeluk izvezen biserima i zlatom, a što su materijalne mogućnosti bile veće, tako su i šamije bile “bogatije” izrađene i ukrašene.
            </motion.p>
            <motion.p initial={{y:50, opacity: 0}}
                      whileInView={{y:0, opacity: 1}}
                      transition={{duration: 1}}
                      className="text-xl">
                U kolekciji ženske nošnje Zavičajnog muzeja ”Ganića Kula” Rožaje, čuva se nekoliko primjeraka šamija sa i bez ojica.
            </motion.p>
            <motion.p initial={{y:50, opacity: 0}}
                      whileInView={{y:0, opacity: 1}}
                      transition={{duration: 1}}
                      className="text-xl">
                Rožajska  šamija sa ojicama je nematerijalno kulturno nasljeđe rožajskog kraja, koje treba da bude  nematerijalno kulturno dobro Crne Gore.
            </motion.p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%] mx-auto py-12">
                <motion.img src={Samija7}
                            initial={{y:50, opacity: 0}}
                            whileInView={{y:0, opacity: 1}}
                            transition={{duration: 1}}
                            className="object-cover"
                            alt="šamija"/>
                <motion.img src={Samija6}
                            initial={{y:50, opacity: 0}}
                            whileInView={{y:0, opacity: 1}}
                            transition={{duration: 1}}
                            className="object-cover"
                            alt="šamija"/>
                <motion.img src={Samija5}
                            initial={{y:50, opacity: 0}}
                            whileInView={{y:0, opacity: 1}}
                            transition={{duration: 1}}
                            className="object-cover"
                            alt="šamija"/>
            </section>
        </>
    )
}

export default RozajskaSamija