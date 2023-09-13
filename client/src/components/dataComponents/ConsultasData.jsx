import { useEffect, useState } from "react";
import DataCard from "./DataCard";

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
          <DataCard
            key={consulta.id}
            id={consulta.id}
            name={consulta.name}
            phone={consulta.phone}
            email={consulta.email}
            message={consulta.message}
          />
        );
      })}
    </>
  );
};

export default ConsultasData;
