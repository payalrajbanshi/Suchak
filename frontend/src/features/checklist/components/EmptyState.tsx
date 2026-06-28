interface Props {
  onCreate: () => void;
}

const EmptyState = ({ onCreate }: Props) => {
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center">

      <div className="text-7xl">
        📋
      </div>

      <h2 className="text-4xl font-semibold mt-8">
        No Checklists Yet
      </h2>

      <p className="text-gray-500 mt-3">
        Create your first planner page.
      </p>

      <button
        onClick={onCreate}
        className="mt-8 bg-black text-white px-7 py-3 rounded-full"
      >
        + New Checklist
      </button>

    </div>
  );
};

export default EmptyState;