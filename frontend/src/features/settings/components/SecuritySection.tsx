import {
  Lock,
  Shield,
  Smartphone,
  Monitor,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

export default function SecurityTab() {
  const [showPassword, setShowPassword] = useState(false);

  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h2 className="text-3xl font-bold">
          Security
        </h2>

        <p className="text-gray-500 mt-2">
          Protect your account and manage login security.
        </p>

      </div>

      {/* Password */}

      <div className="border rounded-3xl p-8">

        <div className="flex items-center gap-3 mb-6">

          <Lock className="text-blue-600" />

          <h3 className="text-xl font-semibold">
            Password
          </h3>

        </div>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            defaultValue="password123"
            className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            pr-12
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "
          />

          <button
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-3.5"
          >
            {showPassword ? (
              <EyeOff />
            ) : (
              <Eye />
            )}
          </button>

        </div>

        <button
          className="
          mt-5
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-blue-700
          transition
          "
        >
          Change Password
        </button>

      </div>

      {/* Two Factor */}

      <div className="border rounded-3xl p-8">

        <div className="flex justify-between items-center">

          <div className="flex items-start gap-4">

            <Shield
              size={30}
              className="text-green-600"
            />

            <div>

              <h3 className="text-xl font-semibold">

                Two-Factor Authentication

              </h3>

              <p className="text-gray-500 mt-1">

                Add an extra layer of security.

              </p>

            </div>

          </div>

          <button
            onClick={() =>
              setTwoFactor(!twoFactor)
            }
            className={`w-16 h-8 rounded-full transition relative ${
              twoFactor
                ? "bg-green-600"
                : "bg-gray-300"
            }`}
          >

            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
                twoFactor
                  ? "left-9"
                  : "left-1"
              }`}
            />

          </button>

        </div>

      </div>

      {/* Active Sessions */}

      <div className="border rounded-3xl p-8">

        <h3 className="text-xl font-semibold mb-6">

          Active Sessions

        </h3>

        <div className="space-y-4">

          <div className="flex justify-between items-center border rounded-xl p-4">

            <div className="flex gap-4 items-center">

              <Monitor className="text-blue-600" />

              <div>

                <p className="font-semibold">

                  Windows PC

                </p>

                <p className="text-gray-500 text-sm">

                  Current Device

                </p>

              </div>

            </div>

            <span className="text-green-600 font-medium">

              Active

            </span>

          </div>

          <div className="flex justify-between items-center border rounded-xl p-4">

            <div className="flex gap-4 items-center">

              <Smartphone className="text-purple-600" />

              <div>

                <p className="font-semibold">

                  Android Phone

                </p>

                <p className="text-gray-500 text-sm">

                  Last active yesterday

                </p>

              </div>

            </div>

            <button
              className="
              text-red-500
              hover:text-red-700
              "
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}