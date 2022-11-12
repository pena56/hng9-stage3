import styles from "./style.module.css";

export default function Button({ light }) {
  return (
    <button className={light ? styles.mt_btn_light : styles.mt_btn}>
      Connect wallet
    </button>
  );
}
