//Listening/waitig for the document to be ready
document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#countries");
  // const selectDrop = document.getElementById('countries');

  fetch("https://restcountries.com/v2/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((country) => {
        output += `
    <option value="${country.name}">${country.name}  </option>`;
      });

      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});
