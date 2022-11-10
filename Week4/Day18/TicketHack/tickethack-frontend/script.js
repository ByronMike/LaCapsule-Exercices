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
          var today = new Date(data.Travel[i].date);
          var dd = String(today.getDate()).padStart(2, "0");
          var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = today.getFullYear();
          var hh = today.getHours();
          var min = today.getMinutes();

          hour = hh + ":" + min;

          document.querySelector(".resultCard").innerHTML += `
          <div class="TripFounds">
          <p>
          <span class="tripDepart">${data.Travel[i].departure}</span>
          <span class="tripArrival">${data.Travel[i].arrival}</span>
          </p>
          <p class="tripHours">${hour}</p>
          <p class="tripPrice">${data.Travel[i].price}</p>
          <button class="tripBtn">Book</button>
      </div>		`;
          document
            .querySelector(".tripBtn")
            .addEventListener("click", function () {
              console.log("click detect !");
              removeClick();
            });
        }
      }
    });
});

const travel = {
  departure: document.querySelector("#searchDeparture").value,
  arrival: document.querySelector("#searchArrival").value,
  date: document.querySelector("#searchDate").value,
};
document.querySelector("#searchBtn").addEventListener("click", function () {
  fetch("http://localhost:3000/trips/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(travel),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === false) {
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

// ADD BOOK DANS CART SUR HOMEPAGE

function removeClick() {
  for (let k = 0; k < document.querySelectorAll(".tripBtn").length; k++) {
    document
      .querySelectorAll(".tripBtn")
      [k].addEventListener("click", function () {
        const date = document.querySelector(".tripHours").textContent;
        fetch("http://localhost:3000/orders/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(date),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(date);
            // this.parentNode.remove();
            console.log(k);
          });
      });
  }
}

//   fetch("http://localhost:3000/trips/search", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(travel),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(travel.departure)
//       // console.log(travel.arrival)
//       // console.log(travel.date)
//       // console.log(data)

//       if (data) {
//         document.querySelector(".NewTrip").remove();
//         console.log(data);
//         document.querySelector(".NewTrip").innerHTML += `
//           <div class="tripCart">
//           <p>
//             <span class="tripDepart">${this.data.Travel.departure}</span> >
//             <span class="tripArrival">${this.data.Travel.arrival}</span>
//           </p>
//           <p class="tripHours">16:23</p>
//           <p class="tripPrice">${this.data.Travel.price}</p>
//           <button id="deleteBtn">X</button>
//         </div>
//        `;
//       }
//     });
// });

/// TEST
// for (let i = 0; i < document.querySelectorAll(".tripBtn").length; i++) {
//   document
//     .querySelectorAll(".tripBtn")
//     [i].addEventListener("click", function () {
//       const tripCart = {
//         departure: document.querySelector[i].tripDepart.textContent,
//         arrival: document.querySelector[i].tripArrival.textContent,
//         // date: document.querySelector.tripHours.textContent,
//         price: document.querySelector[i].tripPrice.textContent,
//       };
//       console.log("click");
//       fetch("http://localhost:3000/trips/search", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(tripCart),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.result) {
//             console.log("commande ajouté au panier !");
//           }
//         });
//     });
// }
