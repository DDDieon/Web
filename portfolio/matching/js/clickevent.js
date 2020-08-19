let 조원 = []
let 레드팀 = []
let 블루팀 = []
let listBody = document.querySelector(".listBody") //div
let lists = document.querySelectorAll(".lists") // ul에 lists클래스 붙음
let listsSub = document.querySelectorAll(".lists_sub") // li에 lists_sub클래스 붙음
let liCount = listBody.childElementCount

//---------- defaltValue 값 focus시 없어지기 (placeholder)

var contents = document.querySelector(".text-basic")
contents.addEventListener("focus", function () {
    this.defaultValue = ""
})
contents.addEventListener("blur", function () {
    this.defaultValue = "팀원명 입력 + enter"
})

//---------- window onload시 focus하기
window.addEventListener("load", function () {
    contents.focus()
})

//----------- btnAdd btn

document.getElementById("btnAdd").addEventListener("click", clicking)
document.querySelector(".text-basic").addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        event.preventDefault()
        document.getElementById("btnAdd").click()
    }
})

function clicking() {
    if (!contents.value) {
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
        li02.innerText = contents.value
        li02.setAttribute("class", "lists_sub")
        ul.appendChild(li02)
        document.getElementById("listBody").appendChild(ul)
        contents.value = ""
        contents.focus()
    }
}

//-------- checkbox delete event
document.getElementById("DeleteSel").addEventListener("click", delSelected)

function delSelected() {
    var body = document.getElementById("listBody")
    var chkbox = document.querySelectorAll("#listBody .btn-chk")
    for (var i in chkbox) {
        if (chkbox[i].checked == true) {
            body.removeChild(chkbox[i].parentNode.parentNode)
        }
    }
}

//--------- all reset event
document.getElementById("DeleteAll").addEventListener("click", delAll)

function delAll() {
    var body = document.getElementById("listBody")
    body.innerHTML = ""
}

//------------------ matching event callback set

document.addEventListener("click", matching)
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 121) {
        event.preventDefault()
        document.getElementById("goMatching").click()
    }
})

function matching() {
    if (event.target == document.getElementById("goMatching")) {
        //----- reset
        조원 = []
        레드팀 = []
        블루팀 = []
        listBody = document.querySelector(".listBody") //div
        lists = document.querySelectorAll(".lists") // ul class="lists"
        listsSub = document.querySelectorAll(".lists_sub") // li class="lists_sub"
        liCount = listBody.childElementCount // li's count
        liHalf = liCount / 2

        //----- push all

        for (var i = 0; i < liCount; i++) {
            if (조원.includes(lists[i].innerText)) {
                alert("초복도 말복도 아닌 중복! 중복된 팀원명이 존재합니다")
                return false
            }
            조원.push(lists[i].innerText)
        }

        //-------- push redTeam
        let j = 0
        while (j < liHalf) {
            let red = Math.floor(Math.random() * liCount)
            if (!레드팀.includes(조원[red])) {
                레드팀.push(조원[red])
                j++
            }
        }
        //--------- push Blueteam
        function 물어봐() {
            for (var k = 0; k < 조원.length; k++) {
                if (!레드팀.includes(조원[k])) {
                    블루팀.push(조원[k])
                }
            }
        }

        물어봐()
    }
}
