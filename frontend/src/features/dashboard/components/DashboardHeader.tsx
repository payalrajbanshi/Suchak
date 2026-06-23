const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Good Afternoon 👋
        </h1>

        <p className="text-slate-400">
          Let's make today productive.
        </p>
      </div>

      <div className="flex gap-4">

        <input
          placeholder="Search..."
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            px-4
            py-2
          "
        />

        <button
          className="
            bg-violet-600
            px-5
            py-2
            rounded-xl
          "
        >
          + Add New
        </button>

      </div>
    </div>
  );
};

export default DashboardHeader;