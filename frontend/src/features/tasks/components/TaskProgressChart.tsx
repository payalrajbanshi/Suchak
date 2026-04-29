import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getProgress } from "../services/taskService";

export default function TaskProgressChart({ taskId }: { taskId: number }) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getProgress(taskId);

    const formatted = res.data.map((d: any) => ({
      date: new Date(d.date).toLocaleDateString(),
      hours: d.hoursWorked,
    }));

    setData(formatted);
  };

 return (
  <div className="bg-white p-3 mt-2 rounded shadow w-full h-full">
    <h3 className="text-black font-semibold mb-2">Progress</h3>

    <div className="w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="hours" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
}