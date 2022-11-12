import style from "./style.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarMenu from "../../components/SidebarMenu";

export default function PageLayout({ children }) {
  return (
    <main className={style.container}>
      <Navbar />
      <SidebarMenu />
      <div className={style.content_wrapper}>{children}</div>
      <Footer />
    </main>
  );
}
