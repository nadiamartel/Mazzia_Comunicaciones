import s from "./InternetView.module.css";
import PlanTable from "../PlanTable/PlanTable";

const InternetView = () => {
  return (
    <section className={s.main}>
      <header>
        <h2>Selecciona el plan ideal para ti</h2>
        <p>Puedes cambiarlo cuando quieras</p>
      </header>
      <div className={s.container}>
        <PlanTable />

        <button>Siguiente</button>
      </div>
    </section>
  );
};

export default InternetView;
