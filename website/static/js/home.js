let lastPosYsc = 0;

console.log("hello");

document.addEventListener("scroll", function (e) {
  lastPosYsc = Math.floor(window.scrollY / 30.946);
  let multiplier = 1.3;
  let r = 213 - lastPosYsc * multiplier;
  let g = 238 - lastPosYsc * multiplier;
  let b = 187 - lastPosYsc * multiplier;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log(lastPosYsc);
});

//Start button//

function openForm() {
  document.getElementById("myForm").style.display = "block";
  style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
