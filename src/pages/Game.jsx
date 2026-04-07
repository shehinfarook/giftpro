import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Game() {

  const navigate = useNavigate();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const maxX = window.innerWidth / 3;
    const maxY = window.innerHeight / 3;

    setPos({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-200 overflow-hidden">

      <h1 className="text-xl mb-6 text-center font-bold">
        Do you love me? 😌
      </h1>

      <div className="relative flex gap-4">
        <button
          onClick={() => navigate("/final")}
          className="bg-green-500 text-white px-6 py-2 rounded-[30px]" 
        >
          Yes ❤️
        </button>

        <button
          onTouchStart={moveButton}   
          onMouseEnter={moveButton}
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          className="bg-red-500 text-white px-6 py-2 rounded-[30px]"
        >
          No 😭
        </button>
      </div>

    </div>
  );
}