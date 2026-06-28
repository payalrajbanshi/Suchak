import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import useChecklist from "../hooks/useChecklist";
import { getGreeting } from "../utils";

const ChecklistPage = () => {
  const navigate = useNavigate();

  const { lists, createChecklist } = useChecklist();

  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");

  const handleCreate = () => {
    if (!title.trim()) return;

    createChecklist(title);

    setTitle("");
    setShowInput(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF6FC] px-10 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-16">

          <div>

            <h1 className="text-5xl font-bold text-gray-900">
              {getGreeting()}
            </h1>

          </div>

          <button
            onClick={() => setShowInput(true)}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            <Plus size={20} />
            New Checklist
          </button>

        </div>

        {/* Create */}

        {showInput && (

          <div className="mb-16 bg-white rounded-3xl shadow-md p-8">

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Checklist Title"
              className="w-full border-b-2 border-gray-300 outline-none text-2xl pb-3"
            />

            <div className="flex gap-4 mt-8">

              <button
                onClick={handleCreate}
                className="bg-black text-white px-6 py-3 rounded-full"
              >
                Create
              </button>

              <button
                onClick={() => {
                  setShowInput(false);
                  setTitle("");
                }}
                className="px-6 py-3 rounded-full border"
              >
                Cancel
              </button>

            </div>

          </div>

        )}

        {/* Empty */}

        {lists.length === 0 && (

          <div className="h-[55vh] flex flex-col justify-center items-center">

            <div className="text-7xl mb-8">
              📋
            </div>

            <h2 className="text-4xl font-semibold mb-3">

              No Checklists Yet

            </h2>

            <p className="text-gray-500 text-xl">

              Create your first planner page.

            </p>

          </div>

        )}

        {/* Planner List */}

        {lists.length > 0 && (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {lists.map((list) => (

              <div
                key={list.id}
                onClick={() =>
                  navigate(`/checklist/${list.id}`)
                }
                className="cursor-pointer bg-white rounded-[35px] p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >

                <h2 className="text-3xl font-bold mb-4">

                  {list.title}

                </h2>

                <p className="text-gray-500">

                  {list.sections.length} Sections

                </p>

                <p className="mt-10 text-sm text-gray-400">

                  Created {list.createdAt}

                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default ChecklistPage;