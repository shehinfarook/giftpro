import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const  handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    navigate("/story");
  };
  // make bg-landing.jpg as a landing page background

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[url('/bg-landing.jpg')] bg-cover bg-center text-center">
      
     <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10" style={{color: "#e75480"}}>
        Hey you… don’t smile yet 😌💖
      </motion.h1>
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br />
      <button
        onClick={() => navigate("/story")}
        
        className="bg-pink-500 text-white px-6 py-2 rounded-full mr-7"
      >
        
        Tap carefully 👀
      </button>

    </div>
  );
}