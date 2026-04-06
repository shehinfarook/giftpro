import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-pink-50 min-h-screen text-center">

      <h1 className="text-2xl font-bold mb-6">Moments 📸</h1>

      <div className="grid gap-4">
        <div className="bg-white p-4 rounded shadow">
          <img src="/iconic.jpg" alt="" />
          <img src="/schl-uni.jpg" alt="" />
          <p>kandaal ndor paavam... <br /> ahangaari🧐</p>
        </div>

        {/* <div className="bg-white p-4 rounded shadow">
          <img src="/look.jpg" alt="" className="" />
          <br />
          <br />
          <p>But still my favorite 😌❤️</p>
        </div> */}
      </div>

      <button
        onClick={() => navigate("/galleryy")}
        className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full"
      >
        next
      </button>

    </div>
  );
}