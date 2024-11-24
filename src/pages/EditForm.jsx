import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EditForm.css";

function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [text, setText] = useState("");
    const [flag, setFlag] = useState(false);
    const [eventDate, setEventDate] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/posts/${id}`
                );
                setPost(response.data);
                setTitle(response.data.title);
                setText(response.data.text);
                setFlag(response.data.flag);
                setEventDate(response.data.eventDate);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPost();
    }, [id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const moveTo = useNavigate();

    const handlePublish = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);
            formData.append("publishedDate", new Date());
            formData.append("text", text);
            formData.append("flag", flag);
            formData.append("eventDate", eventDate);

            await axios.put(`http://localhost:5000/api/posts/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            moveTo("/news");
            alert("Post został zaktualizowany!");
        } catch (error) {
            console.error(error);
        }
    };

    if (!post) {
        return <div>Trwa ładowanie posta...</div>;
    }

    return (
        <form onSubmit={handlePublish} className="addPostForm">
            <label htmlFor="imageInput">
                <h2>Dodaj nowe foto!</h2>
            </label>
            <input
                id="imageInput"
                className="imageInput"
                type="file"
                onChange={handleImageChange}
                accept="image"
                name="image"
            />
            {imageUrl && <img src={imageUrl} alt="Podgląd" width="200" />}

            <label htmlFor="postTitle">
                <h3>Tytuł:</h3>
            </label>
            <textarea
                id="postTitle"
                className="titleInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="postTitle"
                placeholder="Tytuł"
            />

            <label htmlFor="postText">
                <h3>Treść:</h3>
            </label>
            <textarea
                id="postText"
                className="textInput"
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                name="postText"
                placeholder="Treść"
            />

            <label htmlFor="eventDate">Możesz dodać datę wydarzenia</label>
            <input
                type="datetime-local"
                id="eventDate"
                name="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
            ></input>

            <label htmlFor="flagCheck">
                <input
                    id="flagCheck"
                    type="checkbox"
                    checked={flag}
                    onChange={(e) => setFlag(e.target.checked)}
                />
                Umieść na stronie głównej
            </label>

            <div className="publishButtonContainer">
                <button
                    className="publishButton"
                    disabled={
                        title.length === 0 ||
                        text.length === 0 ||
                        image === null
                    }
                    type="submit"
                >
                    Opublikuj
                </button>
            </div>
        </form>
    );
}
export default EditPost;
