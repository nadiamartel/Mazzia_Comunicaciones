import { useEffect, useState } from "react";
import s from "./PlanTable.module.css";

const PlanTable = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/planes/all")
      .then((res) => res.json())
      .then((res) => setPlanes(res))
      .catch((err) => console.log(err));
    console.log(planes);
  }, []);
  
  return (
    <>
      <section className={s.container}>
        <table className={s.table}>
          <tr>
            <td className={s.blank}>&nbsp;</td>

            <td className={s.plan_name}>{planes[0]?.name}</td>
            <td className={s.plan_name}>{planes[1]?.name}</td>
            <td className={s.plan_name}>{planes[2]?.name}</td>
            <td className={s.plan_name}>{planes[3]?.name}</td>
            <td className={s.plan_name}>{planes[4]?.name}</td>
          </tr>

          <tr>
            <td className={s.title}>Precio</td>

            <td>{planes[0]?.price} ARS</td>
            <td>{planes[1]?.price} ARS</td>
            <td>{planes[2]?.price} ARS</td>
            <td>{planes[3]?.price} ARS</td>
            <td>{planes[4]?.price} ARS</td>
          </tr>
          <tr>
            <td className={s.title}>Velocidad</td>

            <td>{planes[0]?.speed}</td>
            <td>{planes[1]?.speed}</td>
            <td>{planes[2]?.speed}</td>
            <td>{planes[3]?.speed}</td>
            <td>{planes[4]?.speed}</td>
          </tr>
          <tr>
            <td className={s.title}>Todos los medios de pago</td>
            <td>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </td>
            <td>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </td>
            <td>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </td>
            <td>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </td>
            <td>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </td>
          </tr>
        </table>
      </section>
    </>
  );
};

export default PlanTable;
