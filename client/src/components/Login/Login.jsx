import s from "./Login.module.css";

const login = () => {
  return (
    <div className={s.container}>
      <section className={s.login}>
        <h5>INICIAR SESION</h5>
        <form className={s.form}>
          <input type="email" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña"/>

          <button>Iniciar sesion</button>
        </form>
      </section>
    </div>
  );
};

export default login;
