import { usePlannerSettings } from "../context/PlannerSettingsContext";

const PlannerSettings = () => {
  const { settings, updateSettings } =
    usePlannerSettings();

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      <h1 className="text-3xl font-bold mb-8">
        Planner Settings
      </h1>

      <div className="bg-white rounded-3xl p-6 shadow">

        <h2 className="font-semibold mb-3">
          Theme
        </h2>

        <select
          value={settings.theme}
          onChange={(e) =>
            updateSettings({
              theme: e.target.value,
            })
          }
          className="border p-3 rounded-xl w-full"
        >
          <option value="pastel">
            Pastel Pink
          </option>

          <option value="lavender">
            Lavender Dream
          </option>

          <option value="ocean">
            Ocean Blue
          </option>

          <option value="forest">
            Forest Green
          </option>

          <option value="coffee">
            Coffee Theme
          </option>
        </select>

        <h2 className="font-semibold mt-8 mb-3">
          Font
        </h2>

        <select
          value={settings.font}
          onChange={(e) =>
            updateSettings({
              font: e.target.value,
            })
          }
          className="border p-3 rounded-xl w-full"
        >
          <option>Poppins</option>
          <option>Inter</option>
          <option>Montserrat</option>
          <option>Quicksand</option>
        </select>

        <h2 className="font-semibold mt-8 mb-3">
          Layout
        </h2>

        <select
          value={settings.layout}
          onChange={(e) =>
            updateSettings({
              layout: e.target.value,
            })
          }
          className="border p-3 rounded-xl w-full"
        >
          <option value="card">
            Card Style
          </option>

          <option value="notebook">
            Notebook Style
          </option>

          <option value="grid">
            Grid Style
          </option>

          <option value="compact">
            Compact
          </option>
        </select>

      </div>
    </div>
  );
};

export default PlannerSettings;