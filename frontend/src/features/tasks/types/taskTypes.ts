export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  estimatedHours: number;
  priority: number;
  isCompleted: boolean;
  order: number;
}

export interface CreateTaskDTO {
  title: string;
  description: string;
  deadline: string;
  estimatedHours: number;
  priority: number;
}

export interface SmartSuggestion {
  taskId: number;
  title: string;
  hoursToDoToday: number;
  deadline: string;
  warning: string;
}

export interface BalancedPlan {
  taskId: number;
  title: string;
  hoursToday: number;
  remainingHours: number;
  deadline: string;
}

export type TaskStatus = "Pending" | "InProgress" | "Completed";

export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  estimatedHours: number;
  priority: number;
  isCompleted: boolean;
  order: number;
  status: TaskStatus;
}

export interface TaskProgress {
  taskId: number;
  date: string;
  hoursWorked: number;
}