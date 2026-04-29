import type { BalancedPlan } from "../types/taskTypes";

export default function BalancedPlanComp({ data }: any) {
  return (
    <div className="p-4 bg-green-100 rounded text-black">
      <h2 className="font-bold mb-2 text-black">⚖️ Balanced Plan</h2>

      <p className="text-sm mb-3">
        This plan distributes your workload evenly across the remaining time.
      </p>

      {data.map((p: any) => (
        <div key={p.taskId} className="border-b py-2">
          <p className="font-semibold">{p.title}</p>
          <p className="text-sm">
            Today: <b>{p.hoursToday} hrs</b> | Remaining:{" "}
            <b>{p.remainingHours} hrs</b>
          </p>
        </div>
      ))}
    </div>
  );
}