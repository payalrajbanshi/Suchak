import axios from "./axiosInstance";

export const getSummary = () =>
  axios.get("/dashboard/summary");

export const getWeeklyReport = () =>
  axios.get("/dashboard/weekly-report");