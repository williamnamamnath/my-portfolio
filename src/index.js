import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from './components/Intro';
import WebLanguages from './components/WebLanguages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/languages" element={<WebLanguages />} />
    </Routes>
  </Router>
);

