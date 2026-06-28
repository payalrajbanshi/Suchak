import type { Checklist } from "./types";

const STORAGE_KEY = "suchak-checklists";

export const loadChecklists = (): Checklist[] => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
};

export const saveChecklists = (lists: Checklist[]) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(lists)
  );
};

export const generateId = () => Date.now();

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning ☀️";

  if (hour < 17) return "Good Afternoon 🌤️";

  return "Good Evening 🌙";
};