import axios from "./axiosInstance";

export interface CreateTaskDTO {
  title: string;
  description: string;
  estimatedHours: number;
  deadline: string;
  priority: number;
}

export interface TaskResponseDTO {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  deadline: string;
  order?:number;
}

export const createTask = (data: CreateTaskDTO) =>
  axios.post("/task", data);

export const getTasks = () =>
  axios.get("/task");

export const deleteTask = (id: number) =>
  axios.delete(`/task/${id}`);

export const updateTask = (data: TaskResponseDTO) =>
  axios.put("/task", data);


export const toggleTask=(id: number)=>
  axios.patch(`/task/toggle/${id}`);

export const reorderTasks=(data:any[])=>
  axios.post("/task/reorder",data);

export const getBalancedPlan =()=>
  axios.get("/tasks/balanced");

export const getSmartTasks=()=>axios.get("/tasks/smart");

export const updateTaskStatus = (id, status) =>
  axios.put(`/tasks/status/${id}`, status);