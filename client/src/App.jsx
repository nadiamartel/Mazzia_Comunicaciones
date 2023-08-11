import style from "./App.module.css";
import { links, sliders } from "./services/constants.js";
import Link from "./components/Link/Link";
import Nav from "./components/Nav/Nav";
import Carousel from "./components/carousel/Carousel";

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

      <footer></footer>
    </>
  );
}

export default App;
