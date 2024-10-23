import React from "react";
import { Link } from "react-router-dom";
import logo_p1 from "../assets/logo_p1.png";
import logo_p2 from "../assets/logo_p2.png";
import logo_pk from "../assets/logo_pk.png";
import logo_pp from "../assets/logo_pp.png";
import logo_fpd_bg from "../assets/logo_fpd_bg.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";
import { patch } from "@mui/material";

const ourTVLinks = [
    {
        title: "TV Puls",
        image: <img src={logo_p1} alt="TV Puls"></img>,
        path: "//tvpuls.pl",
    },
    {
        title: "PULS 2",
        image: <img src={logo_p2} alt="PULS2"></img>,
        path: "//puls2.pl",
    },
    {
        title: "Puls Kids",
        image: <img src={logo_pk} alt="Puls Kids"></img>,
        path: "//pulskids.pl",
    },
    {
        title: "Play Puls",
        image: <img src={logo_pp} alt="Play Puls"></img>,
        path: "//playpuls.pl",
    },
    {
        title: "Fundacja Pod Dębem",
        image: <img src={logo_fpd_bg} alt="Fundacja Pod Dębem"></img>,
        path: "//fundacjapoddebem.pl",
    },
];

const ourSocialMediaLinks = [
    {
        image: <InstagramIcon />,
        path: "https://www.instagram.com/telewizjapuls_official/",
    },
    {
        image: <YouTubeIcon />,
        path: "https://www.youtube.com/user/PulsTelewizja",
    },
    {
        image: <FacebookIcon />,
        path: "https://www.facebook.com/tvpulspl",
    },
];

function Footer() {
    return (
        <div className="footer">
            <ul className="ourPagesLinks">
                {ourTVLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.image}</Link>
                    </li>
                ))}
            </ul>
            <ul className="socialMediaLinks">
                {ourSocialMediaLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.image}</Link>
                    </li>
                ))}
            </ul>
            <p>&copy; Telewizja Puls Sp.z o.o. 2024</p>
        </div>
    );
}

export default Footer;
