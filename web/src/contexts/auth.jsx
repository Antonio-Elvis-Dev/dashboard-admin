import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

import cookies from "js-cookie";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(cookies.get("authToken"));

  const [categorys, setCategorys] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storageToken = localStorage.getItem("token");


    if (storageToken) {
      setAuth(true);
    }
  }, []);

  async function login(email, password) {
    try {
      const userData = await api.post("/session", {
        email,
        password,
      });

      cookies.set("authToken", userData.data.token);

      setAuth(userData.data);
      localStorage.setItem("token", userData.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  async function searchCategory() {
    try {
      const categorys = await api.get("/category", {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });

      setCategorys(categorys?.data);
      console.log(categorys?.data)
    } catch (error) {
      console.log(`${error}`);
    }
  }

  async function logout() {
    cookies.remove("authToken");
    localStorage.removeItem("token");
    setAuth(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ login, logout,searchCategory, categorys, signed: !!auth }}>
      {children}
    </AuthContext.Provider>
  );
}
