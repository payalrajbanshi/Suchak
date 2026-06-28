const sections = [
  "Health",
  "Mindset",
  "Productivity",
  "Finance",
  "Relationships",
];

const LifeResetPlanner = () => {
  return (
    <div className="min-h-screen bg-violet-50 p-6">

      <h1 className="text-3xl font-bold">
        ✨ Life Reset Planner
      </h1>

      <div className="grid md:grid-cols-2 gap-5 mt-6">

        {sections.map((s) => (
          <div
            key={s}
            className="bg-white rounded-3xl p-5 shadow"
          >
            <h2 className="font-bold text-lg">
              {s}
            </h2>

            <textarea
              className="
                mt-4
                w-full
                h-32
                border
                rounded-xl
                p-3
              "
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default LifeResetPlanner;