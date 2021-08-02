
var bgColor = document.getElementById("bg-color");
var innerTxt = document.getElementById("hex");
var myBtn = document.getElementById("button1");

var myBtn2 = document.getElementById("button2");
var innerTxt2 = document.getElementById("hex2");
var bgColor2 = document.getElementById("bg-color2");

var plain = document.getElementById("plain");
var grad = document.getElementById("gradient");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

plain.onclick = ()=>{
  bgColor.style.display = "flex";
  bgColor2.style.display = "none";
}

grad.onclick = ()=>{
  bgColor2.style.display = "flex";
  bgColor.style.display = "none";
}

myBtn.addEventListener("click", ()=> {
  let randomHex = '#';
  for(var i = 0; i<6; i++) {
    randomHex += numbers[Math.floor(Math.random(numbers.length)*numbers.length)];
  }
  bgColor.style.backgroundColor = randomHex;
  innerTxt.textContent = randomHex;
  innerTxt.style.backgroundColor = randomHex;
});

myBtn2.addEventListener("click", ()=> {
  let randomHex = '#';
  let randomHex2 = '#';
  for(var i = 0; i<6; i++) {
    randomHex += numbers[Math.floor(Math.random(numbers.length)*numbers.length)];
    randomHex2 += numbers[Math.floor(Math.random(numbers.length)*numbers.length)];
  }

  bgColor2.style.background = "linear-gradient(" + randomHex + "," + randomHex2 + ")";
  innerTxt2.style.background = randomHex;
  innerTxt2.textContent = randomHex + " | " + randomHex2;
});