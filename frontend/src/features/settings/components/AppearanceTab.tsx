import { Monitor, Moon, Palette, Sun } from "lucide-react";
import { useState } from "react";

export default function AppearanceTab() {
  const [theme, setTheme] = useState("light");

  const [accent, setAccent] = useState("#2563eb");

  const colors = [
    "#2563eb",
    "#9333ea",
    "#16a34a",
    "#ea580c",
    "#dc2626",
    "#0f766e",
  ];

  return (
    <div className="space-y-10">

      {/* Theme */}

      <div className="border rounded-3xl p-8">

        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">

          <Monitor />

          Theme

        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {/* Light */}

          <button
            onClick={() => setTheme("light")}
            className={`
              border-2 rounded-2xl p-6 transition

              ${
                theme === "light"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }
            `}
          >

            <Sun
              size={40}
              className="mx-auto text-yellow-500"
            />

            <h3 className="mt-4 font-semibold text-lg">

              Light

            </h3>

            <p className="text-gray-500 text-sm mt-2">

              Bright interface for daytime.

            </p>

          </button>

          {/* Dark */}

          <button
            onClick={() => setTheme("dark")}
            className={`
              border-2 rounded-2xl p-6 transition

              ${
                theme === "dark"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }
            `}
          >

            <Moon
              size={40}
              className="mx-auto text-slate-700"
            />

            <h3 className="mt-4 font-semibold text-lg">

              Dark

            </h3>

            <p className="text-gray-500 text-sm mt-2">

              Comfortable at night.

            </p>

          </button>

          {/* System */}

          <button
            onClick={() => setTheme("system")}
            className={`
              border-2 rounded-2xl p-6 transition

              ${
                theme === "system"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }
            `}
          >

            <Monitor
              size={40}
              className="mx-auto text-blue-500"
            />

            <h3 className="mt-4 font-semibold text-lg">

              System

            </h3>

            <p className="text-gray-500 text-sm mt-2">

              Follow your device settings.

            </p>

          </button>

        </div>

      </div>

      {/* Accent Color */}

      <div className="border rounded-3xl p-8">

        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">

          <Palette />

          Accent Color

        </h2>

        <div className="flex gap-5 flex-wrap">

          {colors.map((color) => (

            <button
              key={color}
              onClick={() => setAccent(color)}
              style={{ background: color }}
              className={`
                w-14
                h-14
                rounded-full
                border-4
                transition
                hover:scale-110

                ${
                  accent === color
                    ? "border-black"
                    : "border-white"
                }
              `}
            />

          ))}

        </div>

        <p className="text-gray-500 mt-6">

          Selected Color

        </p>

        <div
          className="mt-3 h-12 rounded-xl"
          style={{
            background: accent,
          }}
        />

      </div>

      {/* Font Size */}

      <div className="border rounded-3xl p-8">

        <h2 className="text-2xl font-semibold mb-8">

          Font Size

        </h2>

        <select
          className="
          w-64
          border
          rounded-xl
          px-4
          py-3
          focus:ring-2
          focus:ring-blue-500
          "
        >
          <option>Small</option>

          <option>Medium</option>

          <option>Large</option>
        </select>

      </div>

    </div>
  );
}