import Confetti from "react-confetti";

export default function Final() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center">

      <Confetti />

      <h1 className="text-3xl font-bold mb-4">
        Happy Birthday, My Love ❤️
      </h1>

      <p className="max-w-md">
        You’re cute, annoying, dramatic…  
        and somehow still my favorite person.
      </p>

    </div>
  );
}