import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import SingleNewsPage from "./pages/SingleNewsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/news" exact element={<News />} />
                    <Route path="/news/:id" Component={SingleNewsPage} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
