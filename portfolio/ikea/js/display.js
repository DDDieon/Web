$(document).ready(function () {
    //alert('123');
    $(".slick-items").slick({
        autoplay: true,
        dots: false,
        speed: 600 /* 이미지가 슬라이딩시 걸리는 시간 */,
        infinite: true,
        autoplaySpeed: 2000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
    })
})
