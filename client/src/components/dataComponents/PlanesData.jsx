import { useEffect, useState } from "react";
import DataCard from "./DataCard";

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
      {planes.length !== 0 ? (
        planes?.map((plan) => {
          return (
            <div key={plan.id} className="planCard">
              <DataCard
                id={plan.id}
                name={plan.name}
                price={plan.price}
                speed={plan.speed}
                detail={plan.detail}
              />
            </div>
          );
        })
      ) : (
        <h2> No hay planes </h2>
      )}
    </>
  );
};

export default PlanesData;
