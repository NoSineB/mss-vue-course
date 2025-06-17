const adder = document.querySelector("button")
const display = document.querySelector("h1")

adder.addEventListener("click", function (){
  display.innerText = parseInt(display.innerText) + 1
})
