import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
// import PlanesData from "../dataComponents/planesData";
// import ConsultasData from "../dataComponents/ConsultasData";
import s from "./AdminPanel.module.css";

const PlanesData = lazy(() => import("../dataComponents/planesData"));
const ConsultasData = lazy(() => import("../dataComponents/ConsultasData"));

const AdminPanel = () => {
  const navigate = useNavigate();
  const [dataToShow, setDataToShow] = useState("perfil");

  useEffect(() => {
    const auth = JSON.parse(window.localStorage.getItem("session"));

    !auth?.token ? navigate("/") : null;
  }, []);

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
          {dataToShow === "planes" && (
            <Suspense fallback={<Loader />}>
              <PlanesData />
            </Suspense>
          )}
          {dataToShow === "consultas" && (
            <Suspense fallback={<Loader />}>
              <ConsultasData />
            </Suspense>
          )}
          {dataToShow === "perfil" && <section>Admin Data</section>}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
