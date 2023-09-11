"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



const myImage = document.querySelector("#profile");

myImage.onmouseover = () => {
    const mySrc = myImage.getAttribute("src");
      myImage.setAttribute("src", "assets/images/profile2.jpeg");
  };

myImage.onmouseout = () => {
  const mySrc = myImage.getAttribute("src");
    myImage.setAttribute("src", "assets/images/profile.jpeg");
};


