import { Flame } from "lucide-react";

export default function Streak() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">
        <Flame className="text-orange-500" size={28} />
        <h2 className="text-2xl font-semibold">
          Current Streak
        </h2>
      </div>

      <h1 className="text-6xl font-bold text-gray-900">
        6
      </h1>

      <p className="text-gray-500 mt-2">
        days in a row 🎉
      </p>

      <p className="mt-6 text-gray-600">
        Keep completing your tasks every day to
        maintain your streak.
      </p>

    </div>
  );
}