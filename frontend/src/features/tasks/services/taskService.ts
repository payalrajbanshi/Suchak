import axios from "axios";
import type { CreateTaskDTO } from "../types/taskTypes";

const API = "https://localhost:7203/api/tasks";

// 🔥 CREATE AXIOS INSTANCE
const api = axios.create({
  baseURL: API,
});

// 🔥 ATTACH TOKEN AUTOMATICALLY
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// API CALLS
export const getTasks = () => api.get("");
export const createTask = (data: CreateTaskDTO) => api.post("", data);
export const deleteTask = (id: number) => api.delete(`/${id}`);
export const toggleTask = (id: number) => api.post(`/toggle/${id}`);
export const getSmart = () => api.get(`/smart`);
export const getBalanced = () => api.get(`/balanced`);

export const updateStatus = (id: number, status: number) =>
  axios.put(`${API}/status/${id}`, status, {
    headers: { "Content-Type": "application/json" },
  });

export const reorderTasks = (data: { taskId: number; order: number }[]) =>
  api.post(`/reorder`, data);

export const addProgress = (data: any) =>
  axios.post(`https://localhost:7203/api/progress`, data);

export const getProgress = (taskId: number) =>
  axios.get(`https://localhost:7203/api/progress/${taskId}`);