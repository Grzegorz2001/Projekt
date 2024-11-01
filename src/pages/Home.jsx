import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { initialPerson } from "../helpers/FakeBackend/UserDataList.jsx";
import { allNewsList } from "../helpers/NewsList/AllNewsList.jsx";
import "../styles/Home.css";

function Home() {
    return (
        <div className="homePage">
            <div className="welcomeContainer">
                <h1>Cześć {initialPerson[0].firstName}!</h1>
                <p>Miło Cię widzieć!</p>
            </div>
            <ul className="mainNewsContainer">
                {allNewsList
                    .filter((link) => link.flag)
                    .map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>
                                {link.image}
                                <div className="textOverlay">
                                    <h2 className="newsTitle">{link.title}</h2>
                                    <p className="newsDate">
                                        {link.publishedDate}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
            <div className="latestNewsContainer"></div>
        </div>
    );
}

export default Home;
