import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";



export default function Landing({ startMusic}) {
  const navigate = useNavigate();
  

  const  handleButtonClick = () => {
    startMusic();
    navigate("/story");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[url('/bg-landing.jpg')] bg-cover bg-center text-center">
      
     <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10" style={{color: "#FE96A0"}}>
        Hey you… don’t smile yet 😌💖
      </motion.h1>
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br />
      <button
        onClick={handleButtonClick}
        
        className="bg-pink-500 text-white px-6 py-2 rounded-full mr-7"
      >
        
        Tap carefully 👀
      </button>

    </div>
  );
}