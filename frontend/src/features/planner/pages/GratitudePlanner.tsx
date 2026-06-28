import { useState } from "react";

const GratitudePlanner = () => {
  const [gratitude, setGratitude] = useState("");

  return (
    <div className="min-h-screen bg-yellow-50 p-6">

      <h1 className="text-3xl font-bold">
        🙏 Gratitude Planner
      </h1>

      <textarea
        value={gratitude}
        onChange={(e) => setGratitude(e.target.value)}
        className="
          mt-6
          w-full
          h-[400px]
          p-4
          rounded-3xl
          border
        "
        placeholder="
Today I'm grateful for...

1.
2.
3.
"
      />
    </div>
  );
};

export default GratitudePlanner;