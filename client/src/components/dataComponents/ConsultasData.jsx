import { useEffect, useState } from "react";
import DataCard from "./DataCard";

const ConsultasData = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/consultas")
      .then((res) => res.json())
      .then((res) => {
        if (res.message) return;
        setConsultas(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {consultas.length === 0 ? (
        <h2> No hay consultas </h2>
      ) : (
        consultas?.map((consulta) => {
          return (
            <DataCard
              key={consulta.id}
              id={consulta.id}
              name={consulta.name}
              phone={consulta.phone}
              email={consulta.email}
              message={consulta.message}
            />
          );
        })
      )}
    </>
  );
};

export default ConsultasData;
