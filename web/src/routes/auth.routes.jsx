import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";


export default function AuthRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
  );
}
