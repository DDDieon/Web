// select-type event
$(function () {
    $(".select-type__map").click(function () {
        $(".select-type__list").removeClass("clicked")
        $(this).addClass("clicked")
        $(".list-type").hide()
        $(".map-type").show()
    })
    $(".select-type__list").click(function () {
        $(".select-type__map").removeClass("clicked")
        $(this).addClass("clicked")
        $(".map-type").hide()
        $(".list-type").show()
    })
    // media query
    $(window).resize(function () {
        var windowWidth = $(window).width()
        if (windowWidth >= 1260) {
            $(".list-type").show()
            $(".select-type").hide()
        } else if (windowWidth < 1259) {
            $(".list-type").hide()
            $(".select-type").css({
                display: "flex"
            }).show()
            $(".select-type__map").trigger("click")
        }
    })
})

var mapContainer = document.getElementById("map"),
    mapOption = {
        center: new kakao.maps.LatLng(37.54, 127.15), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP,
    }

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption)

// 커스텀 오버레이를 위한 데이터 불러오기
$(function () {
    $.ajax({
        url: "js/data/ikeamap.json",
        dataType: "json",
        success: function (data) {
            createData(data)
        },
    })


    function createData(data) {
        const ikeamap = data.ikeaLocation
        let store = []
        for (var i in ikeamap) {
            store.push([i, ikeamap[i]])
        }

        for (var i in store) {
            var 데이터 = []
            const x = store[i][1].x
            const y = store[i][1].y
            const koName = store[i][1].koName
            const subtitle = store[i][1].subtitle
            const subdesc = store[i][1].subdesc
            const link = store[i][1].link
            const content = `
            <a href="${link}" target="_blank">
                <div class="overlay overlay-index-${i}">
                <div class="overlay--info">
                    <div class="overlay--info__title">${koName}
                    </div>
                    <div class="overlay--info__body">
                        <div class="img">
                            <img src="/img/store/${store[i][0]}.png" width="73" height="70">
                        </div>
                        <div class="detail">
                            <div class="overlay--info__ellipsis">${subtitle}</div>
                            <div class="overlay--info__jibun ellipsis">${subdesc}</div>
                        </div>
                    </div>
                </div>
            </a>
            `
            데이터.push(x, y, content)
            for (var j = 0; j < 데이터.length; j++) {
                MARKER = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(데이터[0], 데이터[1]),
                    map: map,
                })
                overlay = new kakao.maps.CustomOverlay({
                    content: content,
                    map: map,
                    position: MARKER.getPosition(),
                })
                overlay.setMap(map)
                $(".close").on("click", function () {
                    $(".overlay").hide()
                })
                UP = []
                UP += MARKER
            }
        }
    }

    kakao.maps.event.addListener(MARKER, 'click', function () {
        overlay.setMap(map);
    });

})