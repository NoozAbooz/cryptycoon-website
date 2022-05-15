import React,{ useState } from "react"
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click) ;
    return(
        <div>
            <header>
                <nav class="navbar">
                <a class="active" className="here1" href="/" >Home</a>
                <span> </span>
                <a href="/IDK1">Docs</a>
                <span> </span>
                <a href="/IDK2">Ladder</a>
                <span> </span>
                <a href="#">About Us</a>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;
