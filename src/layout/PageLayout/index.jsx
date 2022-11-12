import style from "./style.module.css";

export default function PageLayout({ children }) {
  return (
    <main className={style.container}>
      <div className={style.content_wrapper}>{children}</div>
    </main>
  );
}
