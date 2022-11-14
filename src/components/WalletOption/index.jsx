import style from "./style.module.css";

export default function WalletOption({ icon, name }) {
  return (
    <div className={style.container}>
      <img src={icon} alt="wallet icon" />
      <p>{name}</p>
      <span></span>
    </div>
  );
}
