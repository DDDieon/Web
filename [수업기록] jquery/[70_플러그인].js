$.fn.imageSlider = function () {
    //$(".slider")를 $(this)로 주었기 때문에, .sliding 등 클래스명을 맘대로 바꿔도 지원된다
    var _width = 460
    var _height = 300
    var current = 0
    var imageLength = $(this).find(".img").length
    for (var i = 0; i < imageLength; i++) {
        $("<button></button>")
            .attr("data-position", i)
            .text(i)
            .insertBefore($(this))
            .click(function () {
                current = $(this).attr("data-position") // 몇번째 버튼인지 인덱스 가져오기
                moveTo()
            })
    }
    var moveTo = function () {
        $(".images").animate({ left: -current * _width }, 500)
    }
    //슬라이더 스타일 지정하기
    $(this).css({
        position: "relative",
        width: _width,
        height: _height,
        overflow: "hidden",
    })
    $(".images").css({
        position: "absolute",
        width: _width * imageLength,
    })
    $(".img").css({
        width: _width,
        height: _height,
        display: "block",
        float: "left",
    })
}
