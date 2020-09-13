const ikeaLocation = {
    Sindorim: {
        x: 37.508696,
        y: 126.889424,
        koName: "IKEA 플래닝 스튜디오 신도림",
        subtitle: "신도림 현대백화점 디큐브시티 지하 1층",
        subdesc: "서울시 구로구 경인로 662",
        link: "http://kko.to/MNkDtaZYH",
    },
    Cheonho: {
        x: 37.544164,
        y: 127.125688,
        koName: "IKEA 플래닝 스튜디오 천호",
        subtitle: "현대백화점 천호점 9층",
        subdesc: "서울시 강동구 천호대로 1005",
        link: "http://kko.to/x5pDaaZYo",
    },
    Giheung: {
        x: 37.22289,
        y: 127.116119,
        koName: "IKEA 기흥점",
        subtitle: "현대백화점 천호점 9층",
        subdesc: "10 : 00 AM - 10 : 00 PM",
        link: "http://kko.to/x5pDaaZYo",
    },
    Gwangmyong: {
        x: 37.424324,
        y: 126.882956,
        koName: "IKEA 광명점",
        subtitle: "경기도 광명시 일직로 17",
        subdesc: "10 : 00 AM - 10 : 00 PM",
        link: "http://kko.to/x5pDaaZYo",
    },
    Goyang: {
        x: 37.658462,
        y: 126.83202,
        koName: "IKEA 고양점",
        subtitle: "경기도 고양시 덕양구 권율대로 420",
        subdesc: "10 : 00 AM - 10 : 00 PM",
        link: "http://kko.to/x5pDaaZYo",
    },
    Dongbusan: {
        x: 35.191244,
        y: 129.210549,
        koName: "IKEA 동부산점",
        subtitle: "부산광역시 기장군 기장읍 동부산관광3로 17",
        subdesc: "10 : 00 AM - 10 : 00 PM",
        link: "http://kko.to/x5pDaaZYo",
    },
}

var mapContainer = document.getElementById("map"),
    mapOption = {
        center: new kakao.maps.LatLng(36.9, 127.667101), // 지도의 중심좌표
        level: 12, // 지도의 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP,
    }

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption)

// 마커 생성
// var marker1 = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(ikeaLocation.Sindorim.x, ikeaLocation.Sindorim.y),
//     map: map,
// })
// var marker2 = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(ikeaLocation.Cheonho.x, ikeaLocation.Cheonho.y),
//     map: map,
// })
// var marker3 = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(ikeaLocation.Giheung.x, ikeaLocation.Giheung.y),
//     map: map,
// })
// var marker4 = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(ikeaLocation.Giheung.x, ikeaLocation.Giheung.y),
//     map: map,
// })
// var marker5 = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(ikeaLocation.Gwangmyong.x, ikeaLocation.Gwangmyong.y),
//     map: map,
// })
// var marker5 = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(ikeaLocation.Goyang.x, ikeaLocation.Goyang.y),
//     map: map,
// })
// var marker5 = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(ikeaLocation.Dongbusan.x, ikeaLocation.Dongbusan.y),
//     map: map,
// })

// 커스텀 오버레이를 위한 데이터 불러오기
$(function () {
    $.ajax({
        url: "js/data/ikeamap.json",
        dataType: "json",
        success: function (data) {
            createData(data)
        },
    })
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
        const content = `<div class="overlay">
        <div class="overlay--info">
            <div class="overlay--info__title">${koName}
                <div class="close" onclick="closeOverlay()" title="닫기">닫기</div>
            </div>
            <div class="overlay--info__body">
                <div class="img">
                    <img src="/img/store/shindorim.png" width="73" height="70">
                </div>
                <div class="detail">
                    <div class="overlay--info__ellipsis">${subtitle}</div>
                    <div class="overlay--info__jibun ellipsis">${subdesc}</div>
                </div>
            </div>
        </div>`
        데이터.push(x, y, content)
        for (var j = 0; j < 데이터.length; j++) {
            var marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(데이터[0], 데이터[1]),
                map: map,
            })
            var overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: map,
                position: marker.getPosition(),
            })
            overlay.setMap(null)
            kakao.maps.event.addListener(marker, "click", function () {
                overlay.setMap(map)
            })
        }
    }
}
console.log(overlay)
// $(window).load(function () {
//     console.log(OVERLAY)
//     function closeOverlay() {
//         OVERLAY.setMap(null)
//     }
// })
// // 커스텀 오버레이에 표시할 컨텐츠 입니다
// var content1 = `<div class="overlay">
//                                 <div class="overlay--info">
//                                     <div class="overlay--info__title">${ikeaLocation.Sindorim.koName}
//                                         <div class="close" onclick="closeOverlay()" title="닫기">닫기</div>
//                                     </div>
//                                     <div class="overlay--info__body">
//                                         <div class="img">
//                                             <img src="/img/store/shindorim.png" width="73" height="70">
//                                         </div>
//                                         <div class="detail">
//                                             <div class="overlay--info__ellipsis">제주특별자치도 제주시 첨단로 242</div>
//                                             <div class="overlay--info__jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
//                                         </div>
//                                     </div>
//                                 </div>`

// // 마커 위에 커스텀오버레이를 표시합니다
// var overlay1 = new kakao.maps.CustomOverlay({
//     content: content1,
//     map: map,
//     position: marker1.getPosition(),
// })

// overlay1.setMap(null)

// // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
// kakao.maps.event.addListener(marker1, "click", function () {
//     overlay1.setMap(map)
// })

// // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
// function closeOverlay() {
//     overlay1.setMap(null)
// }
