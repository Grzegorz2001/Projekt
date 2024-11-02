import React, { useState, useEffect } from "react";
import { allNewsList } from "../helpers/NewsList/AllNewsList";
import PropTypes from "prop-types";
import "../styles/Form.css";

const Form = ({ addArticle }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handlePublish = (e) => {
        e.preventDefault();
        addArticle({ title, text });
        setTitle("");
        setText("");
    };

    return (
        <form onSubmit={handlePublish} className="addPostForm">
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
};

Form.propTypes = {
    addArticle: PropTypes.func.isRequired,
};

export default Form;
