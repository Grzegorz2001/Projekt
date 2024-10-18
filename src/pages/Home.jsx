import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    const initialPerson = [
        {
            firstName: "Grzegorz",
            secondName: "Łapiński",
            mail: "glapinski@warszawa.pl",
            login: "glapinski",
            password: "Polska!123",
        },
    ];

    return (
        <div className="homePage">
            <div className="headerContainer">
                <h1>Cześć {initialPerson[0].firstName}!</h1>
                <p>Miło Cię widzieć!</p>
            </div>
        </div>
    );
}

export default Home;
