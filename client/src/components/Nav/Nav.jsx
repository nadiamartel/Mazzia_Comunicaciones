import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import logo from "../../assets/img/logo.webp";

const Nav = () => {
    return (
        <div className={s.container}>
            <a href="/">
                <img src={logo} alt="logo" className={s.logo} />
            </a>
            <section className={s.links}>
                <NavLink to="/planes" className={s.link}>
                    Planes de Internet
                </NavLink>

                <NavLink to="/servicios" className={s.link}>
                    Servicios
                </NavLink>

                <NavLink to="/contacto" className={`${s.link} ${s.other_link}`}>
                    Contacto
                </NavLink>
            </section>
        </div>
    )
}

export default Nav;