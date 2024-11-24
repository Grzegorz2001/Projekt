import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initialPerson } from "../helpers/FakeBackend/UserDataList.jsx";
import { formatDate } from "../helpers/formatDate.jsx";
import axios from "axios";
import KudosForm from "../components/KudosForm.jsx";
import "../styles/Home.css";

function Home() {
    const [isAddFormShown, setIsAddFormShown] = useState(false);
    const handleShowAddFormClick = () => setIsAddFormShown(true);

    const [posts, setPosts] = useState([]);
    const [kudos, setKudos] = useState([]);

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

    useEffect(() => {
        const fetchKudos = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/kudos/latest"
                );
                setKudos(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchKudos();
    }, []);

    return (
        <div className="homePage">
            <div className="welcomeContainer">
                <h1>Cześć {initialPerson[0].firstName}!</h1>
                <p>Miło Cię widzieć!</p>
            </div>
            <ul className="mainNewsContainer">
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post._id} className="newsList">
                            <Link to={`/news/${post._id}`}>
                                <img
                                    className="newsImage"
                                    src={`http://localhost:5000/${post.image}`}
                                />
                                <div className="textOverlay">
                                    <h2 className="newsTitle">{post.title}</h2>
                                    <p className="newsDate">
                                        {formatDate(post.publishedDate)}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))
                ) : (
                    <p></p>
                )}
            </ul>
            <div className="kudosAndCalendarContainer">
                <ul>
                    <div className="kudosContainer">
                        <h1>Kudosy</h1>
                        <div className="addKudos">
                            {isAddFormShown ? (
                                <KudosForm />
                            ) : (
                                <button
                                    onClick={handleShowAddFormClick}
                                    className="addKudosButton"
                                >
                                    Dodaj kudosa
                                </button>
                            )}
                        </div>
                        {Array.isArray(kudos) && kudos.length > 0 ? (
                            kudos.map((kudo) => (
                                <li key={kudo._id}>
                                    <div className="kudosList">
                                        <p className="kudosText">{kudo.text}</p>
                                        <p className="kudosDate">
                                            {formatDate(kudo.publishedDate)}
                                        </p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p></p>
                        )}
                        <Link to={`/kudos`} className="showAllKudos">
                            Pokaż wszystkie...
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Home;
