import React from "react";
import { Link } from "react-router-dom";
import { initialPerson } from "../helpers/UserDataList.jsx";
import "../styles/Home.css";

function Home() {
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
