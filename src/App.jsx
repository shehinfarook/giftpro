import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Game from "./pages/Game";
import Final from "./pages/Final";
import { useRef } from "react";
import Galleryy from './pages/Galleryy';


function App() {
  const audioRef = useRef(null);

  const startMusic = () => audioRef.current?.play();

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) audioRef.current?.pause();
      else audioRef.current?.play();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);
      
    
    
  return (
    <>
       <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>
    <Router>

      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/game" element={<Game />} />
        <Route path="/final" element={<Final />} />
        <Route path="/" element={<Landing startMusic={startMusic} />} />
        <Route path="/story" element={<Story />} />
        <Route path="/galleryy" element={<Galleryy />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App