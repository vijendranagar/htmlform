document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#state");
  // const selectDrop = document.getElementById('countries');
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6c8dd0e999msh02bab5bf82c533ap1f1ec6jsn9e8529892d74",
      "X-RapidAPI-Host": "countries-states-cities-dataset.p.rapidapi.com",
    },
  };

  fetch(
    "https://countries-states-cities-dataset.p.rapidapi.com/list-countries",
    options
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((state) => {
        output += `
    <option value="${state.name}">${state.name}  </option>`;
      });

      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});
