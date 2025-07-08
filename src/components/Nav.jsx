import { useState } from "react"

const Nav = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const handleClick = (anchorName, e) => {
        e.preventDefault();
        setActiveLink(anchorName);
    };

    const getAnchorClasses = (anchorName) => {
        const baseClasses = "hover:text-yellow-300 transition-colors text-md duration-200";
        const activeClasses = "underline text-yellow-400 ";

        return `${baseClasses} ${activeLink === anchorName ? activeClasses + 'aria-current="page"' : '' }`

    }
    

    return (
        <nav className="bg-black p-5 flex justify-between items-center gap-10 px-15 ">
            <div>
                <a href="#" className="text-white hover:text-amber-200 text-5xl font-semibold tracking-tight text-balance sm:text-5xl">W.</a>
            </div>

            <div className="text-white mx-2 flex gap-x-5 text-2xl">
                <button href="#" 
                // className="hover:text-amber-200"
                onClick={(e) => handleClick('Home', e)}
                className ={getAnchorClasses('Home')}
                >
                    Home
                </button>

                <button href="#About" 
                // className="hover:text-amber-200"
                onClick={(e) => handleClick('About', e)}
                className ={getAnchorClasses('About')}
                >
                    About
                </button>

                <button href="#Port" 
                // className="hover:text-amber-200"
                onClick={(e) => handleClick('Port', e)}
                className ={getAnchorClasses('Port')}
                >
                    Portfolio
                </button>

                <button href="#Client" 
                onClick={(e) => handleClick('Client', e)}
                className ={getAnchorClasses('Client')}
                >
                    Client
                </button>
            </div>

            <div className="text-white text-2xl">
                <button 
                onClick={(e) => handleClick('ContactMe', e)}
                className ={getAnchorClasses('ContactMe')}
                >Contact Me </button>
            </div>


        </nav>
    )




}

export default Nav