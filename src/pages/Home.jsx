import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initialPerson } from "../helpers/FakeBackend/UserDataList.jsx";
import { allNewsList } from "../helpers/NewsList/AllNewsList.jsx";
import axios from "axios";
import "../styles/Home.css";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts/flaggedPosts"
                );
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("pl-PL", { month: "long" });
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");

        return `${day} ${month} ${year}, ${hours}:${minutes}`;
    };

    return (
        <div className="homePage">
            <div className="welcomeContainer">
                <h1>Cześć {initialPerson[0].firstName}!</h1>
                <p>Miło Cię widzieć!</p>
            </div>
            <ul className="mainNewsContainer">
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link to={post.path}>
                            <img src={`http://localhost:5000/${post.image}`} />
                            <div className="textOverlay">
                                <h2 className="newsTitle">{post.title}</h2>
                                <p className="newsDate">
                                    {formatDate(post.publishedDate)}
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
