let path = document.querySelector("#house-path");

let length = path.getTotalLength;
// alert('test')
path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;
