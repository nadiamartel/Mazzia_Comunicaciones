import { useState } from "react";
import faqSvgdown from "../../assets/chevron-down-svgrepo-com.svg";
import faqSvgup from "../../assets/chevron-up-svgrepo-com.svg";
import userQuestionSvg from "../../assets/user-question.svg";
import s from "./FaqDropdown.module.css";

const FaqDropdown = ({question, answer}) => {
    const [toogle, setToogle] = useState(false)
  return (
    <>
      <div className={s.container}>
        <button className={s.elements} onClick={() => setToogle(!toogle)}>
          <div>
            <img src={userQuestionSvg} alt="Svg" />
            <p>{question}</p>
          </div>
          <img src={toogle ? faqSvgup : faqSvgdown} alt="svg" />
        </button>
        <div className={toogle ? s.answerShow : s.answerHidden}>
            <p className={s.answer}>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default FaqDropdown;
