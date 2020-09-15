var contents = document.querySelector(".text-basic")
var contentsValue = document.querySelector(".text-basic").value
function clicking() {
    if (!contentsValue) {
        alert("추가하고 싶은 팀원명을 입력해주세요.")
        contents.focus()
        return false
    } else {
        var ul = document.createElement("ul")
        ul.setAttribute("class", "lists")
        var input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        input.setAttribute("class", "btn-chk")
        var li01 = document.createElement("li")
        li01.appendChild(input)
        ul.appendChild(li01)
        var li02 = document.createElement("li")
        li02.innerText = contentsValue
        li02.setAttribute("class", "lists_sub")
        ul.appendChild(li02)
        document.getElementById("listBody").appendChild(ul)
        contentsValue = ""
        contents.focus()
    }
}
