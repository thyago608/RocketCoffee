const navigation = document.querySelector(".navigation");

document
  .querySelector(".btn-menu")
  .addEventListener("click", function (event) {
    navigation.classList.toggle("visible");
  });

window.addEventListener("resize", (event) => {
  if (event.currentTarget.innerWidth <= 1024) {
    navigation.classList.remove("visible");
  }
});
