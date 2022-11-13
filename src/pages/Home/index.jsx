import PageLayout from "../../layout/PageLayout";
import SearchInput from "../../components/SearchInput";
import style from "./style.module.css";
import bannerImg from "../../assets/banner.png";

export default function Home() {
  return (
    <PageLayout>
      <div className={style.banner}>
        <div className={style.banner_writeups}>
          <h1>
            Rent a <span>Place </span>away from <span>Home </span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <SearchInput />
        </div>
        <img src={bannerImg} alt="banner" />
      </div>
    </PageLayout>
  );
}
