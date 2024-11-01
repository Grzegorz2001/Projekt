import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allNewsList } from "../helpers/NewsList/AllNewsList.jsx";
import Form from "../components/Form.jsx";
import "../styles/News.css";

function News() {
    const [isAddFormShown, setIsAddFormShown] = useState(false);
    const handleShowAddFormClick = () => setIsAddFormShown(true);

    return (
        <div className="newsPage">
            <ul className="allNewsContainer">
                <div className="addPost">
                    {isAddFormShown ? (
                        <Form />
                    ) : (
                        <button onClick={handleShowAddFormClick}>
                            Dodaj post
                        </button>
                    )}
                </div>
                {allNewsList.map((link, index) => (
                    <li key={index}>
                        <div className="newsContent">
                            {link.image}
                            <div className="textContent">
                                <h1 className="newsTitle">{link.title}</h1>
                                <h3 className="newsDate">
                                    {link.publishedDate}
                                </h3>
                                <p>{link.text.substring(0, 80)}...</p>
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
