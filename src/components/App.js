import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Intro from './Intro';
import AboutMe from "./AboutMe";
import WebLanguages from './WebLanguages';
import Projects from "./Projects";
import Contact from "./Contact";
import Success from "./Success";
import ErrorPage from "./ErrorPage";
import GlobalStyles from "../GlobalStyles";


const App = () => {

    return (
        <Router>
            <NavBar />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Intro title="Full-Stack Web Developer"/>} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/languages" element={<WebLanguages />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/success" element={<Success />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
};

export default App;