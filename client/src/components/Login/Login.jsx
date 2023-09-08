import { useState } from "react";
import s from "./Login.module.css";
import postLogin from "./postLogin";
import { useNavigate } from "react-router-dom";

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
    const response = await postLogin(userData);
    if (response.access) {
      window.localStorage.setItem(
        "session",
        JSON.stringify({
          username: response.name,
          token: response.token,
        })
      );
      navigate("/");
      return;
    }

    alert("No se pudo iniciar sesion"); // Cambiar por un toast luego
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
    </div>
  );
};

export default login;
