import { SERVER_URI } from "../../services/constants"

const postConsulta = async (data) => {
  try {
    const response = await fetch(`${SERVER_URI}/consultas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    console.log({ error: error });
  }
};

export default postConsulta;
