import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Game from "./pages/Game";
import Final from "./pages/Final";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/game" element={<Game />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App