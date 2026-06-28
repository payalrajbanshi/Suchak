import { createContext, useContext, useEffect, useState } from "react";

interface PlannerSettings {
  theme: string;
  font: string;
  layout: string;
}

interface PlannerContextType {
  settings: PlannerSettings;
  updateSettings: (data: Partial<PlannerSettings>) => void;
}

const PlannerSettingsContext = createContext<PlannerContextType | null>(null);

export const PlannerSettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useState<PlannerSettings>({
    theme: "pastel",
    font: "Poppins",
    layout: "card",
  });

  useEffect(() => {
    const saved = localStorage.getItem("planner-settings");

    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const updateSettings = (data: Partial<PlannerSettings>) => {
    const updated = {
      ...settings,
      ...data,
    };

    setSettings(updated);

    localStorage.setItem(
      "planner-settings",
      JSON.stringify(updated)
    );
  };

  return (
    <PlannerSettingsContext.Provider
      value={{
        settings,
        updateSettings,
      }}
    >
      {children}
    </PlannerSettingsContext.Provider>
  );
};

export const usePlannerSettings = () => {
  const context = useContext(PlannerSettingsContext);

  if (!context) {
    throw new Error(
      "usePlannerSettings must be used inside PlannerSettingsProvider"
    );
  }

  return context;
};