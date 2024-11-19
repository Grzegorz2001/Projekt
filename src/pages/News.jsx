import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form.jsx";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { formatDate } from "../helpers/formatDate.jsx";
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

    const handleDelete = async (postID) => {
        const confirmDelete = window.confirm(
            "Czy napewno chcesz trwale usunąć ten post?"
        );

        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5000/api/posts/${postID}`);
                setPosts(posts.filter((post) => post._id !== postID));
                alert("Post został usunięty!");
            } catch (error) {
                console.error(error);
            }
        }
    };

    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filterPosts = posts.filter((post) => {
        const searchCondition = searchText.toUpperCase();
        return (
            post.title.toUpperCase().includes(searchCondition) ||
            post.text.toUpperCase().includes(searchCondition)
        );
    });

    return (
        <div className="newsPage">
            <ul className="allNewsContainer">
                <div className="searchBarContainer">
                    <input
                        className="searchBar"
                        type="text"
                        placeholder="Wyszukaj post..."
                        value={searchText}
                        onChange={handleSearch}
                    />
                </div>
                {searchText.length > 0 ? (
                    filterPosts.map((post) => (
                        <div key={post._id}>
                            <li key={post._id}>
                                <div className="newsContent">
                                    <Link to={`/news/${post._id}`}>
                                        <img
                                            src={`http://localhost:5000/${post.image}`}
                                        />
                                    </Link>
                                    <div className="textContent">
                                        <div className="manageButtons">
                                            <Link
                                                to={`/news/EditPost/${post._id}`}
                                            >
                                                <ModeEditIcon className="editButton" />
                                            </Link>
                                            <DeleteForeverIcon
                                                className="deleteButton"
                                                onClick={() =>
                                                    handleDelete(post._id)
                                                }
                                            />
                                        </div>
                                        <h1 className="newsTitle">
                                            {post.title}{" "}
                                        </h1>
                                        <h3 className="newsDate">
                                            {formatDate(post.publishedDate)}
                                        </h3>
                                        <p>
                                            {post.text
                                                ? post.text.substring(0, 80) +
                                                  "..."
                                                : ""}
                                        </p>
                                        <Link
                                            to={`/news/${post._id}`}
                                            className="readMore"
                                        >
                                            Czytaj więcej...
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
                <div className="addPost">
                    {isAddFormShown ? (
                        <Form />
                    ) : (
                        <button
                            onClick={handleShowAddFormClick}
                            className="addPostButton"
                        >
                            Dodaj post
                        </button>
                    )}
                </div>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post._id}>
                            <div className="newsContent">
                                <Link to={`/news/${post._id}`}>
                                    <img
                                        src={`http://localhost:5000/${post.image}`}
                                    />
                                </Link>
                                <div className="textContent">
                                    <div className="manageButtons">
                                        <Link to={`/news/EditPost/${post._id}`}>
                                            <ModeEditIcon className="editButton" />
                                        </Link>
                                        <DeleteForeverIcon
                                            className="deleteButton"
                                            onClick={() =>
                                                handleDelete(post._id)
                                            }
                                        />
                                    </div>
                                    <h1 className="newsTitle">{post.title} </h1>
                                    <h3 className="newsDate">
                                        {formatDate(post.publishedDate)}
                                    </h3>
                                    <p>
                                        {post.text
                                            ? post.text.substring(0, 80) + "..."
                                            : ""}
                                    </p>
                                    <Link
                                        to={`/news/${post._id}`}
                                        className="readMore"
                                    >
                                        Czytaj więcej...
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>Trwa ładowanie postów...</p>
                )}
            </ul>
        </div>
    );
}

export default News;
