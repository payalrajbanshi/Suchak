type Props = {
  plan: any[];
};

const UpcomingDeadlines = ({ plan }: Props) => {
  return (
    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-5
    ">

      <div className="flex justify-between mb-5">
        <h2 className="font-semibold">
          Upcoming Deadlines
        </h2>

        <span className="text-violet-400 text-sm">
          View All
        </span>
      </div>

      <div className="space-y-4">

        {plan
          .slice()
          .sort(
            (a, b) =>
              new Date(a.deadline).getTime() -
              new Date(b.deadline).getTime()
          )
          .slice(0, 5)
          .map((task) => (
            <div
              key={task.taskId}
              className="
                flex
                justify-between
                items-center
                border-b
                border-slate-800
                pb-3
              "
            >
              <div>
                <p className="font-medium">
                  {task.title}
                </p>

                <p className="text-xs text-slate-500">
                  {task.remainingHours} hrs remaining
                </p>
              </div>

              <span
                className="
                  bg-yellow-500/20
                  text-yellow-400
                  text-xs
                  px-3
                  py-1
                  rounded-full
                "
              >
                {task.deadline.split("T")[0]}
              </span>
            </div>
          ))}

      </div>

    </div>
  );
};

export default UpcomingDeadlines;