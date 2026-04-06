import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    setPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">

      <h1 className="text-xl mb-6">Do you love me? 😌</h1>

      <div className="flex gap-4 relative">
        <button
          onClick={() => navigate("/final")}
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Yes ❤️
        </button>

        <button
          onMouseEnter={moveButton}
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          className="bg-red-500 text-white px-6 py-2 rounded absolute"
        >
          No 😭
        </button>
      </div>

    </div>
  );
}