let inputBox = document.querySelector("input")
let btn = document.querySelector("button")
let outputBox = document.querySelector(".output")

btn.addEventListener("click", calculateTip)

function calculateTip()
{
    let value = inputBox.value
    let tip = value * 0.02

    outputBox.innerHTML = `<br> You should tip ${tip} Rs`
}
