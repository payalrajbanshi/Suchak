import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import type { Task } from "../types/taskTypes";

export default function ProductivityChart({ tasks }: { tasks: Task[] }) {
  const data = [
    {
      name: "Completed",
      value: tasks.filter((t) => t.isCompleted).length,
    },
    {
      name: "Pending",
      value: tasks.filter((t) => !t.isCompleted).length,
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-black mb-2">📊 Productivity</h2>

      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>
    </div>
  );
}