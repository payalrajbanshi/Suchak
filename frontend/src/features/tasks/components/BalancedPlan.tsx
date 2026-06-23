import type { BalancedPlan } from "../types/taskTypes";

export default function BalancedPlanComp({ data }: any) {
  return (
    <div className="space-y-3">
      {data.map((p: any) => (
        <div
          key={p.taskId}
          className="
            p-3
            rounded-xl
            border border-slate-200
            hover:bg-slate-50
            transition
          "
        >
          <p className="font-medium text-slate-900">
            {p.title}
          </p>

          <p className="text-sm text-slate-600">
            Today: {p.hoursToday}h • Remaining: {p.remainingHours}h
          </p>
        </div>
      ))}
    </div>
  );
}