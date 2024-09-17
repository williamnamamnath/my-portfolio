import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home';
import AboutMe from "./AboutMe";
import WebLanguages from './WebLanguages';
import Projects from "./Projects";
import NFIB from "../projects/NFIB";
import Nutrissence from "../projects/Nutrissence";
import Emporium from "../projects/Emporium";
import ErrorPage from "./ErrorPage";
import GlobalStyles from "../GlobalStyles";


const App = () => {

    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home title="William Nam-Amnath"/>} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/languages" element={<WebLanguages />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/nfib" element={<NFIB />} />
                <Route path="/nutrissence" element={<Nutrissence />} />
                <Route path="/emporium" element={<Emporium />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
};

export default App;