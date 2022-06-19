let lastPosYsc = 0;

console.log("hello");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("scroll", function (e) {
  lastPosYsc = Math.floor(window.scrollY / 30.946);
  let multiplier = 1;
  let r = 213 - lastPosYsc * multiplier;
  let g = 238 - lastPosYsc * multiplier;
  let b = 187 - lastPosYsc * multiplier;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log(lastPosYsc);
});

document.addEventListener('mousemove',function(){
  let randomints=[-22,-11,-5,0,5,11,22]
  let enddiv=document.getElementById('enddiv')
  enddiv.style.transform = 'translate('+getRandomInt(0,randomints.length-1)+'px,'+getRandomInt(0,randomints.length-1)+'px)'
})

//Start button//

function openForm() {
  document.getElementById("myForm").style.display = "block";
  style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
