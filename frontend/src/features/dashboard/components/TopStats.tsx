type Props = {
  summary: any;
};

const TopStats = ({ summary }: Props) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <p className="text-slate-400">Tasks</p>
        <h2 className="text-3xl font-bold">
          {summary.totalTasks}
        </h2>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <p className="text-slate-400">Completed</p>
        <h2 className="text-3xl font-bold text-green-400">
          {summary.completedTasks}
        </h2>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <p className="text-slate-400">Pending</p>
        <h2 className="text-3xl font-bold text-yellow-400">
          {summary.pendingTasks}
        </h2>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <p className="text-slate-400">Productivity</p>
        <h2 className="text-3xl font-bold text-violet-400">
          {Math.round(
            (summary.completedTasks /
              summary.totalTasks) *
              100
          ) || 0}
          %
        </h2>
      </div>

    </div>
  );
};

export default TopStats;