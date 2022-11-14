import { useState, useRef, useEffect } from "react";
import style from "./style.module.css";
import { tags } from "../../data/tags";
import filterIcon from "../../assets/filter.svg";

export default function TagsContainer() {
  const tagsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkCanScroll = () => {
    if (tagsRef.current.scrollLeft <= 0) {
      setCanScrollLeft(false);
    } else {
      setCanScrollLeft(true);
    }

    if (
      tagsRef.current.scrollLeft + tagsRef.current.offsetWidth >=
      tagsRef.current.scrollWidth
    ) {
      setCanScrollRight(false);
    } else {
      setCanScrollRight(true);
    }
  };

  useEffect(() => {
    if (tagsRef) {
      checkCanScroll();
      tagsRef.current.addEventListener("scroll", checkCanScroll);
      window.addEventListener("resize", checkCanScroll);
    }
  }, [tagsRef]);

  const onRightScroll = () => {
    tagsRef.current.scrollLeft += 100;
  };

  const onLeftScroll = () => {
    tagsRef.current.scrollLeft -= 100;
  };

  return (
    <div className={style.container}>
      <div className={style.filterContainer}>
        <p>Location</p>
        <img src={filterIcon} alt="" />
      </div>
      <div className={style.tagsContainer}>
        <div className={style.tagsWrapper}>
          {canScrollLeft && (
            <span onClick={onLeftScroll} className={style.leftIcon}></span>
          )}
          {canScrollRight && (
            <span onClick={onRightScroll} className={style.rightIcon}></span>
          )}
        </div>
        <ul ref={tagsRef} className={style.tags}>
          {tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
