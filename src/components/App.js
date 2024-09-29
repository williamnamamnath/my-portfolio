import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home';
import AboutMe from "./AboutMe";
import WebLanguages from './WebLanguages';
import Projects from "./Projects";
import NFIB from "../projects/NFIB";
import Nutrissence from "../projects/Nutrissence";
import Emporium from "../projects/Emporium";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";


import GlobalStyles from "../GlobalStyles";


const App = () => {

    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/languages" element={<WebLanguages />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/nfib" element={<NFIB />} />
                <Route path="/nutrissence" element={<Nutrissence />} />
                <Route path="/emporium" element={<Emporium />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
};

export default App;