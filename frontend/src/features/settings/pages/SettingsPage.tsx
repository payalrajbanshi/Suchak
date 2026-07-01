import { useState } from "react";

import SettingsHeader from "../components/SettingsHeader";
import SettingsTabs from "../components/SettingsTabs";

import ProfileTab from "../components/ProfileTab";
import AppearanceTab from "../components/AppearanceTab";
import NotificationTab from "../components/NotificationTab";
import SecurityTab from "../components/SecuritySection";
import PreferenceTab from "../components/PreferenceTab";
import About from "../components/About";

import SaveButton from "../components/SaveButton";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-6xl mx-auto py-10 px-6">

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Blue Header */}
          <SettingsHeader />

          {/* Tabs */}
          <SettingsTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Content */}
          <div className="p-10">

            {activeTab === "profile" && (
              <ProfileTab />
            )}

            {activeTab === "appearance" && (
              <AppearanceTab />
            )}

            {activeTab === "notifications" && (
              <NotificationTab />
            )}

            {activeTab === "security" && (
              <SecurityTab />
            )}

            {activeTab === "preferences" && (
              <PreferenceTab />
            )}

            {activeTab === "about" && (
              <About />
            )}

          </div>

          {/* Save Button */}
          <SaveButton />

        </div>

      </div>

    </div>
  );
}