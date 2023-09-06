import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";
import { redirect, useNavigate } from "react-router-dom";

import cookies from "js-cookie";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState();

  const [tokenUser, setTokenUser] = useState('')

  const [categories, setCategories] = useState("");

  const [returnCategory, setReturnCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storageToken = localStorage.getItem("token");

    if (storageToken) {
      setAuth(storageToken);
    }
    api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;

    searchCategory();
  }, []);

  async function login(email, password) {
    try {
      const userData = await api.post("/session", {
        email,
        password,
      });

      
      // console.log(userData.data);
      api.defaults.headers["Authorization"] = `Bearer ${userData.data.token}`;
      
      cookies.set("authToken", userData.data.token);
      localStorage.setItem("token", userData.data.token);
      setAuth(userData?.data?.token);
      setTokenUser(userData?.data?.token)
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  async function searchCategory() {
    try {
      const categorys = await api.get("/category");
      api.defaults.headers["Authorization"] = `Bearer ${tokenUser}`;
      setCategorys(categorys?.data);
    } catch (error) {
      console.log(`${error}`);
    }
  }

  async function createCategory(name) {
    if (name == "") {
      alert('Nome inválido')
    }else{

      
      try {
        const response = await api.post("/category", { name });
        setReturnCategory(response?.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function logout() {
    cookies.remove("authToken");
    localStorage.removeItem("token");
    setAuth(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        searchCategory,
        createCategory,
        categories,
        signed: !!auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
