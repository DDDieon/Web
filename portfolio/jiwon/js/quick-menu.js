$(function () {
    var quick = $("#quick-menu")
    quick.find(".xi-angle-up").click(function () {
        $("html,body").stop().animate(
            {
                scrollTop: 0,
            },
            300
        )
    })
    quick.find(".xi-angle-down").click(function () {
        var innerHeight = $("html,body").innerHeight()
        $("html,body")
            .stop()
            .animate(
                {
                    scrollTop: $(document).height() - $(window).height(),
                },
                300
            )
    })
})
