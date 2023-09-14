const deleteConsulta = async (id) => {
  try {
    const auth = JSON.parse(window.localStorage.getItem("session"));

    const response = await fetch(`http://localhost:3001/consultas/${id}`, {
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
