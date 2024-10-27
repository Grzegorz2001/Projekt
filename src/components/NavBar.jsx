import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import { pagesLinks } from "./NavBarItems";
import "../styles/NavBar.css";

function NavBar() {
    const [reorderOpen, setReorderOpen] = useState(false);

    const toggleNavBar = () => {
        setReorderOpen(!reorderOpen);
    };

    const logoButton = () => {
        window.location.href = "/";
    };

    return (
        <nav className="navBar">
            <div className="leftSide" id={reorderOpen ? "open" : "close"}>
                <button onClick={logoButton}>
                    <img src={logo}></img>
                </button>
                <ul className="hiddenLinks">
                    {pagesLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rightSide">
                {pagesLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
