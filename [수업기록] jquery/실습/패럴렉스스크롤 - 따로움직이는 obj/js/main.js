$(function () {
    var section = $("#contents > .parallax > div")
    var sectionInfo = []
    var objectInfo = []
    var totalSize = section.size()

    section.each(function (i) {
        var tg = $(this)
        sectionInfo.push(tg.offset().top) //배열에 section의 top 추가
        objectInfo.push([]) //배열에 section의 개수를 추가
        var child = tg.children() // section의 자식 => obj
        child.each(function (j) {
            //obj의 인덱스 j는 i=0일때 9개, i=1일때 7개, i=2일때 3개
            var t = $(this)
            objectInfo[i][j] = t.position().top
            console.log(objectInfo)
        })

        var upBtn = tg.find("> .tit > .arrow > a:eq(0)")
        var downBtn = tg.find("> .tit > .arrow > a:eq(1)")

        upBtn.click(function (e) {
            e.preventDefault()
            if (i == 0) return
            move(i - 1)
        })

        downBtn.click(function (e) {
            e.preventDefault()
            if (i == totalSize - 1) return
            move(i + 1)
        }) //기본 버튼조작
    })

    function move(sectionIndex) {
        var tt = sectionInfo[sectionIndex]
        $("html, body").stop().animate({ scrollTop: tt }, { duration: 600, ease: "easeOutCubic" })
    }

    section.css("position", "fixed")
    // fixed면 안움직이는데 각각 section과 obj의 top값을 음수로해서 수치를 내리면, top은 올라간다

    $(window).scroll(function () {
        var sct = $(window).scrollTop()

        section.each(function (i) {
            var 개별section = $(this)
            var tt = -1 * sct + sectionInfo[i]
            if (sct > sectionInfo[i]) tt *= 0.5

            개별section.css("top", tt)

            var child = 개별section.children()
            child.each(function (j) {
                var 개별obj = $(this)
                var start = sectionInfo[i]
                var end = sectionInfo[i + 1]
                if (!end) end = $(document).height()
                var min = objectInfo[i][j]
                //움직이기 전의 obj의 위치값
                var max = objectInfo[i][j] + j * 200 + 100 //j를 곱했으니 몇번째 div냐에 따라서 비례하는 값이 커짐
                var objT = ((sct - start) * (max - min)) / (end - start) + min //이동할 거리의 비례식
                개별obj.css({ top: objT })
                // obj07이 제일 느리고, obj06이 제일 빨리 움직인다
            })
        })
    })
})
