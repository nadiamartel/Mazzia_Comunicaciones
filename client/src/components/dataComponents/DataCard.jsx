import { useState } from "react";
import s from "./DataCard.module.css";
import patchPlan from "./patchPlan";

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
  const [showMoldal, setShowModal] = useState(false);
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
    }

    // setInfoToPatch({});
    window.location.reload();
  };

  return (
    <div className={s.card}>
      <h4>Nombre: {name}</h4>
      <p>ID: {id}</p>
      <h6>{price ? `Precio: $ ${price}` : `Telefono ${phone}`}</h6>
      <h6>{speed ? `Velocidad: ${speed}` : `Correo: ${email}`}</h6>
      <h6>{detail ? `Detalle: ${detail}` : `Mensaje: ${message}`}</h6>
      {price ? (
        <button onClick={() => setShowModal(!showMoldal)}>Editar</button>
      ) : null}

      <>
        {showMoldal ? (
          <form onSubmit={(e) => onSubmit(e, id, infoToPatch)}>
            <input
              onChange={handleChange}
              value={infoToPatch.name}
              name="name"
              type="text"
              placeholder="Nombre"
            />
            <input
              onChange={handleChange}
              value={infoToPatch.price}
              name="price"
              type="number"
              placeholder="Precio"
            />
            <input
              onChange={handleChange}
              value={infoToPatch.speed}
              name="speed"
              type="text"
              placeholder="Velocidad"
            />
            <input
              onChange={handleChange}
              value={infoToPatch.detail}
              name="detail"
              type="text"
              placeholder="Detalle"
            />
            <button>Actualizar</button>
          </form>
        ) : null}
      </>
    </div>
  );
};

export default DataCard;
