// nav----scroll event
$(function () {
    var btn = $(".nav_list li a")
    btn.click(function () {
        event.preventDefault ? event.preventDefault() : (event.returnValue = false)
        var i = $(this).parent().index() // li의 i번째를 클릭
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
        var sectionTT = $("section").eq(i).offset().top - 50 //sectioin들의 y좌표
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
    $(".gols_img__inner-wrapper")
        .find("div")
        .hover(
            function () {
                $(this).css({
                    animation: "wiggleRotate 4s infinite ease-in",
                    "animation-play-state": "running",
                })
                console.log("run")
            },
            function () {
                $(this).css("animation-play-state", "paused")
            }
        )
})

// project---scroll show
$(function () {
    $(window).scroll(function () {
        var wT = $(this).scrollTop()
        var itT = $("#introduce_top").offset().top - 50
        var itB = $("#introduce_top").offset().top + 800
        if (itT < wT) {
            $(".resume>ul").slideDown()
            $(".resume").css("background", "#000")
        }
    })
})

// ability ---- scroll percent

// 스크롤시 circle의 퍼센트가 올라가는 플러그인을 설정합니다
$.fn.drawRound = function (much) {
    $(this)
        .stop()
        .animate({
            "stroke-dashoffset": 440 - (440 * much) / 100,
        }, {
            duration: 1000,
        })
}
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#Ability").offset().top - 550) {
            $(".ability-spec").eq(0).find("svg circle").eq(1).drawRound(100)
            $(".ability-spec").eq(1).find("svg circle").eq(1).drawRound(70)
            $(".ability-spec").eq(2).find("svg circle").eq(1).drawRound(65)
            $(".ability-spec").eq(3).find("svg circle").eq(1).drawRound(40)
            $(".ability-spec").eq(4).find("svg circle").eq(1).drawRound(10)
            $(".ability-design").eq(0).find("svg circle").eq(1).drawRound(100)
            $(".ability-design").eq(1).find("svg circle").eq(1).drawRound(80)
            $(".ability-design").eq(2).find("svg circle").eq(1).drawRound(70)
            $(".ability-design").eq(3).find("svg circle").eq(1).drawRound(60)
            $(".ability-design").eq(4).find("svg circle").eq(1).drawRound(50)
        } else if ($(window).scrollTop() < $("#Ability").offset().top - 250) {
            $(".ability-spec").each(function () {
                $(this).find("svg circle").eq(1).drawRound(0)
            })
            $(".ability-design").each(function () {
                $(this).find("svg circle").eq(1).drawRound(0)
            })
        }
    })
})

//원 안의 text는 ajax를 통해 json을 출력합니다
$(function () {
    $(".ability-detail__point").empty().hide()
    $(".ability-spec").on("click", function () {
        INDEX = 0
    })
    $(".ability-design").on("click", function () {
        INDEX = 5
    })
    $(".ability-spec, .ability-design").on("click", function () {
        INDEX += $(this).index()
        $(".ability-spec").removeClass("onDetail")
        $(".ability-design").removeClass("onDetail")
        $(this).addClass("onDetail")
        $.ajax({
            url: "ability.json",
            dataType: "json",
            success: function (data) {
                createData(data)
            },
        })

        function createData(data) {
            $(".ability-detail__point").empty().hide()
            var skillData = data.ability
            var Title = skillData[INDEX]["title"]
            var Desc = skillData[INDEX]["key"]
            var Link = skillData[INDEX]["link"]
            $(".ability-detail__title").html(Title)
            $(".ability-detail__desc").html(Desc)
            if (Link) {
                $(".ability-detail__point").html("비캔버스 구경하기").show().attr("href", Link)
            }
        }
    })
})

// footer close
var footerClose = document.getElementById("footerClose")
var footer = document.getElementById("footer")
footerClose.onclick = function () {
    footer.style.display = "none"
}