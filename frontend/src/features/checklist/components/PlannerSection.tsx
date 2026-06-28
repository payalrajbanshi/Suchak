import { useState } from "react";
import PlannerItem from "./PlannerItem";
import type { ChecklistSection } from "../types";

interface Props {
  section: ChecklistSection;
  onToggle: (itemId: number) => void;
  onUpdate: (updated: ChecklistSection) => void;
}

const PlannerSection = ({
  section,
  onToggle,
  onUpdate,
}: Props) => {
  // const [text, setText] = useState("");

  // const addItem = () => {
  //   if (!text.trim()) return;

  //   onUpdate({
  //     ...section,
  //     items: [
  //       ...section.items,
  //       {
  //         id: Date.now(),
  //         text,
  //         completed: false,
  //       },
  //     ],
  //   });

  //   setText("");
  // };

  const removeItem = (id: number) => {
    onUpdate({
      ...section,
      items: section.items.filter((item) => item.id !== id),
    });
  };

  return (
    <div>

      {/* Section Header */}

      <div
  className={`inline-flex ${section.color}
  rounded-full
  px-6
  py-2
  text-xs
  uppercase
  tracking-[0.35em]
  font-semibold
  mb-8`}
>
       <input
    value={section.title}
    onChange={(e)=>
        onUpdate({
            ...section,
            title:e.target.value
        })
    }
   className={`
${section.color}
rounded-full
px-5
py-2
uppercase
tracking-[0.35em]
text-xs
font-bold
outline-none
w-44
text-center
shadow-sm
transition
hover:scale-105
`}
/>
      </div>

      {/* Existing Items */}

      <div className="space-y-4">

       {section.items.map((item) => (

    <PlannerItem
        key={item.id}
        item={item}
        onToggle={() => onToggle(item.id)}
        onChange={(value) => {

            onUpdate({

                ...section,

                items: section.items.map(i =>
                    i.id === item.id
                        ? {
                            ...i,
                            text: value
                        }
                        : i
                )

            });

        }}
        onEnter={() => {

            onUpdate({

                ...section,

                items: [

                    ...section.items,

                    {

                        id: Date.now(),

                        text: "",

                        completed: false

                    }

                ]

            });

        }}
    />

))}

      </div>

      {/* Add New Item */}




      {/* <div className="mt-6">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add checklist item..."
          className="
w-full
bg-transparent
border-0
border-b
border-gray-300
focus:border-black
outline-none
py-2
text-lg
"
        />

        <button
          onClick={addItem}
          className="mt-4 text-sm font-semibold tracking-wide hover:opacity-70 transition"
        >
          + Add Item
        </button>

      </div> */}

    </div>
  );
};

export default PlannerSection;