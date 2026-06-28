import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const moods = ["😄", "🙂", "😐", "😔", "😡"];
const MoodPlanner = () => {
  const navigate=useNavigate();
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");

  const key = "mood-planner";

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      const data = JSON.parse(saved);
      setSelectedMood(data.mood || "");
      setNote(data.note || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify({ mood: selectedMood, note })
    );
  }, [selectedMood, note]);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <button
        onClick={() => navigate("/planner")}
        className="mb-4 px-4 py-2 rounded-lg border"
      >
        ← Back to Planner Hub
      </button>
      <h1 className="text-2xl font-bold">😊 Mood Planner</h1>
      <p className="text-gray-500 mb-4">
        Track how you feel every day.
      </p>

      {/* Mood selector */}
      <div className="flex gap-4 text-3xl mb-6">
        {moods.map((m) => (
          <button
            key={m}
            onClick={() => setSelectedMood(m)}
            className={`p-2 rounded-xl ${
              selectedMood === m ? "bg-blue-200" : ""
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <textarea
        className="w-full h-[60vh] p-4 border rounded-xl"
        placeholder="Why do you feel this way?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
};

export default MoodPlanner;