// fetch("https://randomuser.me/api/")
//     .then((rawdata) => {
//         return rawdata.json(); // make it readable
//     })
//     .then((data) => {
//         console.log(data.results[0].name.first);
//     })
//     .catch((err) => { // got some error
//         console.log(err);
//     });

function getUsers() {
  fetch("https://randomuser.me/api/?results=12")
    .then((data) => {
      return data.json(); // make it readable
    })
    .then((data) => {
      document.querySelector(".cards-container").innerHTML = "";
      console.log(data.results);
      data.results.forEach(function (user) {
        // Create card
        const card = document.createElement("div");
        card.className = "card";

        // Create image
        const img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = "User";
        card.appendChild(img);

        // Create name
        const name = document.createElement("h3");
        name.textContent = user.name.first + " " + user.name.last;
        card.appendChild(name);

        // Create email
        const email = document.createElement("p");
        email.className = "email";
        email.textContent = user.email;
        card.appendChild(email);

        // Create button
        const button = document.createElement("button");
        button.className = "view-btn";
        button.textContent = "View Profile";
        card.appendChild(button);

        // Finally add to body
        document.querySelector(".cards-container").appendChild(card);
      });
    })
    .catch((err) => {
      // got some error
      console.log(err);
    });
}

getUsers();

let refreshBtn = document.querySelector("#refreshBtn");
refreshBtn.addEventListener("click", function (evt) {
  evt.preventDefault;
  location.reload();
});
