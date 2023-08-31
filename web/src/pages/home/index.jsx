import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import SidebarMenu from "../../components/sidebarMenu";

const Home = () => {

  return (
    <div className="flex">
      <SidebarMenu/>
      Main
    </div>
  );
};

export default Home;
