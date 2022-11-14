import styles from "./style.module.css";

export default function Button({ light, label, onClick }) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    } else {
      return;
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={light ? styles.mt_btn_light : styles.mt_btn}
    >
      {label}
    </button>
  );
}
