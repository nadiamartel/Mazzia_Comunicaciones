import { useEffect, useState } from "react";
import s from "./PlanTable.module.css";

const PlanTable = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/planes")
      .then((res) => res.json())
      .then((res) => setPlanes(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className={s.container}>
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.blank}>&nbsp;</th>

              <th className={s.plan_name}>
                <h6>{planes[0]?.name}</h6>
              </th>
              <th className={s.plan_name}>
                <h6>{planes[1]?.name}</h6>
              </th>
              <th className={s.plan_name}>
                <h6>{planes[2]?.name}</h6>
              </th>
              <th className={s.plan_name}>
                <h6>{planes[3]?.name}</h6>
              </th>
              <th className={s.plan_name}>
                <h6>{planes[4]?.name}</h6>
              </th>
            </tr>
          </thead>
          <tbody>
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
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <h6></h6>
                  </g>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default PlanTable;
