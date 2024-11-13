import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form.jsx";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../styles/News.css";

function News() {
    const [isAddFormShown, setIsAddFormShown] = useState(false);
    const handleShowAddFormClick = () => setIsAddFormShown(true);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts"
                );
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchArticles();
    }, []);

    function handleDelete(index) {
        const confirmDelete = window.confirm(
            "Czy napewno chcesz trwale usunąć ten post?"
        );

        if (confirmDelete) {
            setPosts(posts.filter((_, i) => i !== index));
        }
    }

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
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post._id}>
                            <div className="newsContent">
                                {post.image}
                                <div className="textContent">
                                    <DeleteForeverIcon
                                        className="deleteButton"
                                        onClick={() => handleDelete(post.id)}
                                    />
                                    <h1 className="newsTitle">{post.title} </h1>
                                    <h3 className="newsDate">
                                        {post.publishedDate}
                                    </h3>
                                    <p>
                                        {post.text
                                            ? post.text.substring(0, 80) + "..."
                                            : ""}
                                    </p>
                                    <Link className="readMore">
                                        Czytaj więcej
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>Brak postów do wyświetlenia</p>
                )}
            </ul>
        </div>
    );
}

export default News;
