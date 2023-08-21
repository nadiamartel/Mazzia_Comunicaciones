import s from "./EmpresasForm.module.css";

const EmpresasForm = () => {
  return (
    <section className={s.container}>
      <form>
        <div className={s.titles}>
          <h2>Completa el formulario</h2>
          <h5>Un representante se va contactar contigo</h5>
        </div>

        <fieldset className={s.inputs_area}>
          <div className={s.fields_items}>
            <label htmlFor="razon">Razon social</label>
            <input
              id="razon"
              className={s.input}
              type="text"
              placeholder="ej. Nombre"
            />
          </div>

          <div className={s.fields_items}>
            <label htmlFor="cuit">CUIT</label>
            <input
              id="cuit"
              className={s.input}
              type="number"
              placeholder="ej. 12-34567891-2"
            />
          </div>
        </fieldset>

        <fieldset className={s.inputs_area}>
          <div className={s.fields_items}>
            <label htmlFor="nombre">Nombre y Apellido del solicitante</label>
            <input
              id="nombre"
              className={s.input}
              type="text"
              placeholder="ej. Nombre y Apellido"
            />
          </div>

          <div className={s.fields_items}>
            <label htmlFor="correo">Correo electronico</label>
            <input
              id="correo"
              className={s.input}
              type="email"
              placeholder="ej.correo@gmail.com"
            />
          </div>
        </fieldset>

        <fieldset className={s.inputs_area}>
          <div className={s.cod}>
            <label htmlFor="codarea">Codigo de area</label>
            <input
              id="codarea"
              className={s.input}
              type="number"
              placeholder="Cod. area"
            />
          </div>

          <div className={s.fields_items}>
            <label htmlFor="numero">Numero</label>
            <input
              id="numero"
              className={s.input}
              type="number"
              placeholder="Numero"
            />
          </div>
        </fieldset>

        <fieldset className={s.inputs_area}>
          <div className={s.fields_items}>
            <label htmlFor="comentario">Comentarios</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </fieldset>

        <button>PEDIR CONTACTO</button>
      </form>
    </section>
  );
};

export default EmpresasForm;
