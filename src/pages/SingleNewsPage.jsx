import React from "react";
import { allNewsList } from "../helpers/NewsList/AllNewsList.jsx";
import { useParams } from "react-router-dom";
import "../styles/SingleNewsPage.css";

function SingleNewsPage() {
    const { id } = useParams();
    const element = allNewsList.find((elm) => elm.id === Number(id));

    return (
        <div className="newsSingleContent">
            {element.image}
            <div className="textSingleContent">
                <h1 className="newsTitle">{element.title}</h1>
                <h3 className="newsDate">{element.publishedDate}</h3>
                <p>{element.text}</p>
            </div>
        </div>
    );
}

export default SingleNewsPage;
