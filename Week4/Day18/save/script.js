const moment = require("moment");

document.querySelector("#searchBtn").addEventListener("click", function () {
  const travel = {
    departure: document.querySelector("#searchDeparture").value,
    arrival: document.querySelector("#searchArrival").value,
    date: document.querySelector("#searchDate").value,
  };

  fetch("http://localhost:3000/trips/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(travel),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(travel.departure)
      // console.log(travel.arrival)
      // console.log(travel.date)
      // console.log(data)

      if (data) {
        document.querySelector(".result").remove();
        for (let i = 0; data.Travel.length; i++) {
          console.log(data);
          document.querySelector(".resultCard").innerHTML += `
          <div class="TripFounds">
          <p>
          <span class="tripDepart">${data.Travel[i].departure}</span>
          <span class="tripArrival">${data.Travel[i].arrival}</span>
          </p>
          <p class="tripHours">${moment(data.Travel[i].date).format("h:mm")}</p>
          <p class="tripPrice">${data.Travel[i].price}</p>
      	<button class="deleteTrip" id=">Delete</button>
      </div>		`;
        }
      } else {
        document.querySelector(".resultCard").innerHTML = `
        <div class="result">
        <img class="imagetrain" src="./images/notfound.png" />
        <div class="divider"></div>
        <div class="barresearch"></div>
        <p>No trip found.</p>
      </div> 
       `;
      }
    });
});
