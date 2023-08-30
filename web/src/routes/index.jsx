
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function RoutesApp() {
  const { signed } = useContext(AuthContext);

  // return  <AppRoutes />
  return signed? <AppRoutes />:<AuthRoutes/>
}
