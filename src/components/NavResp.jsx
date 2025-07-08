import { useState } from "react";

const NavResp = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleClick = (anchorName, e) => {
        e.preventDefault();
        setActiveLink(anchorName);
        setMobileMenuOpen(false); // Close mobile menu when a link is clicked
    };

    const getAnchorClasses = (anchorName) => {
        const baseClasses = "hover:text-yellow-300 transition-colors duration-200";
        const activeClasses = "underline text-yellow-400";
        return `${baseClasses} ${activeLink === anchorName ? activeClasses : ''}`;
    }

    return (
        <nav className="bg-black p-4 md:p-5">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-white hover:text-amber-200 text-3xl md:text-5xl font-semibold tracking-tight">
                    W.
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-5">
                    <div className="text-white flex gap-x-5 text-xl md:text-2xl">
                        <button 
                            onClick={(e) => handleClick('Home', e)}
                            className={getAnchorClasses('Home')}
                        >
                            Home
                        </button>
                        <button 
                            onClick={(e) => handleClick('About', e)}
                            className={getAnchorClasses('About')}
                        >
                            About
                        </button>
                        <button 
                            onClick={(e) => handleClick('Port', e)}
                            className={getAnchorClasses('Port')}
                        >
                            Portfolio
                        </button>
                        <button 
                            onClick={(e) => handleClick('Client', e)}
                            className={getAnchorClasses('Client')}
                        >
                            Client
                        </button>
                    </div>

                    <div className="text-white text-xl md:text-2xl">
                        <button 
                            onClick={(e) => handleClick('ContactMe', e)}
                            className={getAnchorClasses('ContactMe')}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black py-4 px-2">
                    <div className="flex flex-col gap-4 text-xl">
                        <button 
                            onClick={(e) => handleClick('Home', e)}
                            className={`${getAnchorClasses('Home')} py-2`}
                        >
                            Home
                        </button>
                        <button 
                            onClick={(e) => handleClick('About', e)}
                            className={`${getAnchorClasses('About')} py-2`}
                        >
                            About
                        </button>
                        <button 
                            onClick={(e) => handleClick('Port', e)}
                            className={`${getAnchorClasses('Port')} py-2`}
                        >
                            Portfolio
                        </button>
                        <button 
                            onClick={(e) => handleClick('Client', e)}
                            className={`${getAnchorClasses('Client')} py-2`}
                        >
                            Client
                        </button>
                        <button 
                            onClick={(e) => handleClick('ContactMe', e)}
                            className={`${getAnchorClasses('ContactMe')} py-2`}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavResp;