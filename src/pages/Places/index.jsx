import style from "./style.module.css";
import PageLayout from "../../layout/PageLayout";
import TagsContainer from "../../components/TagsContainer";
import NFTCard from "../../components/NFTCard";
import { placesNFTs } from "../../data/nfts";

export default function Places() {
  return (
    <PageLayout>
      <TagsContainer />

      <div className={style.nftsContainer}>
        {placesNFTs.map((nft) => (
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
    </PageLayout>
  );
}
