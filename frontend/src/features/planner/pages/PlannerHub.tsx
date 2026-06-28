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
        id="daily"
          title="Daily Planner"
          description="Plan your entire day"
          emoji="🌸"
          color="bg-pink-500"
          entries={12}
          updatedAt="Today"
        />

        <PlannerCard
        id="mood"
          title="Mood Planner"
          description="Track your emotions"
          emoji="😊"
          color="bg-blue-500"
          entries={24}
          updatedAt="Yesterday"
        />

        <PlannerCard
        id="habit"
          title="Habit Planner"
          description="Build strong habits"
          emoji="🔥"
          color="bg-green-500"
          entries={30}
          updatedAt="2 days ago"
        />

        <PlannerCard
  id="selfcare"
  title="Self Care Planner"
  description="Take care of yourself"
  emoji="💚"
  color="bg-emerald-500"
  entries={18}
  updatedAt="Today"
/>

<PlannerCard
  id="gratitude"
  title="Gratitude Planner"
  description="Reflect on positivity"
  emoji="🙏"
  color="bg-yellow-500"
  entries={20}
  updatedAt="Today"
/>

<PlannerCard
  id="lifereset"
  title="Life Reset Planner"
  description="Reset and rebuild"
  emoji="✨"
  color="bg-violet-500"
  entries={6}
  updatedAt="This Week"
/>

<PlannerCard
  id="settings"
  title="Planner Settings"
  description="Customize aesthetics"
  emoji="🎨"
  color="bg-slate-700"
  entries={0}
  updatedAt="Now"
/>

      </div>
    </div>
  );
};

export default PlannerHub;