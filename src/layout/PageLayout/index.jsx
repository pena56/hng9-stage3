import style from "./style.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarMenu from "../../components/SidebarMenu";
import Modal from "../../components/Modal";
import WalletOption from "../../components/WalletOption";

import { walletOptions } from "../../data/walletOptions";

export default function PageLayout({ children }) {
  return (
    <main className={style.container}>
      <Modal headerTitle="Connect Wallet">
        <p>Choose your preferred wallet</p>
        {walletOptions.map((wallet) => (
          <WalletOption key={wallet.id} icon={wallet.icon} name={wallet.name} />
        ))}
      </Modal>
      <Navbar />
      <SidebarMenu />
      <div className={style.content_wrapper}>{children}</div>
      <Footer />
    </main>
  );
}
