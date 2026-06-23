import type { SmartSuggestion } from "../types/taskTypes";

export default function SmartSuggestions({ data }: any) {
  const total = data.reduce(
    (sum: number, t: any) => sum + t.hoursToDoToday,
    0
  );

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">
        Today’s focus:{" "}
        <span className="font-semibold text-slate-900">
          {total.toFixed(1)} hours
        </span>
      </p>

      {data.map((item: any) => (
        <div
          key={item.taskId}
          className="
            p-3
            rounded-xl
            border border-slate-200
            hover:bg-slate-50
            transition
          "
        >
          <p className="font-medium text-slate-900">
            {item.title}
          </p>

          <p className="text-sm text-slate-600">
            Work ~ {item.hoursToDoToday} hrs today
          </p>
        </div>
      ))}
    </div>
  );
}