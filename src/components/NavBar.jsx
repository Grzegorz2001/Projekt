import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
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
        <div className="navBar">
            <div className="leftSide" id={reorderOpen ? "open" : "close"}>
                <button onClick={logoButton}>
                    <img src={logo}></img>
                </button>
                <div className="hiddenLinks">
                    <a>
                        <Link to="/">Strona Główna</Link>
                    </a>
                    <a>
                        <Link to="/news">Aktualności</Link>
                    </a>
                    <a>
                        <Link to="/about">O nas</Link>
                    </a>
                    <a>
                        <Link to="/contact">Kontakt</Link>
                    </a>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Strona Główna</Link>
                <Link to="/news">Aktualności</Link>
                <Link to="/about">O nas</Link>
                <Link to="/contact">Kontakt</Link>
                <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
