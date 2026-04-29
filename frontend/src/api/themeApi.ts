import axios from "./axiosInstance";

export interface UpdateThemeDTO {
  themeMode: string;
  primaryColor: string;
  backgroundImageUrl: string;
}

export const updateTheme = (data: UpdateThemeDTO) =>
  axios.put("/theme", data);