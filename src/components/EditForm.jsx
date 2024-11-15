import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const [flag, setFlag] = useState(false);
}
