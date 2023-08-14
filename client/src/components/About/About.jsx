import logo from "../../assets/img/logo.webp";
import bg from "../../assets/bg.webp";
import s from "./About.module.css";

const About = () => {
  return (
    <section className={s.container}>
      <div>
        <h3>Nosotros</h3>
        <p>
          Somos una pymes de capitales locales creada hace 10 años con el
          objetivo de ofrecer servicios de telecomunicaciones de alta calidad
          para el mercado regional. Día a día, nuestro equipo trabaja para
          diseñar e implementar soluciones innovadoras y a la medida de nuestros
          clientes.
        </p>
        <p>
          Nuestra estructura flexible y pro activa sumada a la red de alianzas
          estratégicas mantenida con los principales proveedores de tecnología
          de la información, nos permite ofrecer una amplia gama de soluciones y
          nos prepara para responder eficientemente a los requerimientos
          tecnológicos más variados
        </p>
      </div>

      <img className={s.logo} src={logo} alt="Logo" />
    </section>
  );
};

export default About;
