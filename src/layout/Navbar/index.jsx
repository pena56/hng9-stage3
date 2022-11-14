import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";
import logo from "../../assets/logo.svg";
import NavbarManuButton from "../../components/NavbarMenuButton";
import Button from "../../components/Button";
import { useLayout } from "../../context/LayoutProvider";

export default function Navbar() {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const { toggleModal } = useLayout();

  const stickNavbar = () =>
    window.scrollY >= 120 ? setIsNavSticky(true) : setIsNavSticky(false);

  window.addEventListener("scroll", stickNavbar);

  return (
    <nav
      className={`${style.nav_container} ${isNavSticky && style.nav_sticky}`}
    >
      <div className={style.nav_contents}>
        <Link to="/">
          <img src={logo} alt="metabnb logo" className={`${style.nav_logo} `} />
        </Link>

        <ul className={style.nav_links}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/places">
            <li>Place to stay</li>
          </Link>
          <Link to="/nfts">
            <li>NFTs</li>
          </Link>
          <Link to="/community">
            <li>Community</li>
          </Link>
        </ul>

        <Button onClick={toggleModal} label="Connect wallet" />

        <NavbarManuButton />
      </div>
    </nav>
  );
}
