import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", tasks: 2 },
  { day: "Tue", tasks: 5 },
  { day: "Wed", tasks: 3 },
  { day: "Thu", tasks: 6 },
  { day: "Fri", tasks: 4 },
  { day: "Sat", tasks: 2 },
  { day: "Sun", tasks: 1 },
];

export default function WeeklyChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}