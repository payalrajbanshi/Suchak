import DashboardCard from "./DashboardCard";

const HealingPromptCard = () => {
  return (
    <DashboardCard title="Healing Prompt">

      <div className="space-y-4">

        <div className="text-lg text-slate-200">
          What is one thing within your control today?
        </div>

        <p className="text-slate-400 text-sm">
          Take a moment to reflect and write your thoughts.
        </p>

        <button
          className="
            bg-violet-600
            hover:bg-violet-700
            px-4
            py-2
            rounded-xl
          "
        >
          Write Now
        </button>

      </div>

    </DashboardCard>
  );
};

export default HealingPromptCard;