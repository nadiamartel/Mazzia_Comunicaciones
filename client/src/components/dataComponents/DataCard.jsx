import { useState } from "react";
import s from "./DataCard.module.css";
import patchPlan from "./patchPlan";
import deleteConsulta from "./deleteConsulta";

const DataCard = ({
  id,
  name,
  phone,
  email,
  message,
  price,
  speed,
  detail,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [infoToPatch, setInfoToPatch] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoToPatch({
      ...infoToPatch,
      [name]: value,
    });
  };

  const onSubmit = async (e, id, data) => {
    e.preventDefault();
    const response = await patchPlan(id, data);

    if (response?.name) {
      alert(`Se ha actualizado el plan con id:${id}`);
      window.location.reload();
      return;
    }

    alert(response.error);
    // setInfoToPatch({});
  };

  const handleDeleteConsulta = async (id) => {
    const response = await deleteConsulta(id);

    if (response?.name) {
      alert(`La consulta con id: ${id}, se ha eliminado correctamente`);
      window.location.reload();
      return;
    }

    alert(response.error);
  };

  return (
    <>
      <div className={`card ${s.card}`}>
        <h5 className="card-header">{name}</h5>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-body-secondary">ID:{id}</h6>
          <p className="card-text">
            {price ? `Precio: $ ${price}` : `Telefono: ${phone}`}
          </p>
          <p className="card-text">
            {speed ? `Velocidad: ${speed}` : `Correo: ${email}`}
          </p>
          <p className="card-text">
            {detail ? `Detalle: ${detail}` : `Mensaje: ${message}`}
          </p>
          {price ? (
            <button
              type="button"
              className={`btn ${showModal ? "btn-danger" : "btn-primary"}`}
              onClick={() => setShowModal(!showModal)}
            >
              Editar
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteConsulta(id)}
            >
              Eliminar
            </button>
          )}
        </div>

        <>
          {showModal ? (
            <form
              className={s.form}
              onSubmit={(e) => onSubmit(e, id, infoToPatch)}
            >
              <input
                onChange={handleChange}
                // value={infoToPatch.name}
                name="name"
                type="text"
                placeholder="Nombre"
                className="form-control"
              />
              <input
                onChange={handleChange}
                // value={infoToPatch.price}
                name="price"
                type="number"
                placeholder="Precio"
                className="form-control"
              />
              <input
                onChange={handleChange}
                // value={infoToPatch.speed}
                name="speed"
                type="text"
                placeholder="Velocidad"
                className="form-control"
              />
              <input
                onChange={handleChange}
                // value={infoToPatch.detail}
                name="detail"
                type="text"
                placeholder="Detalle"
                className="form-control"
              />
              <button type="submit" className="btn btn-primary">
                Actualizar
              </button>
            </form>
          ) : null}
        </>
      </div>
    </>
  );
};

export default DataCard;
