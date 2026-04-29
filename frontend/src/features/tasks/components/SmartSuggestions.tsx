import type { SmartSuggestion } from "../types/taskTypes";

export default function SmartSuggestions({ data }: { data: SmartSuggestion[] }) {
  const total = data.reduce((sum, t) => sum + t.hoursToDoToday, 0);

  return (
    <div className="p-4 bg-yellow-100 rounded text-black">
      <h2 className="font-bold mb-2">🔥 Smart Plan</h2>

      <p className="mb-3 text-sm">
        Hey 👋 today you need to complete around{" "}
        <b>{total.toFixed(1)} hours</b> of focused work to stay on track.
      </p>

      {data.map((item) => (
        <div key={item.taskId} className="border-b py-2">
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-gray-700">
            Work approximately <b>{item.hoursToDoToday} hrs</b> on this today
          </p>
        </div>
      ))}
    </div>
  );
}