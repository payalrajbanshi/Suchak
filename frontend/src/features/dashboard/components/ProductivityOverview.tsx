// ProductivityOverview.tsx

import TaskDonutChart from "./TaskDonutChart";
import WeeklyChart from "./WeeklyChart";

type Props = {
  weeklyData: any[];
  loading: boolean;
};

const ProductivityOverview = ({
  weeklyData,
  loading,
}: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <TaskDonutChart />
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <WeeklyChart
          data={weeklyData}
          loading={loading}
        />
      </div>

    </div>
  );
};

export default ProductivityOverview;