import { useState } from "react";
import s from "./Login.module.css";
import postLogin from "./postLogin";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    // async fn:  valicacion de usuario
    const response = await toast.promise(postLogin(userData), {
      pending: "Validando",
    });

    // Si se valida correctamente
    if (response.access) {
      // Guradamos el token en localStorage
      window.localStorage.setItem(
        "session",
        JSON.stringify({
          username: response.name,
          token: response.token,
        })
      );
      //Notificamos al usuario su ingreso
      toast.success("Validado correctamente");

      //Lo redireccionamos al panel de administrador
      navigate("/admin");

      //cortamos la ejecucion
      return;
    }

    //En caso de validacion incorrecta, notificamos al usuario
    toast.warn("Verifique su correo y contrasena");
  };

  return (
    <div className={s.container}>
      <section className={s.login}>
        <h5>INICIAR SESION</h5>

        <form className={s.form} onSubmit={handleSubmitLogin}>
          <input
            onChange={handleInputChange}
            value={userData.email}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handleInputChange}
            value={userData.password}
            name="password"
            type="password"
            placeholder="Contraseña"
          />

          <button>Iniciar sesion</button>
        </form>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default login;
