document.addEventListener("click", redText)
let redBox = document.querySelector(".red")
let redUl = document.createElement("ul")
let redLi = document.createElement("li")

function redText(event) {
    if (event.target == document.getElementById("goMatching")) {
        if (redBox.childElementCount !== 0) {
            redBox.innerHTML = ""
        }
        for (var b in 레드팀) {
            redBox = document.querySelector(".red")
            redUl = document.createElement("ul")
            redLi = document.createElement("li")
            redLi.setAttribute("class", `reds`)
            let redText = 레드팀[b]
            redLi.innerHTML = redText
            redUl.appendChild(redLi)
            redBox.appendChild(redUl)
        }
    }
}

document.addEventListener("click", blueText)

let blueBox = document.querySelector(".blue")
let blueUl = document.createElement("ul")
let blueLi = document.createElement("li")

function blueText(event) {
    if (event.target == document.getElementById("goMatching")) {
        if (blueBox.childElementCount !== 0) {
            blueBox.innerHTML = ""
        }
        for (var r in 블루팀) {
            blueUl = document.createElement("ul")
            blueLi = document.createElement("li")
            blueLi.setAttribute("class", `blues`)
            let blueText = 블루팀[r]
            blueLi.innerHTML = blueText
            blueUl.appendChild(blueLi)
            blueBox.appendChild(blueUl)
        }
    }
}
