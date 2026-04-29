import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type WeeklyData = {
  day: string;
  tasksCompleted: number;
};

interface Props {
  data: WeeklyData[];
  loading?: boolean;
}

const WeeklyChart = ({ data = [], loading = false }: Props) => {
  return (
    <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-5 rounded-2xl shadow-lg border border-white/10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">
          📊 Weekly Progress
        </h3>

        <span className="text-xs text-gray-400">
          Last 7 days
        </span>
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <div className="h-[250px] flex items-center justify-center text-gray-400">
          Loading chart...
        </div>
      ) : data.length === 0 ? (
        <div className="h-[250px] flex items-center justify-center text-gray-400">
          No data available for this week
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              allowDecimals={false}
              domain={[0, 'dataMax+1']}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="tasksCompleted"
              stroke="#38bdf8"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default WeeklyChart;