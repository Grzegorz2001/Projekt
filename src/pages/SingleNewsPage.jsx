import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../helpers/formatDate.jsx";
import "../styles/SingleNewsPage.css";

function SingleNewsPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/posts/${id}`
                );
                setPost(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Trwa ładowanie posta...</div>;
    }

    return (
        <div className="newsSingleContent">
            <img src={`http://localhost:5000/${post.image}`} />
            <div className="textSingleContent">
                <h1 className="newsTitle">{post.title}</h1>
                <h3 className="newsDate">{formatDate(post.publishedDate)}</h3>
                <p>{post.text}</p>
            </div>
        </div>
    );
}

export default SingleNewsPage;
