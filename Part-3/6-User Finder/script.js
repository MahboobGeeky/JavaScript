let form = document.querySelector("form");

let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const userManager = {
  users: [],
  init: function () {
    // initial
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    console.log("form submitted");
    console.log(this); // this is a form (obj)
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    let container = document.querySelector(".cards-container");
    container.innerHTML = "";
    this.users.forEach(function (user) {
      // Create main div
      const card = document.createElement("div");
      card.className = "card";

      // Create image
      const img = document.createElement("img");
      img.src = user.photo;
      img.alt = "User";

      // Create name
      const name = document.createElement("h3");
      name.textContent = user.username;

      // Create role
      const role = document.createElement("p");
      role.className = "role";
      role.textContent = user.role;

      // Create bio
      const bio = document.createElement("p");
      bio.className = "bio";
      bio.textContent = user.bio;

      // Append elements to card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(bio);

      // Finally append card to body (or any container)
      container.appendChild(card);
    });
  },
  removeUser: function () {}, // need to it by myslef
};
userManager.init();
