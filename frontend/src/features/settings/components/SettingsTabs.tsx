import {
  User,
  Palette,
  Bell,
  Shield,
  SlidersHorizontal,
  Info,
} from "lucide-react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
  },
  {
    id: "preferences",
    label: "Preferences",
    icon: SlidersHorizontal,
  },
  {
    id: "about",
    label: "About",
    icon: Info,
  },
];

export default function SettingsTabs({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div className="border-b bg-white">

      <div className="flex overflow-x-auto">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2
                px-6 py-4
                font-medium
                transition
                whitespace-nowrap
                border-b-2

                ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-500 hover:text-blue-600 hover:bg-gray-50"
                }
              `}
            >
              <Icon size={18} />

              {tab.label}
            </button>
          );
        })}

      </div>

    </div>
  );
}