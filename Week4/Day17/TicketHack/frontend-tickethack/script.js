document.querySelector("#search").addEventListener("click", function () {
  const travel = {
    departure: document.querySelector("#departure").value,
    arrival: document.querySelector("#arrival").value,
    date: document.querySelector("#calendar").value,
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
        document.querySelector("#content-book").remove();
        for (let i = 0; data.Travel.length; i++) {
          console.log(data);
          document.querySelector("#content-right").innerHTML += `
      <div class="tripContainer">
      	<p class="departure">${data.Travel[i].departure}</p>
      	<p class="arrival">${data.Travel[i].arrival}</p>
        <p class="date">${data.Travel[i].date}</p>
      	<button class="deleteTrip" id=">Delete</button>
      </div>		`;
        }
      }
    });
});

// document.querySelector("#search").addEventListener("click", function () {
//   fetch("http://localhost:3000/trips/search")
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.result === false) {
//         document.querySelector("#content-right").innerHTML = `
//             <div id="content-right">
//                 <img id="right-image" src="./images/notfound.png">
//                 <p>It's time to book your future trip.</p>
//             </div>
//             }`;
//       }
//     });
// });
