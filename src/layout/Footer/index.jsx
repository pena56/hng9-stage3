import style from "./style.module.css";
import logo from "../../assets/logo_white.svg";
import facebookLogo from "../../assets/facebook.svg";
import instagramLogo from "../../assets/instagram.svg";
import twitterLogo from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_contents}>
        <div className={style.footer_promotions}>
          <img src={logo} alt="metabnb logo" />
          <div className={style.footer_socials}>
            <img src={facebookLogo} alt="facebook" />
            <img src={instagramLogo} alt="instagram" />
            <img src={twitterLogo} alt="twitter" />
          </div>
          <p>&copy; {new Date().getFullYear()} Metabnb</p>
        </div>

        <div className={style.footer_links}>
          <p>Community</p>
          <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>

        <div className={style.footer_links}>
          <p>Places</p>
          <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>

        <div className={style.footer_links}>
          <p>About us</p>
          <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
        {/* <div className={style.footer_links_container}>
          
          
          
        </div> */}
      </div>
    </footer>
  );
}
