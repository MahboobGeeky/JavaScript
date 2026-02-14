function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${config.theme === "dark" ? "bg-green-600 text-white" : "bg-green-600 text-black"} px-6 py-3 rounded-lg shadow-lg opacity-1`;
    document.querySelector(".parent").appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
      document.querySelector(".parent").classList.add("fixed");
      document.querySelector(".parent").className +=
        ` ${config.positionX === "right" ? " right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
    }

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 3,
});

toaster("Download Done");

setTimeout(() => {
  toaster("thank you");
}, 2000);
