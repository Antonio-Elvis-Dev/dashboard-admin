import { RiSettings4Line, RiChatNewLine } from "react-icons/ri";
import { TbReportAnalytics, TbBox } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import {
  FiMessageSquare,
  FiFolder,
  
  FiShoppingCart,
  FiLogOut,
  FiBox
} from "react-icons/fi";
import { MdOutlineDashboard, MdLogout, } from "react-icons/md";

import { HiMenuAlt3 } from "react-icons/hi";

import {FaPlusSquare, FaFolderPlus} from 'react-icons/fa'
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

function SidebarMenu() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    logout();
  }
  const menus = [
    { name: "Home", link: "/home", icon: MdOutlineDashboard },
    { name: "User", link: "#", icon: AiOutlineUser },
    { name: "Produtos", link: "/products", icon: FiBox, marginT: true },
    { name: "Pedidos", link: "/requests", icon: TbReportAnalytics },

    // { name: "Saved", link: "#", icon: AiOutlineHeart },
    { name: "Setting", link: "#", icon: RiSettings4Line, marginB:true },
  ];
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          openSidebar ? " w-48" : "w-16"
        } text-gray-100 px-4  duration-500 `}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer "
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.marginT && "mt-5"
              } ${menu?.marginB && 'mb-10'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div className="">
                {React.createElement(menu?.icon, {
                  size: "20",
                  color: `${menu.color}`,
                })}
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  menu?.color ? `font-bold text-base` : ""
                }  ${
                  !openSidebar && "opacity-0 translate-x-28 overflow-hidden"
                }`}
                style={{
                  transitionDelay: `${i + 3}00ms`,
                  color: `${menu?.color}`,
                }}
              >
                {menu?.name}
              </h2>
              <h2
                className={` ${
                  openSidebar && "hidden"
                } absolute left-40 w-0 overflow-hidden  bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <div
            className=" group flex items-center  gap-3.5  p-2 hover:bg-gray-800 rounded-md text-red-800 text-lg font-bold border border-red-400 cursor-pointer"
            onClick={handleLogout}
          >
            <div className="">
                {React.createElement(FiLogOut, {
                  size: "20",
                  color: `rgb(155 28 28)`,
                })}
              </div>
            <h2
              className={`whitespace-pre duration-500  ${
                !openSidebar && "opacity-0 translate-x-28 overflow-hidden"
              }`}
              style={{
                transitionDelay: `900ms`,
                color: `rgb(155 28 28)`,
              }}
            >
              Logout
            </h2>
            <h2
              className={` ${
                openSidebar && "hidden"
              } absolute left-40 w-0 overflow-hidden  bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Logout
            </h2>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
}

export default SidebarMenu;
