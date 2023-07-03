let calculation = "";
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiplication = document.querySelector(".multiplication");
let divide = document.querySelector(".divide");
let equel = document.querySelector(".equal");
let point = document.querySelector(".point");
let text = document.querySelector(".calc");
let bt = document.querySelector(".clear");

one.addEventListener("click", ()=>{
    calculation +="1";
    text.innerHTML = calculation;
})
two.addEventListener("click", ()=>{
  calculation +="2";
  text.innerHTML = calculation;
})
three.addEventListener("click", ()=>{
  calculation +="3";
  text.innerHTML = calculation;
})
four.addEventListener("click", ()=>{
  calculation += "4";
  text.innerHTML = calculation;
})
five.addEventListener("click", ()=>{
  calculation += "5";
  text.innerHTML = calculation;
})
six.addEventListener("click", ()=>{
  calculation += "6";
  text.innerHTML = calculation;
})
seven.addEventListener("click", ()=>{
  calculation += "7";
  text.innerHTML = calculation;
})
eight.addEventListener("click", ()=>{
  calculation += "8";
  text.innerHTML = calculation;
})
nine.addEventListener("click", ()=>{
  calculation += "9";
  text.innerHTML = calculation;
})
zero.addEventListener("click", ()=>{
  calculation += "0";
  text.innerHTML = calculation;
})
point.addEventListener("click", ()=>{
  calculation += ".";
  text.innerHTML = calculation;
})
plus.addEventListener("click", ()=>{
  calculation += ' + ';
  text.innerHTML = calculation;
})
minus.addEventListener("click", ()=>{
  calculation += "-";
  text.innerHTML = calculation;
})
multiplication.addEventListener("click", ()=>{
  calculation += "*";
  text.innerHTML = calculation;
})
divide.addEventListener("click", ()=>{
  calculation += "/";
  text.innerHTML = calculation;
})
equel.addEventListener("click", ()=>{
  calculation = eval(calculation);
  text.innerHTML = calculation;
})
bt.addEventListener("click", ()=>{
  calculation = "";
  text.innerHTML = calculation;
})