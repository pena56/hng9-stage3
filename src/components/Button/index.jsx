import styles from "./style.module.css";

export default function Button({ light, label }) {
  return (
    <button className={light ? styles.mt_btn_light : styles.mt_btn}>
      {label}
    </button>
  );
}
