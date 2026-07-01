import {
  Camera,
  Mail,
  Phone,
  User,
  Save,
} from "lucide-react";

export default function ProfileTab() {
  return (
    <div className="space-y-10">

      {/* Avatar */}

      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="relative">

          <img
            src="https://ui-avatars.com/api/?name=Ram+Sharma&background=2563eb&color=fff&size=200"
            alt="avatar"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-100"
          />

          <button
            className="
            absolute
            bottom-1
            right-1
            bg-blue-600
            text-white
            p-3
            rounded-full
            hover:bg-blue-700
            transition
            "
          >
            <Camera size={18} />
          </button>

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Ram Sharma
          </h2>

          <p className="text-gray-500 mt-2">
            Productivity Enthusiast
          </p>

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
            Change Photo
          </button>

        </div>

      </div>

      {/* Personal Information */}

      <div className="border rounded-3xl p-8">

        <h3 className="text-2xl font-semibold mb-8">
          Personal Information
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          {/* First Name */}

          <div>

            <label className="text-gray-600 flex items-center gap-2 mb-2">

              <User size={18} />

              First Name

            </label>

            <input
              defaultValue="Ram"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

          </div>

          {/* Last Name */}

          <div>

            <label className="text-gray-600 flex items-center gap-2 mb-2">

              <User size={18} />

              Last Name

            </label>

            <input
              defaultValue="Sharma"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

          </div>

          {/* Email */}

          <div>

            <label className="text-gray-600 flex items-center gap-2 mb-2">

              <Mail size={18} />

              Email

            </label>

            <input
              defaultValue="ram@gmail.com"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

          </div>

          {/* Phone */}

          <div>

            <label className="text-gray-600 flex items-center gap-2 mb-2">

              <Phone size={18} />

              Phone Number

            </label>

            <input
              defaultValue="+977 98XXXXXXXX"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

          </div>

        </div>

      </div>

      {/* Bio */}

      <div className="border rounded-3xl p-8">

        <h3 className="text-2xl font-semibold mb-6">
          Bio
        </h3>

        <textarea
          rows={5}
          placeholder="Tell us something about yourself..."
          className="
          w-full
          border
          rounded-xl
          p-4
          resize-none
          outline-none
          focus:ring-2
          focus:ring-blue-500
          "
        />

      </div>

      {/* Save */}

      <div className="flex justify-end">

        <button
          className="
          flex
          items-center
          gap-2
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-xl
          hover:bg-blue-700
          transition
          "
        >
          <Save size={18} />

          Save Profile

        </button>

      </div>

    </div>
  );
}