import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import logo from "../../assets/img/logo.webp";

const Nav = () => {
  return (
    <div className={s.container}>
      <a href="/">
        <img src={logo} alt="logo" className={s.logo} />
      </a>
      {window.screen.width > 600 ? (
        <section className={s.links}>
          <NavLink to="/planes" className={s.link}>
            Planes
          </NavLink>

          <NavLink to="/servicios" className={s.link}>
            Servicios
          </NavLink>

          <NavLink to="/contacto" className={`${s.link} ${s.other_link}`}>
            Contacto
          </NavLink>
        </section>
      ) : (
        <div class="dropdown">
          <a
            class="btn"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ccc"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#CCC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/planes">
                Planes
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/servicios">
                Servicios
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
