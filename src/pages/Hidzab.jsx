import {motion} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import {useRef} from "react";
const Hidzab = () => {

    const sectionRef = useRef([])

    const aboutIslamSections = [
        {
            id: 1,
            title: 'Šta je hidžab?',
            descriptions: [
                {
                    id: 1,
                    description:<div>Hidžab je izraz koji se koristi za različite oblike pokrivanja tijela kod muslimanskih žena, a najčešće se odnosi na veo koji pokriva kosu, vrat i ponekad ramena, dok lice ostaje otkriveno. Značenje i svrha hidžaba se može odrediti kroz sledeće principe:<br/>- Vjerski princip: u islamu, hidžab se smatra oblikom ispunjavanja vjerske dužnosti prema Bogu (Allahu),  žene koje nose hidžab često to čine kao izraz svoje vjere i predanosti islamskim vrijednostima.<br/>- Skromnost: hidžab simbolizuje skromnost i čednost, u islamskom učenju, skromnost nije samo vezana za način oblačenja, već i za ponašanje i stav prema drugim ljudima.<br/>- Identitet: za mnoge žene, hidžab predstavlja identitet i pripadnost muslimanskoj zajednici, nošenje hidžaba može biti način da se izrazi svoja vjera i povezanost s islamskom kulturom.<br/>- Zaštita: u islamskom kontekstu, hidžab se često tumači kao sredstvo zaštite žena od nepoželjne pažnje i kao način da se sačuva njihova čednost u javnom prostoru.</div>
                },
                {
                    id: 2,
                    description:<div>Imamo različite oblike pokrivanja kao što su: <br/><strong>- hidžab:</strong> koji se obično  odnosi na maramu koja pokriva kosu i vrat, dok lice ostaje otkriveno, <br/><strong>- nikab:</strong> pokriva lice, ostavljajući samo oči vidljivim,<br/><strong>- čador:</strong> ogrtač koji pokriva celo telo, često se nosi u Iranu, <br/><strong>- burka:</strong> pokriva cijelo tijelo, uključujući lice, sa mrežastim otvorom za oči.<br/>Praksa nošenja hidžaba varira širom muslimanskog svijeta, i često zavisi od kulturnih, društvenih i individualnih faktora. U nekim zemljama, hidžab je zakonom obavezan, dok je u drugim izbor žene. Sve u svemu, hidžab ima bogatu simboliku i različito značenje za žene koje ga nose, od vjerske obaveze do ličnog izraza i identiteta.</div>
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
            title: 'Socijalni eksperimenti prema muslimankama sa hidžabom',
            descriptions: [
                {
                    id: 1,
                    description:'Socijalni eksperimenti prema muslimankama koje nose hidžab često su sprovođeni u različitim društvenim kontekstima kako bi se istražila percepcija, predrasude i diskriminacija s kojima se te žene mogu suočiti. Ovi eksperimenti se obično izvode kako bi se podigla svest o islamofobiji, rasizmu, i drugim oblicima netrpeljivosti u društvu. Evo nekoliko primjera i njihovih rezultata:'
                },
                {
                    id: 2,
                    description:<div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Primjer 1: Verbalnim napadima</h3>
                        <p className="pl-6">U ovim eksperimentima, glumci ili istraživači simuliraju situacije u kojima se muslimanka s hidžabom suočava s verbalnim napadima u javnosti. Cilj ovih eksperimenata je posmatranje reakcija prolaznika, tj. da li će intervenisati, ignorisati, ili se složiti s napadačem. U nekim slučajevima,  ljudi su intervenisali kako bi zaštitili muslimanku, što pokazuje solidarnost i podršku. Međutim, u drugim slučajevima, prolaznici su ignorisali situaciju ili čak pokazivali slaganje s napadačem, što ukazuje na latentnu ili otvorenu islamofobiju u društvu.
                        </p>
                    </div>
                },
                {
                    id: 3,
                    description:<div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Primjer 2:  Pruzanje usluga</h3>
                        <p className="pl-6">Ovaj tip eksperimenta se izvodi tako što se muslimanka s hidžabom suočava s diskriminacijom prilikom traženja usluge, poput iznajmljivanja stana, dobijanja posla ili usluge u prodavnici. U nekim eksperimentima, muslimanke su doživljavale direktnu diskriminaciju, poput odbijanja usluge ili lošijeg tretmana u poređenju s drugim ljudima. U drugim slučajevima, eksperiment je otkrio da su muslimanke tretirane s poštovanjem i uvažavanjem, što ukazuje na razlike u kulturnoj senzitivnosti među pojedincima ili zajednicama.
                        </p>
                    </div>
                },
                {
                    id: 4,
                    description:<div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Primjer 3: Žena u javnom prevozu</h3>
                        <p className="pl-6">U ovom tipu eksperimenta, muslimanka s hidžabom ulazi u javni prevoz i prati se kako ljudi reaguju – da li izbegavaju sesti pored nje, upućuju neprijatne poglede ili komentare, ili se ponašaju normalno. U mnogim slučajevima, zabeleženo je da ljudi izbegavaju sesti pored muslimanke, pokazujući određenu distancu ili nelagodu. U drugim slučajevima, nije bilo primetne razlike u ponašanju prema muslimankama u poređenju s drugim putnicima, što sugeriše veći nivo prihvatanja. Socijalni eksperimenti prema muslimankama koje nose hidžab često otkrivaju postojanje predrasuda i diskriminacije u različitim društvenim sredinama. Iako postoji i solidarnost i podrška, ovi eksperimenti naglašavaju potrebu za većom edukacijom i svesnošću o različitostima, kao i borbu protiv islamofobije.
                        </p>
                    </div>
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
                }
            ]
        },
        {
            id: 3,
            title: 'Negativan medijski nastup prema ženama koje nose hidžab',
            descriptions: [
                {
                    id: 1,
                    description:'Negativan medijski nastup prema ženama koje nose hidžab često uključuje prikazivanje muslimanki na način koji pojačava stereotipe, predrasude, i netrpeljivost. Mediji mogu igrati značajnu ulogu u oblikovanju percepcije javnosti o određenim društvenim grupama, a u slučaju žena koje nose hidžab, ova uloga često može biti problematična. Evo nekoliko načina na koje mediji mogu negativno uticati na percepciju žena s hidžabom.'
                },
                {
                    id: 2,
                    description:'Mediji često predstavljaju žene koje nose hidžab kroz stereotipe. Ove žene mogu biti prikazane kao potlačene, neobrazovane, ili kao žrtve kulturnih i religijskih normi. Takvo prikazivanje može ojačati predrasude da su sve muslimanke koje nose hidžab neslobodne ili da su prisiljene da ga nose.'
                },
                {
                    id: 3,
                    description:'U mnogim slučajevima, žene s hidžabom su targetirane u medijima u kontekstu islamofobičnih narativa. To može uključivati povezivanje hidžaba s ekstremizmom, terorizmom, ili sa drugim negativnim konotacijama. Ovakvo prikazivanje može podstaći strah i netrpeljivost prema muslimanima uopšte.'
                },
                {
                    id: 4,
                    description:'U nekim zemljama, hidžab je postao političko pitanje, gde mediji koriste slike i priče o ženama s hidžabom kako bi podržali određene političke agende. Ovo može uključivati debate o zabranama nošenja hidžaba u javnim institucijama, kao što je bio slučaj u Francuskoj i nekim drugim evropskim zemljama.'
                },
                {
                    id: 5,
                    description:'Mediji mogu prikazivati hidžab kao simbol kulturnog sukoba između „zapadnih“ vrednosti i „tradicionalnih“ islamskih vrednosti. Žene koje nose hidžab često se prikazuju kao "drugačije" i kao da ne pripadaju zapadnim društvima, što može doprineti marginalizaciji i izolaciji. Pozitivne priče o ženama koje nose hidžab često se ignorišu ili minimalizuju u medijima. Umesto toga, naglasak je često na problemima ili kontroverzama povezanim s nošenjem hidžaba, dok se pozitivni doprinosi i uspesi muslimanki ne prikazuju dovoljno.'
                },
                {
                    id: 6,
                    description:'Mediji imaju moć da oblikuju percepciju javnosti i igraju ključnu ulogu u tome kako se muslimanke koje nose hidžab doživljavaju. Negativan medijski nastup može pojačati stereotipe i predrasude, ali s druge strane, odgovorno i inkluzivno izveštavanje može doprineti boljem razumevanju i smanjenju netrpeljivosti.'
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
                }
            ]
        },
        {
            id: 4,
            title: 'Predrasude prema ženama koje nose hidžab u Crnoj Gori',
            descriptions: [
                {
                    id: 1,
                    description:'Predrasude prema ženama koje nose hidžab u Crnoj Gori, kao i u mnogim drugim evropskim zemljama, mogu postojati, iako se manifestuju na različite načine u zavisnosti od specifičnog konteksta.'
                },
                {
                    id: 2,
                    description:'Crna Gora je država sa bogatom istorijom verske i kulturne raznolikosti, ali je takođe zemlja gde su muslimani, uključujući žene koje nose hidžab, manjina. U Crnoj Gori, muslimani čine manjinski deo populacije, što može doprinijeti manjku razumijevanja i kontakta sa muslimanskom zajednicom među većinskim stanovništvom. Ovakva situacija može potencijalno dovesti do predrasuda zbog neznanja ili nedostatka informacija. Kao i u drugim delovima Evrope, medijski prikazi muslimanki mogu uticati na stvaranje predrasuda. Ako su mediji skloni negativnim stereotipima ili islamofobičnim narativima, to može oblikovati stavove javnosti prema ženama koje nose hidžab.'
                },
                {
                    id: 3,
                    description:'Globalni događaji, kao što su teroristički napadi ili političke debate o islamu, mogu pojačati predrasude prema muslimanima u Crnoj Gori. Takvi događaji često dovode do porasta sumnje i straha prema muslimanima, uključujući i one koji nose hidžab. Stereotipi prema muslimankama mogu uključivati percepciju da su one potlačene, neprilagođene zapadnim vrednostima, ili da su na neki način povezane s radikalizmom, što nije utemeljeno na činjenicama. U Crnoj Gori ne postoje zakoni koji zabranjuju nošenje hidžaba, kao što je to slučaj u nekim evropskim zemljama. Međutim, socijalni stavovi i norme mogu varirati, i žene koje nose hidžab mogu se suočiti s implicitnim pritiskom ili predrasudama u svakodnevnom životu.'
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
                }
            ]
        },
        {
            id: 5,
            title: 'Esej o hidžabu',
            descriptions: [
                {
                    id: 1,
                    description:'Hidžab je mnogo više od običnog komada tkanine; on nosi duboku simboliku i slojevito značenje koje obuhvata vjerske, kulturne, društvene, i političke dimenzije. Kao jedan od najprepoznatljivijih aspekata islamske tradicije, hidžab izaziva različite reakcije širom svijeta, od poštovanja i divljenja do kritike i kontroverzi. Razumijevanje hidžaba zahtijeva uvažavanje njegove složenosti, kao i konteksta u kojem se on nosi. U islamskom učenju, hidžab se smatra izrazom skromnosti, stidljivosti, i posvećenosti vjeri. Kur,an, sveta knjiga muslimana, propisuje skromnost i muškarcima i ženama, a nošenje hidžaba je jedan od načina na koji se ovaj princip praktikuje. Hidžab pokriva kosu, vrat i ramena, ali njegovo značenje seže daleko izvan fizičkog pokrivanja. On simbolizuje unutrašnju pobožnost i moralnu čistoću, kao i svjesnu odluku žene da se pridržava vjerskih normi i vrijednosti.'
                },
                {
                    id: 2,
                    description:'Za mnoge žene koje nose hidžab, on predstavlja važan deo njihovog identiteta. Kroz hidžab, one izražavaju pripadnost islamskoj zajednici i svoju predanost vjerskim načelima. Hidžab može biti i sredstvo samopouzdanja, način na koji se žena odlučuje da se predstavi svijetu, odabravši skromnost kao svoj stil života. Praksa nošenja hidžaba značajno varira širom muslimanskog sveta, kao i među muslimanskim zajednicama u nemuslimanskim zemljama. U nekim zemljama, poput Saudijske Arabije ili Irana, nošenje hidžaba je obavezno i propisano zakonom, dok je u drugim državama, poput Turske ili Indonezije, to pre svega stvar ličnog izbora. U zapadnim zemljama, nošenje hidžaba često izaziva debatu o pitanjima slobode, integracije, i identiteta.'
                },
                {
                    id: 3,
                    description:'Međutim, mnoge žene koje nose hidžab ističu da je to njihov slobodan izbor i da hidžab predstavlja način na koji one ostvaruju svoju autonomiju i samoodređenje. One odbacuju tvrdnje da su hidžabom potčinjene, naglašavajući da je nošenje hidžaba oblik ličnog izraza i duhovnosti. Za ove žene, zabrane nošenja hidžaba predstavljaju kršenje njihovih prava i slobode izbora. U nekim slučajevima, hidžab je postao simbol otpora prema društvenim normama koje pokušavaju da nametnu uniformnost ili potisnu vjerske i kulturne različitosti. Žene koje se suočavaju s pritiscima da ne nose hidžab često odgovaraju jačanjem svog identiteta i odlučnošću da se pridržavaju svojih uverenja. U tom kontekstu, hidžab postaje simbol borbe za prava žena da same definišu svoj identitet i način života. Hidžab je složen i višedimenzionalan fenomen koji izaziva snažne emocije i reakcije. Za mnoge žene, on predstavlja duboko lični izraz vere, identiteta i skromnosti. Iako je često tema polemika i kontroverzi, važno je pristupiti hidžabu s razumevanjem i poštovanjem prema različitim perspektivama i iskustvima. U svetu u kojem se identiteti sve više prepliću i gde se granice između kultura i vjera postaju sve fluidnije, hidžab nas podseća na važnost prava na različitost i slobodu izbora.'
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
                          transition={{duration: 1}}>
                    Hidžab
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
                                <p className="text-center md:text-start line-clamp-[10]">{item.descriptions[0].description}</p>
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

export default Hidzab