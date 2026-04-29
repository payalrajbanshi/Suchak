import { useState } from "react";
import { motion } from "framer-motion";
import { loginUser } from "../../../api/authApi";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [loading, setLoading]=useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

 
const handleLogin=async ()=>{

  if(!email || !password){
    alert("Please fill all fields");
    return ;
  }
    try {
      setLoading(true);
      const res = await loginUser({email, password});
      login(res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid email or password");
    }finally{
      setLoading(false);

    }
  };

 
return (

  <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-500 to-indigo-500">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[800px] h-[500px] bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl flex overflow-hidden"
      >

        {/* LEFT DESIGN */}
        <div className="w-1/2 bg-indigo-500 text-white flex flex-col justify-center items-center rounded-r-[100px]">
          <h1 className="text-3xl font-bold mb-2">Suchak</h1>
          <p className="text-center px-6 text-sm text-indigo-100">
            Smart Task Management System 
          </p>
        </div>

<div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl text-black ;font-bold mb-6">Sign In</h2>

          <input
            className="border border-gray-300 focus:border-indigo-500 p-2 mb-4 rounded-lg outline-none transition"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="border border-gray-300 focus:border-indigo-500 p-2 mb-4 rounded-lg outline-none transition"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-center">
            Don't have an account?
            <span
              onClick={()=>navigate("/register")}
              className="ext-indigo-600 cursor-pointer hover:underline">Register
            </span>
           
          </p>
        </div>
        
</motion.div>
      </div>
    
  );
};
export default Login;