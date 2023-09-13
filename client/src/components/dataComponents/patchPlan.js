const patchPlan = async (id, data) => {
  try {
    const auth = JSON.parse(window.localStorage.getItem("session"));

    const response = await fetch(`http://localhost:3001/planes/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default patchPlan;
