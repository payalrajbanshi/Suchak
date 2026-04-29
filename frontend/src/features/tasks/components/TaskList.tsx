import { useEffect, useState } from "react";
import { getTasks, deleteTask,toggleTask , updateTask } from "../../../api/taskApi";

const TaskList = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState("");

 const fetchTasks = async () => {
  try {
    setLoading(true);
    const res = await getTasks();
    setTasks(res.data);
  } catch {
    setError("Failed to load tasks");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);
  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>;

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };
  const handleToggle=async (id:number)=>{
    await toggleTask(id);
    fetchTasks();
  };
  const handleEdit=async (task:any)=>{
    const newTitle=prompt("Edit title", task.title);
    if(!newTitle) return ;
    await updateTask({
      ...task,
      title:newTitle
    });
    fetchTasks();
  };

  return (
    <div>
      {tasks.map((t) => (
        <div key={t.id} style={{border:"1px solid #ccc", padding:"10px", marginBottom:"10px"}}>
          <input type="checkbox" checked={t.isCompleted} onChange={()=>handleToggle(t.id)}/>
          <span style={{marginLeft:"10px", textDecoration:t.isCompleted? "line-through":"none",}}>
            {t.title}
          </span>
          <p style={{margin:"5px 0 0 0", color: "#555"}}>
            {t.description}
          </p>
          {/* <h3>{t.title}</h3>
          <p>{t.description}</p> */}
          <button onClick={()=>handleEdit(t)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;