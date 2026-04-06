import { useNavigate } from "react-router-dom";

export default function Story() {
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-white min-h-screen text-center">

      <h1 className="text-2xl font-bold mb-6">About You 😏</h1>

      <p className="mb-3">You’re cute… but attitude? 😌</p>
      <p className="mb-3">99% sweet, 1% dangerous 😭</p>
      <p className="mb-6">Still… my favorite person ❤️</p>

      <hr className="my-6"/>

      <p className="mb-3">
        Jokes aside… you actually mean a lot to me.
      </p>

      <p className="mb-6">
        You make normal days feel special… and bad days easier.
      </p>

      <button
        onClick={() => navigate("/gallery")}
        className="bg-pink-500 text-white px-6 py-2 rounded-full"
      >
        Next 💌
      </button>

    </div>
  );
}