import PageLayout from "../../layout/PageLayout";
import SearchInput from "../../components/SearchInput";
import NFTCard from "../../components/NFTCard";
import style from "./style.module.css";

import bannerImg from "../../assets/banner.png";
import mbToken from "../../assets/mbToken.svg";
import metamask from "../../assets/metamask.svg";
import openSea from "../../assets/openSea.svg";

import { homeNFTs } from "../../data/nfts";

export default function Home() {
  return (
    <PageLayout>
      {/* banner */}
      <section className={style.banner}>
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
      </section>

      {/* tokens */}
      <section className={style.tokenContainer}>
        <img src={mbToken} alt="mbToken" />
        <img src={metamask} alt="metamask" />
        <img src={openSea} alt="openSea" />
      </section>

      {/* Inspirations */}
      <section className={style.inspirationContainer}>
        <h3>Inspiration for your next adventure</h3>

        <div className={style.nftsContainer}>
          {homeNFTs.map((nft) => (
            <NFTCard
              key={nft.id}
              cover={nft.cover}
              name={nft.name}
              price={nft.price}
              distance={nft.distance}
              availability={nft.availability}
              stars={nft.stars}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
