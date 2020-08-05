$(function () {
    var thumbnail = $("#thumbnail") //썸네일이 담긴 div
    var container = thumbnail.find(".container>ul")
    var thumb = container.find(".thumb") //썸네일
    var image = $("#gallery #image>p") //큰화면에 들어있는 큰사진

    //썸네일 클릭시 큰사진 전환
    thumb.on("click", function () {
        var i = $(this).index()
        image.css("display", "none")
        image.eq(i).css("display", "block")
    })

    var current = 0 // 현재 페이지 0,1,2
    var ListSize = 6 //현재 보여주는 사진의 갯수
    var prev = thumbnail.find(".left")
    var next = thumbnail.find(".right")
    var maxSize = thumb.size() // 총 사진의 갯수％리스트-1을 current가 넘지 않도록 해야한다
    var containWidth = $(".container").width() //컨테이너 크기 760

    var imageWidth = container.find("li").outerWidth(true) // 마진포함한 width값
    var imageSize = container.find("li").size()
    console.log(containWidth)

    var copyObj = container.find("li:lt(6)").clone() //맨앞에서 6개까지 복사
    container.append(copyObj) //ul뒷부분에 붙이기

    //left right 버튼 구현하기
    next.on("click", function () {
        if (current == imageSize / ListSize - 1) {
            current = 0
            container.css("margin-left", current)
        }
        current++
        listMove()
        console.log(current)
    })
    prev.on("click", function () {
        if (current == 0) {
            current = imageSize
            container.css("margin-left", -current * imageWidth + "px")
        }
        current--
        listMove()
        console.log(current)
    })

    function listMove() {
        var move = containWidth * current * -1 // 0페이지의 left: 0 ; 1페이지의 left: 760*-1;; 2페이지의 left: 760*-2 ;
        container.stop().animate({ "margin-left": move }) //썸네일의 container 움직이기
    }
})
