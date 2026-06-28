import WeeklyChart from "../components/WeeklyChart";
import ProductivityTip from "../components/ProductivityTip";
import RecentActivity from "../components/RecentActivity";
import Streak from "../components/Streak";

export default function ReportsPage() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  return (
    <div className="min-h-screen bg-[#FAF6FC]">

      <div className="max-w-7xl mx-auto px-10 py-12">

        {/* Header */}

        <div className="mb-14">

          <h1 className="text-5xl font-bold text-gray-900">
            {greeting}
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Here's how your week has been going.
          </p>

        </div>

        {/* Weekly Chart */}

        <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

          <h2 className="text-2xl font-semibold mb-6">
            Weekly Progress
          </h2>

          <WeeklyChart />

        </div>

        {/* Bottom Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          <Streak />

          <ProductivityTip />

        </div>

        <div className="mt-8">

          <RecentActivity />

        </div>

      </div>

    </div>
  );
}