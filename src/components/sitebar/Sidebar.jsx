import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { FaUsers } from "react-icons/fa6";
import { ImDatabase } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import Logo from "../../assets/img/logo.svg";
const SiteBar = () => {
  return (
    <>
      <div className="site_bar">
        <div className="site_bar_icon">
          <div className="site_bar_icon_item">
            <NavLink to={"/"}>
              <img src={Logo} alt="logo" />
            </NavLink>
            <NavLink to={"/"}>
              <IoSettings />
            </NavLink>
            <NavLink to={"/add"}>
              <GiShoppingBag />
            </NavLink>
            <NavLink to={"/add"}>
              <FaUsers />
            </NavLink>
            <NavLink to={"/add"}>
              <ImDatabase />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteBar;
