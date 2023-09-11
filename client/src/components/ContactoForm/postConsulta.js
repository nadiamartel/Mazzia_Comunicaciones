const postConsulta = async (data) => {
  try {
    const response = await fetch("http://localhost:3001/consultas", {
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
