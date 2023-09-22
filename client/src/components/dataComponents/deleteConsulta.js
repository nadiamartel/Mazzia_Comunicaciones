import { SERVER_URI } from "../../services/constants";

const deleteConsulta = async (id) => {
  try {
    const auth = JSON.parse(window.localStorage.getItem("session"));

    const response = await fetch(`${SERVER_URI}/consultas/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth?.token}`,
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default deleteConsulta;
