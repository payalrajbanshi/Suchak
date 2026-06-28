import { useState } from "react";

const SelfCarePlanner = () => {
  const [checks, setChecks] = useState({
    water: false,
    walk: false,
    read: false,
    sleep: false,
    stretch: false,
  });

  const toggle = (key: string) => {
    setChecks({
      ...checks,
      [key]: !checks[key as keyof typeof checks],
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-3xl font-bold mb-2">
        💚 Self Care Planner
      </h1>

      <div className="bg-white rounded-3xl p-6 shadow mt-6 space-y-4">

        {Object.entries(checks).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-3"
          >
            <input
              type="checkbox"
              checked={value}
              onChange={() => toggle(key)}
            />

            <span className="capitalize">
              {key}
            </span>
          </label>
        ))}

      </div>
    </div>
  );
};

export default SelfCarePlanner;