import PlannerGrid from "../components/PlannerGrid";
import PlannerSearch from "../components/PlannerSearch";

const PlannerHub = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1
            className="
              text-4xl
              font-bold
              mb-2
            "
          >
            🌸 Suchak Planner Hub
          </h1>

          <p className="text-gray-500">
            Create • Reflect • Grow
          </p>
        </div>

        <PlannerSearch />

        <div className="mt-8">
          <PlannerGrid />
        </div>
      </div>
    </div>
  );
};

export default PlannerHub;