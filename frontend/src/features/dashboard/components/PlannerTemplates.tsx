const templates = [
  "Daily Planner",
  "Weekly Planner",
  "Study Planner",
  "Budget Planner",
  "Life Reset",
];

const PlannerTemplates = () => {
  return (
    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-5
    ">

      <div className="flex justify-between mb-4">

        <h2 className="font-semibold">
          Planner Templates
        </h2>

        <span className="text-violet-400 text-sm">
          View All
        </span>

      </div>

      <div className="grid grid-cols-2 gap-3">

        {templates.map((template) => (
          <div
            key={template}
            className="
              bg-gradient-to-br
              from-violet-600
              to-indigo-600
              rounded-xl
              p-4
              cursor-pointer
              hover:scale-105
              transition
            "
          >
            <p className="font-medium text-sm">
              {template}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default PlannerTemplates;
