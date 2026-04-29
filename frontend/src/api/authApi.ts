import axios from "./axiosInstance";

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
}

export const loginUser =async (data: LoginDTO) =>{
  const res=await axios.post("/auth/login", data);
  localStorage.setItem("token", res.data.token);
  return res;
};

export const registerUser = (data: RegisterDTO) =>
  axios.post("/auth/register", data);
