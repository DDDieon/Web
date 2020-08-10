window.onload = function () {
    let 조원 = []
    let 레드팀 = []
    let 블루팀 = []
    let listBody = document.querySelector(".listBody") //div
    let lists = document.querySelectorAll(".lists") // ul에 lists클래스 붙음
    let listsSub = document.querySelectorAll(".lists_sub") // li에 lists_sub클래스 붙음
    let liCount = listBody.childElementCount

    //---------- defaltValue 값 focus시 없어지기

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

    //----------- btnAdd버튼을 누르면 addList가 실행

    document.getElementById("btnAdd").addEventListener("click", clicking)
    document.querySelector(".text-basic").addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
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

    //--------체크박스 선택시 삭제
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

    //--------- 리셋 선택시 전체삭제
    document.getElementById("DeleteAll").addEventListener("click", delAll)

    function delAll() {
        var body = document.getElementById("listBody")
        body.innerHTML = ""
    }

    //------------------ 매칭

    document.getElementById("goMatching").addEventListener("click", matching)
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 121) {
            event.preventDefault()
            document.getElementById("goMatching").click()
        }
    })

    let liHalf
    function matching() {
        //----- 변수 다시 로드하기. 동적으로 추가되었으니까
        조원 = []
        레드팀 = []
        블루팀 = []
        listBody = document.querySelector(".listBody") //div
        lists = document.querySelectorAll(".lists") // ul에 lists클래스 붙음
        listsSub = document.querySelectorAll(".lists_sub") // li에 lists_sub클래스 붙음
        liCount = listBody.childElementCount // li의 개수
        liHalf = liCount / 2

        //----- 조원 넣기

        for (var i = 0; i < liCount; i++) {
            if (조원.includes(lists[i].innerText)) {
                alert("초복도 말복도 아닌 중복! 중복된 팀원명이 존재합니다")
                return false
            }
            조원.push(lists[i].innerText)
        }

        //-------- 레드팀 넣기. 중복제거는 배열에 includes매소드로 확인
        let j = 0
        while (j < liHalf) {
            let red = Math.floor(Math.random() * liCount)
            if (!레드팀.includes(조원[red])) {
                레드팀.push(조원[red])
                j++
            }
        }
        //--------- 블루팀 넣기. 조원배열에서 레드팀과 중복되면 제거하기.
        function 물어봐() {
            for (var k = 0; k < 조원.length; k++) {
                if (!레드팀.includes(조원[k])) {
                    블루팀.push(조원[k])
                }
            }
        }

        물어봐()

        console.log(레드팀)
        console.log(블루팀)
        //-------- 버튼눌렀을때 이벤트는 여기까지
    }
}
