import s from "./Home.module.css";
import Carousel from "../carousel/Carousel";
import { sliders, links, faq, servicesCards } from "../../services/constants";
import Link from "../Link/Link";
import About from "../About/About";
import FaqDropdown from "../FAQ_Dropdown/FaqDropdown";
import ServicioCard from "../serviciosCard/servicioCard";

const Home = () => {
  return (
    <>
      <header>
        <Carousel sliders={sliders} />
      </header>

      <section className={s.links}>
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
        <Link
          url={links.empresas.url}
          icon={links.empresas.icon}
          title={links.empresas.title}
          text={links.empresas.text}
        />
      </section>

      <About />

      <section>
        {servicesCards.map((card, index) => {
          return <ServicioCard card={card} index={index} />;
        })}
      </section>

      <section className={s.faq}>
        <FaqDropdown question={faq.faqA.question} answer={faq.faqA.answer} />
        <FaqDropdown question={faq.faqB.question} answer={faq.faqB.answer} />
        <FaqDropdown question={faq.faqC.question} answer={faq.faqC.answer} />
      </section>
    </>
  );
};

export default Home;
