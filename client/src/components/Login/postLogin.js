import { SERVER_URI } from "../../services/constants";

const postLogin = async (data) => {
  try {
    console.log(`data: ${data}`);
    const response = await fetch(`${SERVER_URI}/usuario/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
