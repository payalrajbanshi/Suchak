import {
  DndContext,
  closestCenter,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";

import TaskCard from "./TaskCard";
import type { Task } from "../types/taskTypes";

interface Props {
  tasks: Task[];
  onMove: (taskId: number, status: number) => void;
  onReorder: (tasks: { taskId: number; order: number }[]) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const columns = [
  { id: 0, title: "Todo" },
  { id: 1, title: "InProgress" },
  { id: 2, title: "Done" },
];


function DraggableTask({ task, onDelete, onToggle }: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id.toString(),
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <TaskCard task={task} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}


function DroppableColumn({ id, children }: any) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 rounded min-h-[400px] ${
        isOver ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      {children}
    </div>
  );
}

export default function TaskBoard({
  tasks,
  onMove,
  onReorder,
  onDelete,
  onToggle,
}: Props) {
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = Number(over.id);

    onMove(taskId, newStatus);

    const updated = tasks
      .filter((t) => Number(t.status) === newStatus)
      .map((t, index) => ({
        taskId: t.id,
        order: index,
      }));

    onReorder(updated);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-3 gap-6">
        {columns.map((col) => (
          <div key={col.id}>
            <h2 className="font-bold mb-3 text-black">
              {col.title}
            </h2>

            <DroppableColumn id={col.id.toString()}>
              <div className="flex flex-col gap-4">
                {tasks
                  .filter((t) => Number(t.status) === col.id)
                  .map((task) => (
                    <DraggableTask
                      key={task.id}
                      task={task}
                      onDelete={onDelete}
                      onToggle={onToggle}
                    />
                  ))}
              </div>
            </DroppableColumn>
          </div>
        ))}
      </div>
    </DndContext>
  );
}