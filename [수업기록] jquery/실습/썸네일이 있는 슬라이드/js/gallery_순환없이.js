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
    console.log(containWidth)

    //left right 버튼 구현하기
    next.on("click", function () {
        if (current < maxSize / ListSize - 1) current++ //페이지업
        listMove()
        console.log(current)
    })
    prev.on("click", function () {
        if (current > 0) current-- //페이지다운
        listMove()
        console.log(current)
    })

    function listMove() {
        var move = containWidth * current * -1 // 0페이지의 left: 0 ; 1페이지의 left: 760*-1;; 2페이지의 left: 760*-2 ;
        container.stop().animate({ left: move }) //썸네일의 container 움직이기
    }
})
