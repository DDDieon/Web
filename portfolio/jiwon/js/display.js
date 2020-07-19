// scroll event
$(function () {
    var btn = $('.nav_list li button');
    btn.click(function () {
        event.preventDefault(); // 기본이벤트 x
        event.stopPropagation(); // 상위전달x
        var i = $(this).parent().index(); // li의 i번째
        if (i == 4) {
            $(this).off;
            console.log('click');
        } else {
            var sectionTT = $('section').eq(i).offset().top //div들의 y좌표
            $('html, body').stop().animate({
                scrollTop: sectionTT //html, body의 y좌표는 i번째 div의 좌표가 된다
            })
        }

    })
})

// slick slide

$(document).ready(function () {
    $('.slick-items').slick({
        autoplay: true,
        dots: true,
        speed: 300 /* 이미지가 슬라이딩시 걸리는 시간 */ ,
        infinite: true,
        autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */ ,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false
    });
});


// footer close
var footerClose = document.getElementById('footerClose');
var footer = document.getElementById('footer');
footerClose.onclick = function () {
    footer.style.display = 'none';
}