import { Link, redirect, useNavigate } from "react-router-dom";

import { useLayout } from "../../context/LayoutProvider";
import Button from "../Button";
import style from "./style.module.css";
import logo from "../../assets/logo.svg";

export default function SidebarMenu() {
  const navigation = useNavigate();
  const { isSidebarOpen, toggleModal, toggleSideBar } = useLayout();

  const handleLinkClick = (url) => {
    toggleSideBar();
    navigation(url);
  };

  return (
    <aside className={`${style.container} ${isSidebarOpen && style.opened}`}>
      <div>
        <img
          onClick={() => handleLinkClick("/")}
          src={logo}
          alt="metabnb logo"
          className={style.nav_logo}
        />

        <ul className={style.sidebarLinks}>
          <li onClick={() => handleLinkClick("/")}>Home</li>

          <li onClick={() => handleLinkClick("/places")}>Place to stay</li>

          <li>NFTs</li>
          <li>Community</li>
        </ul>
      </div>

      <Button label="Connect wallet" onClick={toggleModal} />
    </aside>
  );
}
