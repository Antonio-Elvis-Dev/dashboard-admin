import "./sidebar.css";
import logo from "../../assets/logo-no-background.svg";

import {
  BiTime,
  BiSolidMinusSquare,
  BiTachometer,
  BiBuilding,
  BiArchive,
  BiCategoryAlt, 
  BiBarChartSquare,
  BiFile,
  BiPowerOff,
  BiTask,
  BiMale,
  BiMoney,
  BiUserCircle,
} from "react-icons/bi";

import { FaTimes, FaFile, FaUserCircle } from "react-icons/fa";

function Sidebar({ sidebarOpen, closeSidebar }) {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="" />
          <h1>KJ Soluções</h1>
        </div>
        <FaTimes  id="sidebarIcon" aria-hidden="true" className="iconTitle"  />
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <BiSolidMinusSquare className="icon" />

          <a href="#">Home</a>
        </div>
        <h2>Admin</h2>

        <div className="sidebar__link">
          <BiTachometer className="icon" />
          <a href="#">Área Administrativa</a>
        </div>

        <div className="sidebar__link">
          <BiBuilding className="icon" />
          <a href="#">Lojas</a>
        </div>

        <div className="sidebar__link">
          <BiArchive className="icon" />
          <a href="#">Produtos</a>
        </div>

        <div className="sidebar__link">
          <BiBarChartSquare className="icon" />
          <a href="#">Categorias</a>
        </div>

        <div className="sidebar__link">
          <BiCategoryAlt className="icon" />
          <a href="#">Pedidos</a>
        </div>

        <div className="sidebar__link">
          <BiMale className="icon" />
          <a href="#">Administradores</a>
        </div>

        <div className="sidebar__link">
          <BiUserCircle className="icon" />
          <a href="#">Usuários</a>
        </div>

        <div className="sidebar__link">
          <BiMoney className="icon" />
          <a href="#">Pagamentos e Custos</a>
        </div>

        <div className="sidebar__link">
          <BiTask  className="icon"/>
          <a href="#">A plataforma</a>
        </div>

        <div className="sidebar__link">
          <BiFile  className="icon"/>
          <a href="#">Politica de Privacidade</a>
        </div>

        <div className="sidebar__logout">
          <BiPowerOff  className="icon"/>
          <a href="#">Log Out</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
