import style from "./style.module.css";

export default function SearchInput() {
  return (
    <div className={style.container}>
      <input type="text" placeholder="Search for location" />
      <button>Search</button>
    </div>
  );
}
