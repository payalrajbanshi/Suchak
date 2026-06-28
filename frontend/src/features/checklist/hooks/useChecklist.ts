import { useEffect, useState } from "react";
import  type { Checklist } from "../types";
import {
  loadChecklists,
  saveChecklists,
  generateId,
} from "../utils";

export default function useChecklist() {
  const [lists, setLists] = useState<Checklist[]>([]);

  useEffect(() => {
    setLists(loadChecklists());
  }, []);

  useEffect(() => {
    saveChecklists(lists);
  }, [lists]);

  const createChecklist = (title: string) => {
    if (!title.trim()) return;

    const newChecklist: Checklist = {
      id: generateId(),
      title,
      createdAt: new Date().toLocaleDateString(),
      sections: [
  {
    id: 1,
    title: "SECTION 1",
    color: "bg-pink-200",
    items: [],
  },
  {
    id: 2,
    title: "SECTION 2",
    color: "bg-purple-200",
    items: [],
  },
  {
    id: 3,
    title: "SECTION 3",
    color: "bg-yellow-200",
    items: [],
  },
  {
    id: 4,
    title: "SECTION 4",
    color: "bg-green-200",
    items: [],
  },
  {
    id: 5,
    title: "SECTION 5",
    color: "bg-orange-200",
    items: [],
  },
  {
    id: 6,
    title: "SECTION 6",
    color: "bg-blue-200",
    items: [],
  },
],
    };

    setLists([newChecklist, ...lists]);
  };

  const updateChecklist = (updated: Checklist) => {
    setLists(
      lists.map((list) =>
        list.id === updated.id ? updated : list
      )
    );
  };

  const deleteChecklist = (id: number) => {
    setLists(
      lists.filter((list) => list.id !== id)
    );
  };
const getChecklist = (id: number) => {
  return lists.find(x => x.id === id);
};

const saveChecklist = (updated: Checklist) => {
  setLists(
    lists.map(list =>
      list.id === updated.id
        ? updated
        : list
    )
  );
};


  return {
    lists,
    createChecklist,
    updateChecklist,
    deleteChecklist,

    getChecklist,
    saveChecklist
  };
}