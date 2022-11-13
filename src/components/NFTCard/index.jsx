import style from "./style.module.css";
import star from "../../assets/star.svg";
import heart from "../../assets/heart.svg";

export default function NFTCard({
  cover,
  name,
  price,
  distance,
  availability,
  stars,
}) {
  return (
    <div className={style.container}>
      <img className={style.heart} src={heart} alt="" />
      <img src={cover} alt="nft" className={style.cover} />
      <div className={style.details}>
        <div className={style.row}>
          <p>{name}</p>
          <p className={style.bold}>{price}</p>
        </div>
        <div className={style.row}>
          <p>{distance}</p>
          <p>{availability}</p>
        </div>
        <div className={style.ratings}>
          {[...Array(stars).keys()].map((n) => (
            <img key={n} src={star} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
