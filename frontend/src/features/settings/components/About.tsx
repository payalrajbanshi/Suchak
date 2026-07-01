import {
  Info,
  Shield,
  FileText,
  Mail,
  GitBranch,
  Heart,
} from "lucide-react";

export default function About() {
  const Item = ({
    icon,
    title,
    value,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
  }) => (
    <div className="flex justify-between items-center border rounded-2xl p-5 hover:shadow-sm transition">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          {icon}
        </div>

        <h3 className="font-semibold">
          {title}
        </h3>

      </div>

      <span className="text-gray-500">
        {value}
      </span>

    </div>
  );

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          About Suchak
        </h2>

        <p className="text-gray-500 mt-2">
          Application information and support.
        </p>

      </div>

      <Item
        icon={<Info size={22} />}
        title="Version"
        value="v1.0.0"
      />

      <Item
        icon={<Shield size={22} />}
        title="Privacy Policy"
        value="View"
      />

      <Item
        icon={<FileText size={22} />}
        title="Terms & Conditions"
        value="View"
      />

      <Item
        icon={<Mail size={22} />}
        title="Support"
        value="support@suchak.com"
      />

      <Item
        icon={<GitBranch size={22} />}
        title="GitHub"
        value="github.com/your-repo"
      />

      <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">

        <div className="flex items-center gap-3 mb-3">

          <Heart className="text-red-500" />

          <h3 className="font-semibold text-lg">
            Thank you for using Suchak ❤️
          </h3>

        </div>

        <p className="text-gray-600">
          Suchak helps you stay organized, productive,
          and focused every day.
        </p>

      </div>

    </div>
  );
}