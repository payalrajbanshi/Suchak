import { scheduleData } from "../data/dashboardDummyData";

const ScheduleWidget = () => {
  return (
    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-5
    ">

      <h2 className="font-semibold mb-4">
        Today's Schedule
      </h2>

      <div className="space-y-4">

        {scheduleData.map((item) => (
          <div
            key={item.time}
            className="flex gap-3"
          >
            <span className="text-slate-500 text-sm w-20">
              {item.time}
            </span>

            <span>
              {item.title}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ScheduleWidget;