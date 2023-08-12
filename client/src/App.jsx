import style from "./App.module.css";
import { links, sliders, faq } from "./services/constants.js";
import Link from "./components/Link/Link";
import Nav from "./components/Nav/Nav";
import Carousel from "./components/carousel/Carousel";
import FaqDropdown from "./components/FAQ_Dropdown/FaqDropdown";

function App() {
  return (
    <>
      <header>
        <Nav />
        <Carousel sliders={sliders} />
      </header>

      <section className={style.links}>
        <Link
          url={links.internet.url}
          icon={links.internet.icon}
          title={links.internet.title}
          text={links.internet.text}
        />
        <Link
          url={links.camaras.url}
          icon={links.camaras.icon}
          title={links.camaras.title}
          text={links.camaras.text}
        />
      </section>

      <section className={style.faq}>
        <FaqDropdown
          question={faq.faqA.question}
          answer={faq.faqA.answer}
        />
        <FaqDropdown
          question={faq.faqB.question}
          answer={faq.faqB.answer}
        />
        <FaqDropdown
          question={faq.faqC.question}
          answer={faq.faqC.answer}
        />
      </section>

      <footer></footer>
    </>
  );
}

export default App;
