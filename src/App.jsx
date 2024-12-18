import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Kudos from "./pages/Kudos";
import UpcomingEvents from "./pages/UpcomingEvents";
import News from "./pages/News";
import SingleNewsPage from "./pages/SingleNewsPage";
import EditPost from "./pages/EditForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kudos" element={<Kudos />} />
                    <Route
                        path="/UpcomingEvents"
                        element={<UpcomingEvents />}
                    />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:id" element={<SingleNewsPage />} />
                    <Route path="/news/EditPost/:id" element={<EditPost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
