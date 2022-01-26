document.addEventListener("DOMContentLoaded", function (event) {
  let colonnesOfBoats = document.getElementsByClassName("colonne");
  let intElemClientWidth = window.innerWidth;
  console.log("intElemClientWidth " + intElemClientWidth);

  colonnesOfBoats[0].addEventListener("mouseover", function (event) {
    if (intElemClientWidth > 1150) {
      colonnesOfBoats[1].classList.remove("active");
      colonnesOfBoats[2].classList.remove("active");
      colonnesOfBoats[0].classList.add("active");
    }
  });

  colonnesOfBoats[1].addEventListener("mouseover", function (event) {
    if (intElemClientWidth > 1150) {
      colonnesOfBoats[0].classList.remove("active");
      colonnesOfBoats[2].classList.remove("active");
      colonnesOfBoats[1].classList.add("active");
    }
  });

  colonnesOfBoats[2].addEventListener("mouseover", function (event) {
    if (intElemClientWidth > 1150) {
      colonnesOfBoats[1].classList.remove("active");
      colonnesOfBoats[0].classList.remove("active");
      colonnesOfBoats[2].classList.add("active");
    }
  });

  colonnesOfBoats[1].addEventListener("mouseleave", function (event) {
    if (intElemClientWidth > 1150) {
      colonnesOfBoats[1].classList.remove("active");
      colonnesOfBoats[2].classList.remove("active");
      colonnesOfBoats[0].classList.add("active");
    }
  });
  colonnesOfBoats[2].addEventListener("mouseleave", function (event) {
    if (intElemClientWidth > 1150) {
      colonnesOfBoats[1].classList.remove("active");
      colonnesOfBoats[2].classList.remove("active");
      colonnesOfBoats[0].classList.add("active");
    }
  });

  window.addEventListener(
    "resize",
    function (event) {
      intElemClientWidth = window.innerWidth;
      console.log("resize event " + intElemClientWidth);
      if (intElemClientWidth <= 1150) {
        console.log("resize <= 1150");
        colonnesOfBoats[0].classList.add("active");
        colonnesOfBoats[1].classList.add("active");
        colonnesOfBoats[2].classList.add("active");
      } else {
        colonnesOfBoats[1].classList.remove("active");
        colonnesOfBoats[2].classList.remove("active");
        colonnesOfBoats[0].classList.add("active");
      }
    },
    true
  );

  if (intElemClientWidth <= 1150) {
    console.log("resize <= 1150");
    colonnesOfBoats[0].classList.add("active");
    colonnesOfBoats[1].classList.add("active");
    colonnesOfBoats[2].classList.add("active");
  }

  //Second-art menu
  let secondPartMenuLi = document.querySelectorAll(".second-part .menu li");
  secondPartMenuLi.forEach((li) => {
    li.addEventListener("click", handleClickSecondPartMenu);
  });

  function handleClickSecondPartMenu(evt) {
    secondPartMenuLi.forEach((li) => li.classList.remove("active"));
    evt.currentTarget.classList.add("active");
  }

  //0: menu hamburger closed, 1:menu hamburger open
  var menuState = 0;
  document
    .getElementById("button-menu-responsive")
    .addEventListener("click", (event) => {
      if (menuState === 0) {
        menuState = 1;

        document.getElementById("mini-menu-right").style.maxHeight = "15em";

        document
          .getElementById("button-mini-menu-close")
          .classList.remove("opacity-zero");
        document
          .getElementById("button-mini-menu-close")
          .classList.add("opacity-one");

        document
          .getElementById("button-mini-menu-hamburger")
          .classList.remove("opacity-one");
        document
          .getElementById("button-mini-menu-hamburger")
          .classList.add("opacity-zero");
      } else {
        menuState = 0;
        document.getElementById("mini-menu-right").style.maxHeight = "0em";
        document
          .getElementById("button-mini-menu-hamburger")
          .classList.remove("opacity-zero");
        document
          .getElementById("button-mini-menu-hamburger")
          .classList.add("opacity-one");

        document
          .getElementById("button-mini-menu-close")
          .classList.remove("opacity-one");
        document
          .getElementById("button-mini-menu-close")
          .classList.add("opacity-zero");
      }
    });
});
