import { createContext, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within and AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);

  const signin = async (data) => {
    const res = await axios.post("http://localhost:3000/api/signin", data, {
      withCredentials: true,
    });
    console.log(res);
    setUser(res.data);
  };

  const signup = async (data) => {
    const res = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    });
    console.log(res.data);
    setUser(res.data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
