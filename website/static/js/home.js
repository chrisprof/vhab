let lastPosYsc = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("scroll", function (e) {
  lastPosYsc = Math.floor(window.scrollY / 30.946);
  const multipliers = {"red":1,"green":1.5,"blue":1}
  let r = 213 - lastPosYsc * multipliers[red];
  let g = 238 - lastPosYsc * multipliers[green];
  let b = 187 - lastPosYsc * multipliers[blue];
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
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
