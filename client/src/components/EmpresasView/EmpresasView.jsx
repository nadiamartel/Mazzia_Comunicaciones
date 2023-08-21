import EmpresasForm from "../EmpresasForm/EmpresasForm";
import s from "./EmpresasView.module.css";

const EmpresasView = () => {
  return (
    <section className={s.container}>
      <header className={s.header}>
        <div className={s.textos}>
            <h3>Servicios para empresas</h3>
            <p>
            Desde nuestra red propia de telecomunicaciones, cubrimos las ciudades de Tostado (Sta Fe), Zona Rural de Tostado, Bandera (Stgo del Estero) y Zona Rural. Nuestros servicios de Instalaciones y Mantenimiento de redes proveen soluciones customizadas a clientes de diversas grandes empresas y profesionales de la zona.
            </p>
        </div>
      </header>

      <EmpresasForm />
    </section>
  );
};

export default EmpresasView;
