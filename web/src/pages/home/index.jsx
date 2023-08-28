import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import DrawerMenu from "../../components/drawer";

import { Alert, Button,  } from "flowbite-react";
export default function Home() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    logout();
  }

  return (
    <div className="flex flex-col">
      <DrawerMenu/>
      <h1>Home</h1>
      
      </div>
    
  );
}
