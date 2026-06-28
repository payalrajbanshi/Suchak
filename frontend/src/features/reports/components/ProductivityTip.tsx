import { Lightbulb } from "lucide-react";

const tips = [
  "Finish your hardest task first.",
  "Take a short break every 50 minutes.",
  "Avoid multitasking while studying.",
  "Review completed work before starting new tasks.",
  "Plan tomorrow before ending today.",
];

export default function ProductivityTip() {
  const randomTip =
    tips[new Date().getDate() % tips.length];

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="text-yellow-500" size={28} />
        <h2 className="text-2xl font-semibold">
          Productivity Tip
        </h2>
      </div>

      <p className="text-lg leading-8 text-gray-700">
        {randomTip}
      </p>

    </div>
  );
}