import React from "react";
import { Link } from "react-router-dom";
import { ourTVLinks, ourSocialMediaLinks } from "./FooterItems";
import "../styles/Footer.css";

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
