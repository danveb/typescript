import { useState } from "react"; 
import Navbar from "./components/Navbar"; 
import MobileNavbar from "./components/MobileNavbar";

export default function App() {
    // useState
    const [menuOpen, setMenuOpen] = useState<boolean>(false); 

    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    )
}