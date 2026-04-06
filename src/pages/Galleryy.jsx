import React from 'react'
import { useNavigate } from "react-router-dom";

function Galleryy() {
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-pink-50 min-h-screen text-center">
        <div className="bg-white p-4 rounded shadow">
          <img src="/look.jpg" alt="" className="" />
          <br />
          <br />
          <p>But still my favorite 😌❤️</p>
        </div>
        <button
        onClick={() => navigate("/game")}
        className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full"
      >
        Continue 😌
      </button>
    </div>
  )
}

export default Galleryy