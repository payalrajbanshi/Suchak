import PlannerCard from "../components/PlannerCard";

const PlannerHub = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-3xl font-bold text-black mb-2">
        🌸 Suchak Planner Hub
      </h1>

      <p className="text-gray-500 mb-6">
        Create • Reflect • Grow
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <PlannerCard
          title="Daily Planner"
          description="Plan your entire day"
          emoji="🌸"
          color="bg-pink-400 text-white"
        />

        <PlannerCard
          title="Mood Planner"
          description="Track your emotions"
          emoji="😊"
          color="bg-blue-400 text-white"
        />

        <PlannerCard
          title="Habit Planner"
          description="Build strong habits"
          emoji="🔥"
          color="bg-green-400 text-white"
        />

      </div>
    </div>
  );
};

export default PlannerHub;