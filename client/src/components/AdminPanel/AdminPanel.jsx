import { useState } from "react";
import PlanesData from "../dataComponents/planesData";
import ConsultasData from "../dataComponents/ConsultasData";
import s from "./AdminPanel.module.css";

const AdminPanel = () => {
  const [dataToShow, setDataToShow] = useState("perfil");

  return (
    <div className={s.container}>
      <nav>
        <ul>
          <li onClick={() => setDataToShow("planes")}>Planes</li>
          <li onClick={() => setDataToShow("consultas")}>Consultas</li>
          <li onClick={() => setDataToShow("perfil")}>Perfil</li>
        </ul>
      </nav>

      <section className={s.content}>
        <h3>Panel de control</h3>
        <div className={s.data}>
          {dataToShow === "planes" && <PlanesData />}
          {dataToShow === "consultas" && <ConsultasData />}
          {dataToShow === "perfil" && <section>Admin Data</section>}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
