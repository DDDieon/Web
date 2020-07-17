// scroll event
$(function() {
    var btn = $('.nav_list li button');
    btn.click(function() {
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



// footer close
var footerClose = document.getElementById('footerClose');
var footer = document.getElementById('footer');
footerClose.onclick = function() {
    footer.style.display = 'none';
}