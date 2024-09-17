import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home';
import AboutMe from "./AboutMe";
import WebLanguages from './WebLanguages';
import Projects from "./Projects";
import Success from "./Success";
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
                <Route path="/success" element={<Success />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
};

export default App;