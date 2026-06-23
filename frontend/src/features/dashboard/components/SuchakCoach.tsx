import DashboardCard from "./DashboardCard";
import { coachTips } from "../data/dashboardDummyData";

const SuchakCoach = () => {
  return (
    <DashboardCard title="Suchak Coach">

   <div
  className="
  rounded-3xl
  p-6
  bg-gradient-to-br
  from-violet-950/70
  via-slate-900
  to-cyan-950/40
  border
  border-violet-500/20
  shadow-xl
  "
>
  <div className="flex items-center gap-3 mb-4">

    <div
      className="
      h-10
      w-10
      rounded-full
      bg-violet-500/20
      flex
      items-center
      justify-center
      "
    >
      ✨
    </div>

    <div>
      <h3 className="font-semibold">
        Suchak Coach
      </h3>

      <p className="text-xs text-slate-400">
        AI Productivity Guide
      </p>
    </div>

  </div>

  <p className="text-slate-300 text-sm">
    Focus on your highest-impact task first.
    Completing it before noon can improve your productivity momentum.
  </p>
</div>

    </DashboardCard>
  );
};

export default SuchakCoach;