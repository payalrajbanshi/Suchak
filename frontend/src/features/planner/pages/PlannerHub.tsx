import PlannerCard from "../components/PlannerCard";

const PlannerHub = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-3xl font-bold mb-2">
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
          color="bg-pink-500"
          entries={12}
          updatedAt="Today"
        />

        <PlannerCard
          title="Mood Planner"
          description="Track your emotions"
          emoji="😊"
          color="bg-blue-500"
          entries={24}
          updatedAt="Yesterday"
        />

        <PlannerCard
          title="Habit Planner"
          description="Build strong habits"
          emoji="🔥"
          color="bg-green-500"
          entries={30}
          updatedAt="2 days ago"
        />

      </div>
    </div>
  );
};

export default PlannerHub;