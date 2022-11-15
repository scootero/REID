let path = document.querySelector("#house-path");

// let length = path.getTotalLength;
// // alert('test')
// path.style.strokeDasharray = length + " " + length;
// path.style.strokeDashoffset = length;

const hamburger = document.getElementById("hamburger");
const boxGroup1 = document.getElementsByClassName("boxes-group-1");
const boxGroup2 = document.getElementsByClassName("boxes-group-2");
const boxText = document.getElementsByClassName("box-text");
hamburger.addEventListener("click", () => {
  for (i = 0; i < 4; i++) {
    boxGroup1[i].classList.toggle("boxes-slide-left");
  }

  for (i = 0; i < 3; i++) {
    boxText[i].classList.toggle("opacity-0");
    boxText[i].classList.toggle("opacity-1");
  }
  for (i = 0; i <= 4; i++) {
    boxGroup2[i].classList.toggle(`box-${i + 4}-down`);
    boxGroup2[i].classList.toggle("boxes-slide-up");
  }
});
