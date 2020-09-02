// JS - html 이름에 맞게 nav를 변경합니다
window.onload = function () {
    var htmlSplit = location.href.split("/")
    var urlArray = htmlSplit.length
    var urlHtml = htmlSplit[urlArray - 1]
    var htmlName = urlHtml.split(".")[0]
    //url에서 htmlName(design.html->design)를 가져와서 css를 변경합니다
    //nav style
    console.log(htmlName)
    document.querySelector("." + htmlName + "DeskMenu").style.color = "#ff3939"
    document.querySelector("." + htmlName + "DeskMenu").classList.add("pointerLine")
    // background style
    document.querySelector(".main-headline--back").style.background =
        "url('/photozone/assets/image/title/" + htmlName + ".png') no-repeat"
    document.querySelector(".main-headline--back").style.backgroundSize = "100% auto"
}

// jQuery - 햄버거/패널창을 디자인합니다
$(function () {
    $(".hamburger").on("click", function () {
        $(".mobile-drawer").css("display", "block").stop().animate(
            {
                right: 0,
            },
            500
        )
        $("html, body").css("overflow", "hidden")
    })

    $(".closeIcon").on("click", function () {
        $(".mobile-drawer").css("display", "none").stop().animate(
            {
                right: "-100%",
            },
            500
        )
        $("html, body").css("overflow", "auto")
    })
})
