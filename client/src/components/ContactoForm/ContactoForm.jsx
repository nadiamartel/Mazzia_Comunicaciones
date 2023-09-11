import { useState } from "react";
import s from "./ContactoForm.module.css";
import postConsulta from "./postConsulta";

const ContactoForm = () => {
  const [consulta, setConsulta] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setConsulta({
      ...consulta,
      [name]: value,
    });
  };

  const handleSubmitConsulta = async (e) => {
    e.preventDefault();
    const respone = await postConsulta(consulta);

    setConsulta({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className={s.form} onSubmit={handleSubmitConsulta}>
      <h5>Dejanos tu mensaje</h5>

      <input
        type="text"
        placeholder="Nombre"
        onChange={handleChangeInput}
        value={consulta.name}
        name="name"
      />
      <input
        type="number"
        placeholder="Numero"
        onChange={handleChangeInput}
        value={consulta.phone}
        name="phone"
      />
      <input
        type="email"
        placeholder="Correo electronico"
        onChange={handleChangeInput}
        value={consulta.email}
        name="email"
      />

      <textarea
        placeholder="Mensaje"
        onChange={handleChangeInput}
        value={consulta.message}
        name="message"
        id=""
        cols="30"
        rows="10"
      ></textarea>

      <button>Enviar</button>
    </form>
  );
};

export default ContactoForm;
