// nav----scroll event
$(function () {
    var btn = $(".nav_list li a")
    btn.click(function () {
        event.preventDefault ? event.preventDefault() : (event.returnValue = false)
        var i = $(this).parent().index() // li의 i번째를 클릭
        var sectionTT = $("section").eq(i).offset().top - 50 //sectioin들의 y좌표
        if (i == 4) {
            // gallery 이벤트 막기
            $(this).off
            return false
        } else if (i == 3) {
            $("html, body")
                .stop()
                .animate({
                    scrollTop: $(document).height() - $(window).height(),
                })
            return false
        }
        $("html, body")
            .stop()
            .animate({
                    scrollTop: sectionTT,
                },
                function () {
                    console.log("이동")
                }
            )
    })
    var contactMe = $(".contect-me")
    contactMe.click(function () {
        $("html, body")
            .stop()
            .animate({
                scrollTop: $("#Contact").offset().top - 50,
            })
    })
})


// introduce animation paused
$(function () {
    $(".gols_img__inner-wrapper").find("div").hover(function () {
        $(this).css({
            "animation": "wiggleRotate 4s infinite ease-in",
            "animation-play-state": "running"
        })
        console.log("run")
    }, function () {
        $(this).css("animation-play-state", "paused")
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
        speed: 300 /* 이미지가 슬라이딩시 걸리는 시간 */ ,
        infinite: true,
        autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */ ,
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