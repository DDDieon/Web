var menu = $('#top_menu ul li');
var contents = $('#contents div');


$(function() {
    menu.click(function() {
        event.preventDefault();
        var i = $(this).index();
        var section = contents.eq(i);
        var targetT = section.offset().top;
        $('html, body').stop().animate({ scrollTop: targetT }, 500);

        //-----메뉴의 li에 클래스 추가
        // menu.removeClass('on'); // 모든 li에서 클래스 삭제
        // $(this).addClass('on');

        //-----스크롤이 일정한 위치에 도달했을 때 클래스 on추가
    })
    $(window).scroll(function() {
        var sct = $(window).scrollTop(); // 윈도우의 스크롤 위치. 화면의 위치가 엘리먼트 y좌표를 넘어가면 이벤트.
        contents.each(function(i) {
            if (sct >= $(this).offset().top - 300) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        })
    })

    var k = 0;
    $(document).on('mousewheel', function() {
        var delta = event.wheelDelta / 120; // 기본값이 120이니까 나머지 1
        if (delta == -1) { // 휠을 내리면
            k++;
            delta = 0;
            if (k >= $('#contents div').size() - 1) {
                k = $('#contents div').size() - 1 // div 개수만큼
            }
            var section = $('#contents div').eq(k);
            var tt = section.offset().top;
            $('html, body').stop().animate({ scrollTop: tt }, 1000);
            console.log(k);
        }
        if (delta == 1) { // 휠을 올리면
            k--;
            if (k <= 0) {
                k = 0
            }
            var section = $('#contents div').eq(k);
            var tt = section.offset().top;
            $('html, body').stop().animate({ scrollTop: tt }, 1000);
            console.log(k);
        }
    })
});