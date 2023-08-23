import s from "./ContactoForm.module.css";

const ContactoForm = () => {
  return (
    <form className={s.form} action="">
      <h5>Dejanos tu mensaje</h5>
      <input type="text" placeholder="Nombre" />
      <input type="number" placeholder="Numero" />
      <input type="email" placeholder="Correo electronico" />
      <textarea
        placeholder="Mensaje"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button>Enviar</button>
    </form>
  );
};

export default ContactoForm;
