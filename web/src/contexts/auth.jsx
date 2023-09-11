import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";
import { redirect, useNavigate } from "react-router-dom";

import cookies from "js-cookie";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState();

  const [categories, setCategories] = useState("");
  const [products, setProducts] = useState("");
  const [order, setOrder] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const tokenCookie = cookies.get("authToken");

    if (tokenCookie) {
      setAuth(tokenCookie);
    }
    api.defaults.headers["Authorization"] = `Bearer ${tokenCookie}`;
    searchCategory();
    searchProducts();
  }, [order]);

  async function login(email, password) {
    try {
      const userData = await api.post("/session", {
        email,
        password,
      });

      api.defaults.headers["Authorization"] = `Bearer ${userData.data.token}`;

      cookies.set("authToken", userData.data.token);

      setAuth(userData?.data?.token);

      navigate("/home");
      searchCategory();
    } catch (error) {
      console.log(error);
    }
  }

  async function searchCategory() {
    try {
      let categories = await api.get("/category");

      setCategories(categories?.data);
      // console.log(categories.data)
    } catch (error) {
      console.log(`${error}`);
    }
  }

  async function searchProducts() {
    try {
      let products = await api.get("/products");

      setProducts(products?.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function createOrder(name, table) {
    try {
      const response = await api.post("/order", {
        name,
        table: Number(table),
      });

      setOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  // VERIFICAR ADD ITEM ORDER
  


  async function addItemOrder(productItem,qtdItem) {
    if ( productItem == "" || qtdItem == "") {
      alert("Campos Invalidos");
    }
    try {

      // console.log(`${order_id} - ${productItem} - ${qtdItem}`);
      const response = await api.post("/order/add", {
        order_id:order?.id,
        product_id:productItem,
        amount:Number(qtdItem),
      });

      alert("Criou")
    } catch (error) {
      console.log(error);
    }
  }

  async function createCategory(name) {
    if (name == "") {
      alert("Nome inválido");
    } else {
      try {
        const response = await api.post("/category", { name });
        alert(`Categoria "${response.data.name}" criada `);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function createProduct(codProd, name, price, category_id, description) {
    if (name == "" || price == "" || category_id == "" || codProd == "") {
      alert("Campo invalido");
    } else {
      try {
        const response = await api.post("/product", {
          name,
          price,
          category_id,
          codigoProd: codProd,
          description,
        });
        alert(`Produto "${response.data.name}" criado`);
      } catch (error) {
        alert(error);
      }
    }
  }

  async function logout() {
    // cookies.remove("authToken");
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
        searchProducts,
        createCategory,
        createProduct,
        createOrder,
        addItemOrder,
        order,
        products,
        categories,
        signed: !!auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
