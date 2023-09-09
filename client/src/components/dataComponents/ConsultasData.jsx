import { useEffect, useState } from "react";

const ConsultasData = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/consultas")
      .then((res) => res.json())
      .then((res) => setConsultas(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {consultas?.map((consulta) => {
        return (
          <div>
            <h4>Nombre: {consulta?.name}</h4>
            <p>id: {consulta?.id}</p>
            <h6>Telefono: {consulta?.phone}</h6>
            <h6>Email: {consulta?.email}</h6>
            <h6>Mensaje: {consulta?.message}</h6>
          </div>
        );
      })}
    </>
  );
};

export default ConsultasData;
