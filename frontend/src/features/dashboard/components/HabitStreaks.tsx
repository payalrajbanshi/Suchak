import DashboardCard from "./DashboardCard";
import { habits } from "../data/dashboardDummyData";

const HabitStreaks = () => {
  return (
    <DashboardCard title="Habit Streaks">

      <div className="space-y-3">

        {habits.map((h) => (
          <div
            key={h.name}
            className="flex justify-between"
          >
            <span>{h.name}</span>

            <span className="text-orange-400">
              🔥 {h.streak}
            </span>
          </div>
        ))}

      </div>

    </DashboardCard>
  );
};

export default HabitStreaks;