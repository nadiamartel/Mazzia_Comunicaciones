import { useEffect, useState } from "react";

const PlanesData = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/planes")
      .then((res) => res.json())
      .then((res) => setPlanes(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {planes?.map((plan) => {
        return (
          <div>
            <h4>Nombre: {plan?.name}</h4>
            <p>id: {plan?.id}</p>
            <h6>Precio: {plan?.price}</h6>
            <h6>Valocidad: {plan?.speed}</h6>
            <h6>Detalle: {plan?.detail}</h6>
          </div>
        );
      })}
    </>
  );
};

export default PlanesData;
