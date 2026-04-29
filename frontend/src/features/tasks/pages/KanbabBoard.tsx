import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTaskStatus,
} from "../../../api/taskApi";

type Task = {
  id: number;
  title: string;
  description: string;
  status: number;
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // CREATE TASK
  const handleCreate = async () => {
    if (!title) return;

    await createTask({
      title,
      description: "",
      estimatedHours: 1,
      deadline: new Date().toISOString(),
      priority: 1,
    });

    setTitle("");
    fetchTasks();
  };

  // DELETE TASK
  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  // DRAG DROP
  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const taskId = Number(result.draggableId);
    const newStatus = Number(result.destination.droppableId);

    await updateTaskStatus(taskId, newStatus);

    fetchTasks();
  };

  const columns = [
    { id: 0, title: "Todo" },
    { id: 1, title: "InProgress" },
    { id: 2, title: "Done" },
  ];

  return (
    <div className="p-6 text-white bg-[#0f172a] min-h-screen">

      {/* CREATE TASK */}
      <div className="mb-4 flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task..."
          className="p-2 text-black rounded"
        />

        <button
          onClick={handleCreate}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* BOARD */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-4">

          {columns.map((col) => (
            <Droppable droppableId={col.id.toString()} key={col.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-[#1e293b] p-4 rounded min-h-[400px]"
                >
                  <h2 className="font-bold mb-3">{col.title}</h2>

                  {tasks
                    .filter((t) => t.status === col.id)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-[#334155] p-3 mb-2 rounded"
                          >
                            <div className="flex justify-between">
                              <span>{task.title}</span>

                              <button
                                onClick={() => handleDelete(task.id)}
                                className="text-red-400"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;