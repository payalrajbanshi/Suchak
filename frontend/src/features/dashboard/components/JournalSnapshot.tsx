import DashboardCard from "./DashboardCard";
import { journalSnapshot } from "../data/dashboardDummyData";

const JournalSnapshot = () => {
  return (
    <DashboardCard title="Journal Snapshot">

      <div className="space-y-4">

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-xs text-slate-400">
            Today's Win
          </p>

          <p className="mt-1">
            🏆 {journalSnapshot.win}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-xs text-slate-400">
            Gratitude
          </p>

          <p className="mt-1">
            ❤️ {journalSnapshot.gratitude}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-xs text-slate-400">
            Reflection
          </p>

          <p className="mt-1">
            ✨ {journalSnapshot.reflection}
          </p>
        </div>

      </div>

    </DashboardCard>
  );
};

export default JournalSnapshot;