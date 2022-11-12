import style from "./style.module.css";
import Navbar from "../Navbar";
import SidebarMenu from "../../components/SidebarMenu";

export default function PageLayout({ children }) {
  return (
    <main className={style.container}>
      <Navbar />
      <SidebarMenu />
      <div className={style.content_wrapper}>{children}</div>
    </main>
  );
}
