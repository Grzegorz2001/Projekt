import React from "react";
import { Link } from "react-router-dom";
import { allNewsList } from "../helpers/NewsList/AllNewsList.jsx";
import "../styles/News.css";

function News() {
    return (
        <div className="newsPage">
            <ul className="allNewsContainer">
                {allNewsList.map((link, index) => (
                    <li key={index}>
                        <div className="newsContent">
                            {link.image}
                            <div className="textContent">
                                <h1 className="newsTitle">{link.title}</h1>
                                <h3 className="newsDate">
                                    {link.publishedDate}
                                </h3>
                                <p>{link.text}</p>
                                <Link to={link.path} className="readMore">
                                    Czytaj więcej
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;
