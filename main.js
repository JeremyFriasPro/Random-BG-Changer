let body = document.querySelector("body")
let btn = document.querySelector("button")

function changeColor() {
    let hexChars = ["A", "B", "C", "D", "E", "F"]
    let hexNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    let first = hexChars[Math.floor(Math.random() * hexChars.length)]
    let second = hexNums[Math.floor(Math.random() * hexNums.length)]
    let third = hexChars[Math.floor(Math.random() * hexChars.length)]
    let four = hexNums[Math.floor(Math.random() * hexNums.length)]
    let fifth = hexChars[Math.floor(Math.random() * hexChars.length)]
    let sixth = hexNums[Math.floor(Math.random() * hexNums.length)]

    let result = `#${first}${second}${third}${four}${fifth}${sixth}`
    body.style.background = result
    console.log(result)
}

btn.addEventListener("click", changeColor)