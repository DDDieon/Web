$(function () {
    let current = 0
    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop() //스크롤의 맨 윗단
        const WindowHeight = $(window).height() //내가 지금 보고있는 화면의 맨 밑단
        const nowTop = scrollTop + WindowHeight //내가 지금 보고있는 화면의 스크롤높이
        const documentHeight = $(document).height()

        if (nowTop >= documentHeight - 2200) {
            infinityClone()
        }

        function infinityClone() {
            var copy = $(".productMainItem:lt(10)").clone()
            copy.each(function (i) {
                $(this)
                    .find(".name_of_product")
                    .html("제품이름 " + Number(i + current + 10))
                console.log(current)
            })
            $("#productMain").append(copy)
            current = current + 10
        }
    })
})
