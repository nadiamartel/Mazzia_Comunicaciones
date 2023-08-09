import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () =>{
    return(
        <div className={s.container}>
            <section>
               <h3>Logo</h3> 
            </section>
            <section className={s.links}>
                <NavLink to="/planes" className={s.link}>
                    Planes de Internet
                </NavLink>

                <NavLink to="/servicios" className={s.link}>
                    Servicios
                </NavLink>

                <NavLink to="/contacto" className={s.link}>
                    Contacto
                </NavLink>
            </section>
        </div>
    )
}

export default Nav;