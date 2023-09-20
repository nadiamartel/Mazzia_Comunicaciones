import { useState } from "react";
import s from "./ContactoForm.module.css";
import postConsulta from "./postConsulta";
import { validateConsulta } from "./contactoValidation";

const ContactoForm = () => {
  const [consulta, setConsulta] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setConsulta({
      ...consulta,
      [name]: value,
    });

    const validation = validateConsulta(consulta);
    if (validation.error) {
      return setErrors(validation?.error.issues[0]?.message);
    }
    setErrors("");
  };

  const handleSubmitConsulta = async (e) => {
    e.preventDefault();
    // alert("habilitado");

    const respone = await postConsulta(consulta);
    //Toast

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
      {errors && <p className={s.error}>{errors}</p>}

      <button disabled={consulta.name.length == 0 || errors ? true : false}>
        Enviar
      </button>
    </form>
  );
};

export default ContactoForm;
