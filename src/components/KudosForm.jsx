import React, { useState } from "react";
import axios from "axios";
import "../styles/KudosForm.css";

function KudosForm() {
    const [text, setText] = useState("");

    const handlePublish = async (e) => {
        e.preventDefault();
        try {
            const kudosFormData = new FormData();
            kudosFormData.append("text", text);
            kudosFormData.append("publishedDate", new Date());

            await axios.post("http://localhost:5000/api/kudos", { text });

            setText("");

            window.location.reload();
            alert("Udało Ci się! Kudos dodany!");
        } catch (error) {
            console.error(error);
            alert("UPS! Coś poszło nie tak, spróbuj jeszcze raz!");
        }
    };

    return (
        <form onSubmit={handlePublish} className="addKudosForm">
            <textarea
                className="kudosInput"
                name="text"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Napisz komuś coś miłego..."
            />
            <div className="publishKudosButtonContainer">
                <button
                    type="submit"
                    className="publishKudosButton"
                    disabled={text.length === 0}
                >
                    Wyślij kudosa
                </button>
            </div>
        </form>
    );
}

export default KudosForm;
