import { useState } from "react";
import PlanesData from "../dataComponents/planesData";
import ConsultasData from "../dataComponents/ConsultasData";

const AdminPanel = () => {
  const [dataToShow, setDataToShow] = useState("perfil");

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setDataToShow("planes")}>Planes</li>
          <li onClick={() => setDataToShow("consultas")}>Consultas</li>
          <li onClick={() => setDataToShow("usuarios")}>perfil</li>
        </ul>
      </nav>

      {dataToShow === "planes" && <PlanesData />}
      {dataToShow === "consultas" && <ConsultasData />}
      {dataToShow === "perfil" && <section>Admin Data</section>}
    </>
  );
};

export default AdminPanel;
