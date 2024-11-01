import React, { useState } from "react";
import "../styles/Form.css";

function Form() {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    return (
        <form className="addPostForm">
            <div className="titleInput">
                <input
                    defaultValue={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    type="text"
                    name="postTitle"
                    placeholder="Tytuł"
                />
            </div>
            <div className="textInput">
                <input
                    defaultValue={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    type="text"
                    name="postText"
                    placeholder="Treść"
                />
            </div>
            <div className="publishButton">
                <button disabled={title.length === 0 || text.length === 0}>
                    Opublikuj
                </button>
            </div>
        </form>
    );
}

export default Form;
