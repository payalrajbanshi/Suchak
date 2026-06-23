import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ProductivityChart({ tasks }: any) {
  const data = [
    {
      name: "Done",
      value: tasks.filter((t: any) => t.isCompleted).length,
    },
    {
      name: "Pending",
      value: tasks.filter((t: any) => !t.isCompleted).length,
    },
  ];

  return (
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}