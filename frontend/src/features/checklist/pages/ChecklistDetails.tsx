import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";

import type { Checklist } from "../types";
import { loadChecklists, saveChecklists } from "../utils";
import PlannerSection from "../components/PlannerSection";

const pastelColors = [
  "bg-pink-200",
  "bg-purple-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-orange-200",
  "bg-blue-200",
];

const ChecklistDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [planner, setPlanner] = useState<Checklist | null>(null);

  useEffect(() => {
    const lists = loadChecklists();

    const selected = lists.find(
      (x) => x.id === Number(id)
    );

    if (selected) {
      setPlanner(selected);
    }
  }, [id]);

  const savePlanner = (updated: Checklist) => {
    const lists = loadChecklists();

    const newLists = lists.map((list) =>
      list.id === updated.id
        ? updated
        : list
    );

    saveChecklists(newLists);

    setPlanner(updated);
  };

  // const addSection = () => {
  //   if (!planner) return;

  //   const title = prompt("Section title");

  //   if (!title) return;

  //   savePlanner({
  //     ...planner,
  //     sections: [
  //       ...planner.sections,
  //       {
  //         id: Date.now(),
  //         title,
  //         color:
  //           pastelColors[
  //             planner.sections.length %
  //               pastelColors.length
  //           ],
  //         items: [],
  //       },
  //     ],
  //   });
  // };

  const toggleItem = (
    sectionId: number,
    itemId: number
  ) => {
    if (!planner) return;

    savePlanner({
      ...planner,
      sections: planner.sections.map((section) =>
        section.id !== sectionId
          ? section
          : {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      completed:
                        !item.completed,
                    }
                  : item
              ),
            }
      ),
    });
  };

  if (!planner) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-12">

        {/* Header */}

        <div className="flex justify-between items-center mb-16">

          <button
            onClick={() => navigate("/checklist")}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <ArrowLeft size={20} />

            Back
          </button>

         

        </div>

        <h1 className="
text-5xl
lg:text-6xl
font-extrabold
tracking-tight
text-center
mb-20
text-gray-800
">

          {planner.title}

        </h1>

        {/* Planner */}

        <div className="
grid
grid-cols-1
md:grid-cols-2
gap-x-20
gap-y-16
">

          {planner.sections.map((section) => (

            <PlannerSection
    key={section.id}
    section={section}
    onToggle={(itemId) =>
        toggleItem(section.id, itemId)
    }
    onUpdate={(updatedSection) => {

        if (!planner) return;

        savePlanner({

            ...planner,

            sections: planner.sections.map((section) =>
                section.id === updatedSection.id
                    ? updatedSection
                    : section
            ),

        });

    }}
/>

          ))}

        </div>

        {planner.sections.length === 0 && (

          <div className="text-center py-32">

            <h2 className="text-3xl font-semibold">

              No Sections Yet

            </h2>

            <p className="text-gray-500 mt-3">

              Click "New Section" to start building your planner.

            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default ChecklistDetails;