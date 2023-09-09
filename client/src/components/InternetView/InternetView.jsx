import s from "./InternetView.module.css";
import PlanTable from "../PlanTable/PlanTable";
import { useNavigate } from "react-router-dom";

const InternetView = () => {
  const navigate = useNavigate();

  return (
    <section className={s.main}>
      <header>
        <h2>Selecciona el plan ideal para ti</h2>
        <p>Puedes cambiarlo cuando quieras</p>
      </header>
      <div className={s.container}>
        <PlanTable />

        <button onClick={() => navigate("/contacto")}>Siguiente</button>
      </div>
    </section>
  );
};

export default InternetView;
