import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Completed",
    value: 18,
  },
  {
    name: "Pending",
    value: 5,
  },
  {
    name: "Overdue",
    value: 1,
  },
];

const COLORS = [
  "#22c55e",
  "#eab308",
  "#ef4444",
];

const TaskDonutChart = () => {
  return (
    <PieChart
      width={250}
      height={250}
    >
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={90}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index]}
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
};

export default TaskDonutChart;