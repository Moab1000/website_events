const popup = document.querySelector(".popop");
const aaben = document.querySelectorAll(".openPopup");
const luk = document.querySelector(".luk_popop");

aaben.forEach(function (knap) {
  knap.addEventListener("click", function () {
    popup.style.display = "flex";
  });
});

luk.addEventListener("click", function () {
  popup.style.display = "none";
});

function visFane(fane) {
  document.querySelector(".om").style.display = "none";
  document.querySelector(".kalender").style.display = "none";
  document.querySelector(".anmeld").style.display = "none";

  document.querySelector("." + fane).style.display = "block";
}

/***** Menu burger  ****/
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
