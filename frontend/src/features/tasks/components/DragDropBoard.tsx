import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { getTasks, reorderTasks, updateTask, type TaskResponseDTO } from "../../../api/taskApi";
//import { reorderTasks } from "../../../api/taskApi";

const DragDropBoard = () => {
  const [tasks, setTasks] = useState<TaskResponseDTO[]>([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setTasks(items);

    // update order in backend (optional)
    // for (let i = 0; i < items.length; i++) {
    //   await updateTask({ ...items[i], order: i });
    // }
    const updated =items.map((t,index)=>({
      taskId:t.id,
      order:index,
    }));
    try{
      await reorderTasks(updated);

    }catch (error){
      console.error("Reorder failed", error);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
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
                    style={{
                      padding: 10,
                      margin: "10px 0",
                      background: "#eee",
                      borderRadius: "5px",
                    }}
                  >
                    {task.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropBoard;