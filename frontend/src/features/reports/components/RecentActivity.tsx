import {
  CheckCircle,
  Clock,
} from "lucide-react";

const activities = [
  {
    title: "Completed React Assignment",
    completed: true,
  },
  {
    title: "Morning Workout",
    completed: true,
  },
  {
    title: "Read Database Chapter",
    completed: false,
  },
  {
    title: "Prepare Presentation",
    completed: false,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-2xl font-semibold mb-8">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-4 last:border-none"
          >

            <div className="flex items-center gap-4">

              {activity.completed ? (
                <CheckCircle
                  className="text-green-500"
                  size={22}
                />
              ) : (
                <Clock
                  className="text-orange-500"
                  size={22}
                />
              )}

              <span className="text-gray-800">
                {activity.title}
              </span>

            </div>

            <span
              className={`text-sm ${
                activity.completed
                  ? "text-green-600"
                  : "text-orange-500"
              }`}
            >
              {activity.completed
                ? "Completed"
                : "Pending"}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}