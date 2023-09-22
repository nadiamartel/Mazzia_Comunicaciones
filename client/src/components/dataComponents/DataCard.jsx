import { useState } from "react";
import s from "./DataCard.module.css";
import patchPlan from "./patchPlan";
import deleteConsulta from "./deleteConsulta";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  //Handler de actualizacion de planes
  const onSubmit = async (e, id, data) => {
    e.preventDefault();
    const response = await toast.promise(patchPlan(id, data), {
      pending: "Actializando plan",
    });

    if (response?.name) {
      toast.success(`El plan con id:${id}, se ha actualizado correctamente`);

      setTimeout(() => {
        window.location.reload();
      }, 5000);
      return;
    }

    toast.error(response.error);
  };

  // Handler de eliminacion de consulta
  const handleDeleteConsulta = async (id) => {
    const response = await toast.promise(deleteConsulta(id), {
      pending: "Eliminando consulta",
    });

    if (response?.name) {
      toast.success(`La consulta con id: ${id}, se ha eliminado correctamente`);

      setTimeout(() => {
        window.location.reload();
      }, 5000);
      return;
    }

    toast.error(response.error);
  };

  return (
    <>
      <div className={`card ${s.card}`}>
        <h5 className="card-header">{name}</h5>
        <div className={`card-body ${s.card_body}`}>
          <h6 className="card-subtitle mb-2 text-body-secondary">ID:{id}</h6>

          <p className="card-text">
            {price ? <><span>Precio:</span> $ {price}</> 
                   : <><span>Telefono:</span>{phone}</>}
          </p>

          <p className="card-text">
            {speed ? <><span>Velocidad:</span> {speed}</> 
                   : <><span>Correo:</span>{email}</>}
          </p>
          
          <p className="card-text">
            {detail ? <><span>Detalle:</span>{detail}</> 
                    : <><span>Mensaje:</span>{message}</>}
          </p>
          {price ? (
            <button
              type="button"
              className={`btn ${showModal ? "btn-danger" :  "btn-primary"}`}
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
    </>
  );
};

export default DataCard;
