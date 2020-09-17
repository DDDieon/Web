// JS - html 이름에 맞게 nav를 변경합니다
window.onload = function () {
    var htmlSplit = location.href.split("/")
    var urlArray = htmlSplit.length
    var urlHtml = htmlSplit[urlArray - 1]
    var htmlName = urlHtml.split(".")[0]
    //nav style
    console.log(htmlName)
    document.querySelector("." + htmlName + "DeskMenu").style.color = "#ff3939"
    document.querySelector("." + htmlName + "DeskMenu").classList.add("pointerLine")
    // background style
    document.querySelector(".main-headline--back").style.background =
        "url('/photozone/assets/image/title/" + htmlName + ".png') no-repeat"
    document.querySelector(".main-headline--back").style.backgroundSize = "100% auto"
}

// jQuery - 햄버거/패널창을 디자인
$(function () {
    $(".hamburger").on("click", function () {
        $(".mobile-drawer").css("display", "block").stop().animate({
                right: 0,
            },
            500
        )
        $("html, body").css("overflow", "hidden")
    })

    $(".closeIcon").on("click", function () {
        $(".mobile-drawer").css("display", "none").stop().animate({
                right: "-100%",
            },
            500
        )
        $("html, body").css("overflow", "auto")
    })

    // 모달창
    $(".items").on("click", function () {
        const show = $(this).children("div").eq(0)
        const overlay = $(this).children("div").eq(1)
        const itemTop = $(".items").offset().top
        const showTop = $(this).offset().top
        show.css({
            top: showTop - itemTop
        })
        show.addClass("clicked")
        overlay.addClass("overlayed")
    })
    $(".images-list--overlay").on("click", function (event) {
        event.stopPropagation()
        $(".clicked").removeClass("clicked")
        $(this).removeClass("overlayed")
    })
})