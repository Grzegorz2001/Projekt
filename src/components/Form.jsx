import React, { useState } from "react";
import axios from "axios";
import "../styles/Form.css";

function Form() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [text, setText] = useState("");
    const [flag, setFlag] = useState(false);

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

    const handlePublish = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);
            formData.append("publishedDate", new Date());
            formData.append("text", text);
            formData.append("flag", flag);

            await axios.post("http://localhost:5000/api/posts", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setTitle("");
            setImage(null);
            setImageUrl(null);
            setText("");
            setFlag(false);
            alert("Udało Ci się!");
        } catch (error) {
            console.error(error);
            alert("UPS! Coś poszło nie tak, spróbuj jeszcze raz!");
        }
    };

    return (
        <form onSubmit={handlePublish} className="addPostForm">
            <label htmlFor="imageInput">Dodaj jakieś fajne foto!</label>
            <input
                id="imageInput"
                className="imageInput"
                type="file"
                onChange={handleImageChange}
                accept="image"
                name="image"
            />
            {imageUrl && <img src={imageUrl} alt="Podgląd" width="200" />}

            <label htmlFor="postTitle">Tytuł:</label>
            <textarea
                id="postTitle"
                className="titleInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="postTitle"
                placeholder="Tytuł"
            />

            <label htmlFor="postText">Treść:</label>
            <textarea
                id="postText"
                className="textInput"
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                name="postText"
                placeholder="Treść"
            />

            <label htmlFor="flagCheck">
                <input
                    id="flagCheck"
                    type="checkbox"
                    checked={flag}
                    onChange={(e) => setFlag(e.target.checked)}
                />
                Umieść na stronie głównej
            </label>

            <div className="publishButton">
                <button
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

export default Form;
