import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import Sidebar from "../../components/sidebar";

const Home = () => {
  const { logout } = useContext(AuthContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar =()=>{
    setSidebarOpen(false)
  }


  async function handleLogout() {
    logout();
  }

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      Main
    </div>
  );
};

export default Home;
