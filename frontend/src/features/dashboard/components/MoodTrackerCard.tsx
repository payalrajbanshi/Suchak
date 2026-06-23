import DashboardCard from "./DashboardCard";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MoodTrackerCard = () => {
  return (
    <DashboardCard title="Mood Tracker">

      <div className="h-40 w-40 mx-auto">

        <CircularProgressbar
          value={82}
          text="😊"
        />

      </div>

      <h3 className="text-center mt-4 text-xl font-bold">
        Happy
      </h3>

      <p className="text-center text-slate-400">
        Mood Score 82%
      </p>

    </DashboardCard>
  );
};

export default MoodTrackerCard;