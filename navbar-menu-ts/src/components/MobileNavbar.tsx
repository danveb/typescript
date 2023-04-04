import { Link } from "react-router-dom"; 
import chevronRight from "../assets/mobileNavbar/chevron-right.svg"; 
import "../styles/MobileNavbar.css"; 

const navLinks = [
    {
        id: 1, 
        text: "About", 
        path: "/about", 
    },
    {
        id: 2, 
        text: "Clubs", 
        path: "/clubs", 
    },
    {
        id: 3, 
        text: "FAQ", 
        path: "/faq", 
    },
    {
        id: 4, 
        text: "Contact", 
        path: "/contact", 
    },
]; 

interface openProps {
    menuOpen: boolean; 
    setMenuOpen: (menuOpen: boolean) => void; 
}; 

export default function MobileNavbar({ menuOpen, setMenuOpen }: openProps) {
    return (
        <nav className={"mobile__navbar " + (menuOpen && "active")}>
            <div className="mobile__menu">
                <ul>
                    {navLinks.map((link)=> (
                        <li key={link.id}>
                            <Link to={`${link.path}`} onClick={()=> setMenuOpen(!menuOpen)}>{link.text}
                                <img src={chevronRight} alt="chevron right arrow" /> 
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
