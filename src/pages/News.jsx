import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allNewsList } from "../helpers/NewsList/AllNewsList.jsx";
import Form from "../components/Form.jsx";
import "../styles/News.css";

const News = () => {
    const [isAddFormShown, setIsAddFormShown] = useState(false);
    const handleShowAddFormClick = () => setIsAddFormShown(true);

    const [articles, setArticles] = useState(allNewsList);

    const addArticle = (newArticle) => {
        setArticles([...articles, newArticle]);
    };

    return (
        <div className="newsPage">
            <ul className="allNewsContainer">
                <div className="addPost">
                    {isAddFormShown ? (
                        <Form addArticle={addArticle} />
                    ) : (
                        <button onClick={handleShowAddFormClick}>
                            Dodaj post
                        </button>
                    )}
                </div>
                {articles.map((link, index) => (
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
};

export default News;
