import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe";
import ProjectsPage from "./pages/ProjectsPage";
import CheckIt from "./projects/Checkit";
import NFIB from "./projects/NFIB";
import Nutrissence from "./projects/Nutrissence";
import Emporium from "./projects/Emporium";
import Experience from "./pages/Experience";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import GlobalStyles from "./GlobalStyles";

const App = () => {

    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/checkit" element={<CheckIt />} />
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