import { useLayout } from "../../context/LayoutProvider";
import Button from "../Button";
import style from "./style.module.css";
import logo from "../../assets/logo.svg";

export default function SidebarMenu() {
  const { isSidebarOpen, toggleModal } = useLayout();

  return (
    <aside className={`${style.container} ${isSidebarOpen && style.opened}`}>
      <div>
        <img src={logo} alt="metabnb logo" className={style.nav_logo} />
        <ul className={style.sidebarLinks}>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      </div>

      <Button label="Connect wallet" onClick={toggleModal} />
    </aside>
  );
}
