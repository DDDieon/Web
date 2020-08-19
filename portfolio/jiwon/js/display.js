// nav----scroll event
$(function () {
    var btn = $(".nav_list li a")
    btn.click(function () {
        event.preventDefault ? event.preventDefault() : (event.returnValue = false)
        var i = $(this).parent().index() // li의 i번째
        console.log(i)
        if (i == 4) {
            $(this).off
        } else if (i == 3) {
            // contact까지 스크롤
            $("html, body").stop().animate({
                scrollTop: 4800,
            })
        } else if (i == 2) {
            // ablity까지 스크롤
            $("html, body").stop().animate({
                scrollTop: 3800,
            })
        } else {
            var sectionTT = $("section").eq(i).offset().top //sectioin들의 y좌표
            console.log(sectionTT)
            $("html, body").stop().animate({
                scrollTop: sectionTT, //html, body의 y좌표는 i번째 sectioin의 좌표가 된다
            })
        }
    })
})

// project---scroll show
$(function () {
    $(".project").css("opacity", "1")
    $(window).scroll(function () {
        var wT = $(this).scrollTop()
        var itT = $("#introduce_top").offset().top - 50
        var itB = $("#introduce_top").offset().top + 800
        if (itT < wT) {
            $(".resume").css("opacity", "1")
        }
        if (itB < wT) {
            $(".project").each(function (i) {
                $(this)
                    .delay(500 * i)
                    .fadeIn(500)
            })
        }
    })
})

// slick slide

$(document).ready(function () {
    $(".slick-items").slick({
        autoplay: true,
        dots: false,
        speed: 300 /* 이미지가 슬라이딩시 걸리는 시간 */,
        infinite: true,
        autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        fade: false,
    })
})

// footer close
var footerClose = document.getElementById("footerClose")
var footer = document.getElementById("footer")
footerClose.onclick = function () {
    footer.style.display = "none"
}
