import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { formatDate } from "../helpers/formatDate.jsx";
import "../styles/Kudos.css";

function Kudos() {
    const [kudos, setKudos] = useState([]);

    useEffect(() => {
        const fetchKudos = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/kudos/`
                );
                setKudos(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchKudos();
    }, []);

    const handleDelete = async (kudosID) => {
        const confirmDelete = window.confirm(
            "Czy napewno chcesz trwale usunąć tego kudosa?"
        );

        if (confirmDelete) {
            try {
                await axios.delete(
                    `http://localhost:5000/api/kudos/${kudosID}`
                );
                setKudos(kudos.filter((kudos) => kudos._id !== kudosID));
                alert("Kudos został usunięty!");
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="kudosPage">
            <ul className="allKudosContainer">
                {kudos.map((kudo) => (
                    <li key={kudo._id}>
                        <div className="kudosContent">
                            <div className="manageButtons">
                                <DeleteForeverIcon
                                    className="deleteButton"
                                    onClick={() => handleDelete(kudo._id)}
                                />
                            </div>
                            <h3 className="kudosDate">
                                {formatDate(kudo.publishedDate)}
                            </h3>
                            <p>{kudo.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Kudos;
