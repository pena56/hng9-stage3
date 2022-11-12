import { useLayout } from "../../context/LayoutProvider";
import style from "./style.module.css";

export default function NavbarManuButton() {
  const { isSidebarOpen, toggleSideBar } = useLayout();

  return (
    <div
      onClick={toggleSideBar}
      className={`${style.burgermenu} ${isSidebarOpen && style.opened}`}
    >
      <span className={style.line1}></span>
      <span className={style.line2}></span>
      <span className={style.line3}></span>
    </div>
  );
}
