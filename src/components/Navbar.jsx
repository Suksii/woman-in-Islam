import {Link} from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {useState} from "react";

const Navbar = () => {

    const navMenu = [
        {
            id: 1,
            name: 'Početna',
            path: '/'
        },
        {
            id: 2,
            name: 'O islamu',
            path: '/o-islamu'
        },
        {
            id: 3,
            name: 'Položaj žena u islamu',
            path: '/polozaj-zena-u-islamu'
        },
        {
            id: 4,
            name: 'Porodica i brak',
            path: '/porodica-i-brak'
        }
    ]

    const [toggle, setToggle] = useState(false)

    return(
        <>
            <nav className="hidden md:flex justify-center absolute py-3 pr-[10vw] items-center w-full">
                <div className="flex gap-10 items-center">
                    {
                        navMenu.map((item) =>{
                            return (
                                <Link key={item.id} to={item.path}>
                                    <h2 className="text-lg uppercase font-semibold hover:scale-105 duration-200 font-roboto text-green-300">{item.name}</h2>
                                </Link>
                            )
                        })
                    }
                </div>
            </nav>
            <nav className="flex md:hidden justify-end bg-green-950 py-2 items-center w-full px-3">
                <div onClick={() => setToggle(prev => !prev)} className={`cursor-pointer ${toggle ? 'rotate-180' : ''} duration-1000`}>
                    {
                        toggle ? <IoMdClose className="text-xl text-green-300"/> : <CiMenuFries className="text-xl text-green-300"/>
                    }
                </div>
            </nav>
            <div className={`md:hidden flex flex-col items-center justify-between absolute bg-green-950 w-full left-0 right-0 top-0] ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[40rem] opacity-0'} duration-1000 z-50`}>
                {
                    navMenu.map((item) =>{
                        return (
                            <Link to={item.path} key={item.id} onClick={() => setToggle(false)}>
                                <h2 className="text-lg uppercase font-semibold py-6 text-center text-green-300 hover:text-green-100 duration-500 font-roboto">{item.name}</h2>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Navbar;