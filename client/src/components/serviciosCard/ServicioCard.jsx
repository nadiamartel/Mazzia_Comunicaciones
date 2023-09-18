import s from "./ServicioCard.module.css";
import { useEffect, useState } from "react";

const ServicioCard = ({ card, index }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = document
        .querySelector(`.${s.card}`)
        .getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardPosition < windowHeight * 0.5) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${s.card} ${shouldAnimate ? s.animate : ""}`}>
      {index % 2 === 0 ? (
        <>
          <div className={s.textos}>
            <h4>{card.title}</h4>
            <p>{card.content}</p>
          </div>
          <img className={s.img} src={card.image} alt={card.title} />
        </>
      ) : (
        <>
          <img className={s.img} src={card.image} alt={card.title} />
          <div className={s.textos}>
            <h4>{card.title}</h4>
            <p>{card.content}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicioCard;
