// import { Navigate } from "react-router-dom";
// import type {FC,  ReactNode } from "react";
// import { useAuth } from "../hooks/useAuth";

// type Props={
//   children: ReactNode;
// }

// const ProtectedRoute :FC <{children:ReactNode}>=({children})=>{
//   const { token } = useAuth();

//   if (!token) return <Navigate to="/login" />;

//   return <>{children}</>;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;