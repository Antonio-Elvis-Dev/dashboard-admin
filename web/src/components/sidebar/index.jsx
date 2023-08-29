import "./sidebar.css";
import logo from "../../assets/logo-no-background.svg";

function Sidebar({ sidebarOpen, closeSidebar }) {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="" />
          <h1>KJ Soluções</h1>
        </div>
        <i
          onClick={() => closeSidebar}
          className="fa fa-times"
          id="sidebaricon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-minus-square"></i>
          <a href="">Home</a>
        </div>
        <h2>Admin</h2>
        <div className="sidebar__link">
        <i className="fa fa-gauge-high"></i>
          <a href="">Área Administrativa</a>
      </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="">Área Administrativa</a>
      </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="">Área Administrativa</a>
      </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="">Área Administrativa</a>
      </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="">Área Administrativa</a>
      </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="">Área Administrativa</a>
      </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="">Área Administrativa</a>
      </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="">Área Administrativa</a>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
