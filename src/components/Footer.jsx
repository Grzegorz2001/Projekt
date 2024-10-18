import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

function Footer() {
    const instagramButton = () => {
        window.open("https://www.instagram.com/telewizjapuls_official/");
    };

    const youTubeButton = () => {
        window.open("https://www.youtube.com/user/PulsTelewizja");
    };

    const facebookButton = () => {
        window.open("https://www.facebook.com/tvpulspl");
    };

    return (
        <div className="footer">
            <div className="socialMedia">
                <button onClick={instagramButton}>
                    <InstagramIcon />
                </button>
                <button onClick={youTubeButton}>
                    <YouTubeIcon />
                </button>
                <button onClick={facebookButton}>
                    <FacebookIcon />
                </button>
            </div>
            <p>&copy; Telewizja Puls Sp.z o.o. 2024</p>
        </div>
    );
}

export default Footer;
