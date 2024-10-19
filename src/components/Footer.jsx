import React from "react";
import logo_p1 from "../assets/logo_p1.png";
import logo_p2 from "../assets/logo_p2.png";
import logo_pk from "../assets/logo_pk.png";
import logo_pp from "../assets/logo_pp.png";
import logo_fpd_bg from "../assets/logo_fpd_bg.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="ourPagesLinks">
                <a href="//tvpuls.pl">
                    <img src={logo_p1} alt="TV Puls"></img>
                </a>
                <a href="//puls2.pl">
                    <img src={logo_p2} alt="PULS2"></img>
                </a>
                <a href="//pulskids.pl">
                    <img src={logo_pk} alt="Puls Kids"></img>
                </a>
                <a href="//playpuls.pl">
                    <img src={logo_pp} alt="Play Puls"></img>
                </a>
                <a href="//fundacjapoddebem.pl">
                    <img src={logo_fpd_bg} alt="Fundacja Pod Dębem"></img>
                </a>
            </div>
            <div className="socialMediaLinks">
                <a href="https://www.instagram.com/telewizjapuls_official/">
                    <InstagramIcon />
                </a>
                <a href="https://www.youtube.com/user/PulsTelewizja">
                    <YouTubeIcon />
                </a>
                <a href="https://www.facebook.com/tvpulspl">
                    <FacebookIcon />
                </a>
            </div>
            <p>&copy; Telewizja Puls Sp.z o.o. 2024</p>
        </div>
    );
}

export default Footer;
