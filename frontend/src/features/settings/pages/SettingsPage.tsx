import ProfileSection from "../components/ProfileSection";
import AppearanceSection from "../components/AppearanceSection";
import NotificationSection from "../components/NotificationSection";
import SecuritySection from "../components/SecuritySection";
import AboutSection from "../components/AboutSection";

export default function SettingsPage() {

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  return (
    <div className="min-h-screen bg-[#FAF6FC]">

      <div className="max-w-5xl mx-auto px-10 py-12">

        <div className="mb-12">

          <h1 className="text-5xl font-bold">
            {greeting}
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage your account and preferences.
          </p>

        </div>

        <div className="space-y-8">

          <ProfileSection />

          <AppearanceSection />

          <NotificationSection />

          <SecuritySection />

          <AboutSection />

        </div>

      </div>

    </div>
  );
}