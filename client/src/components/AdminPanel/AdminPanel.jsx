import { useState } from "react";

const AdminPanel = () => {
  const [dataToShow, setDataToShow] = useState("consultas");

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setDataToShow("planes")}>Planes</li>
          <li onClick={() => setDataToShow("consultas")}>Consultas</li>
          <li onClick={() => setDataToShow("usuarios")}>Usuarios</li>
        </ul>
      </nav>

      {dataToShow === "planes" && <section>todos los planes</section>}
      {dataToShow === "consultas" && <section>todos las Consultas</section>}
      {dataToShow === "usuarios" && <section>todos los Usuarios</section>}
    </>
  );
};

export default AdminPanel;
