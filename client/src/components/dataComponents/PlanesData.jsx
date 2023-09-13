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
      {planes?.map((plan) => {
        return (
          <DataCard
            key={plan.id}
            id={plan.id}
            name={plan.name}
            price={plan.price}
            speed={plan.speed}
            detail={plan.detail}
          />
        );
      })}
    </>
  );
};

export default PlanesData;
