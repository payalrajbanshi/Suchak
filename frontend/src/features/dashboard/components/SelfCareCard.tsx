import DashboardCard from "./DashboardCard";
import { selfCareData } from "../data/dashboardDummyData";

const SelfCareCard = () => {
  const water =
    (selfCareData.water /
      selfCareData.waterGoal) *
    100;

  const sleep =
    (selfCareData.sleep /
      selfCareData.sleepGoal) *
    100;

  const reading =
    (selfCareData.reading /
      selfCareData.readingGoal) *
    100;

  return (
    <DashboardCard title="Self Care">

      <div className="space-y-5">

        {[
          {
            label: "Water",
            value: water,
            color: "bg-cyan-500",
          },
          {
            label: "Sleep",
            value: sleep,
            color: "bg-violet-500",
          },
          {
            label: "Reading",
            value: reading,
            color: "bg-green-500",
          },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-2">
              <span>{item.label}</span>

              <span className="text-slate-400 text-sm">
                {Math.round(item.value)}%
              </span>
            </div>

            <div className="h-2 bg-slate-800 rounded-full">
              <div
                className={`h-2 rounded-full ${item.color}`}
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}

      </div>

    </DashboardCard>
  );
};

export default SelfCareCard;