import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../helpers/formatDate.jsx";
import "../styles/UpcomingEvents.css";

function UpcomingEvents() {
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        const fetchPostsForCalendar = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts/allDatted"
                );
                setUpcomingEvents(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPostsForCalendar();
    }, []);

    return (
        <div className="upcomingEventsPage">
            <ul>
                {upcomingEvents.map((event) => (
                    <li key={event._id}>
                        <Link to={`/news/${event._id}`} className="eventLink">
                            <div className="calendarList">
                                <img
                                    className="calendarImage"
                                    src={`http://localhost:5000/${event.image}`}
                                />
                                <div className="infoOverlay">
                                    <h2>{formatDate(event.eventDate)}</h2>
                                    <h3>{event.title}</h3>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UpcomingEvents;
