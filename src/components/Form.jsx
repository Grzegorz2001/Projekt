import React, { useState } from "react";
import { allNewsList } from "../helpers/NewsList/AllNewsList";
import PropTypes from "prop-types";
import "../styles/Form.css";

function Form({ addArticle }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");

    function handlePublish(e) {
        e.preventDefault();
        addArticle({
            image,
            title,
            publishedDate: new Date().toLocaleDateString(),
            text,
        });
        setTitle("");
        setText("");
        setImage("");
    }

    return (
        <form onSubmit={handlePublish} className="addPostForm">
            <input
                className="imageInput"
                value={image}
                type="file"
                onChange={(e) => setImage(e.target.value)}
                placeholder="Obraz"
            />
            <textarea
                className="titleInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="postTitle"
                placeholder="Tytuł"
            />
            <textarea
                className="textInput"
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                name="postText"
                placeholder="Treść"
            />
            <div className="publishButton">
                <button
                    disabled={title.length === 0 || text.length === 0}
                    type="submit"
                >
                    Opublikuj
                </button>
            </div>
        </form>
    );
}

Form.propTypes = {
    addArticle: PropTypes.func.isRequired,
};

export default Form;
