//gallery open, close-------------
var galleryIsBody = document.getElementById("gallery-body")

function openGallery() {
    galleryIsBody.classList.add("galleryIsBody")
}

function closeGallery() {
    galleryIsBody.classList.remove("galleryIsBody")
}

//gallery draggable from JQuery UI------------
$(function () {
    $("#dragdiv").draggable({
        axis: "x"
    })
})

//gllaery page link--------------
$(function () {
    $(".carousel_item_1").click(function () {
        $(this).wrap('<a href="https://github.com/DDDieon" class="menu1_link" target="_black"></a>')
    })
    $(".carousel_item_2").click(function () {
        $(this).wrap(
            '<a href="https://beecanvas.com/s/7aEbbrJ3be6fLzSMKJ21QmjHkrEONNHRQ8ze5dMO25TvJ1orEyjSYJxy-ZzwFuDn" class="menu2_link" target="_black"></a>'
        )
    })
    $(".carousel_item_2").click(function () {
        $(this).wrap(
            '<a href="https://beecanvas.com/s/7aEbbrJ3be6fLzSMKJ21QmjHkrEONNHRQ8ze5dMO25TvJ1orEyjSYJxy-ZzwFuDn" class="menu2_link" target="_black"></a>'
        )
    })
    $(".carousel_item_3").click(function () {
        $(this).wrap(
            '<a href="/photozone/design.html" class="menu2_link" target="_black"></a>'
        )
    })
    $(".carousel_item_4").click(function () {
        $(this).wrap(
            '<a href="/photozone/video.html" class="menu2_link" target="_black"></a>'
        )
    })
})


// *** contact 클릭시에도 gallery 반응 --------
$(function () {
    $(".profile-words").on('click', function () {
        galleryIsBody.classList.add("galleryIsBody")
    })
})