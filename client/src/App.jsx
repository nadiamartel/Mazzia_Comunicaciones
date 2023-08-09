import style from "./App.module.css";
import { links } from "./services/constants.js";
import Link from "./components/Link/Link";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <section className={style.links}>
        <Link
          url={links.internet.url}
          icon={links.internet.icon}
          title={links.internet.title}
          text={links.internet.text}
        />
        <Link
          url={links.alarmas.url}
          icon={links.alarmas.icon}
          title={links.alarmas.title}
          text={links.alarmas.text}
        />
        <Link
          url={links.camaras.url}
          icon={links.camaras.icon}
          title={links.camaras.title}
          text={links.camaras.text}
        />
        <Link
          url={links.seguridad.url}
          icon={links.seguridad.icon}
          title={links.seguridad.title}
          text={links.seguridad.text}
        />
      </section>

      <footer></footer>
    </>
  );
}

export default App;
