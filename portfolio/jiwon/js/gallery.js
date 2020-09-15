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
            '<a href="https://beecanvas.com/s/7aEbbrJ3be6fLzSMKJ21QmjHkrEONNHRQ8ze5dMO25TvJ1orEyjSYJxy-ZzwFuDn" class="menu3_link" target="_black"></a>'
        )
    })
    $(".carousel_item_3").click(function () {
        $(this).wrap(
            '<a href="/photozone/design.html" class="menu4_link" target="_black"></a>'
        )
    })
    $(".carousel_item_4").click(function () {
        $(this).wrap(
            '<a href="/photozone/video.html" class="menu5_link" target="_black"></a>'
        )
    })
    $(".carousel_item_5").click(function () {
        $(this).wrap(
            '<a href="https://www.notion.so/a51be3e0c8d045f9ba3fa49157f368f0" class="menu6_link" target="_black"></a>'
        )
    })
})


// *** contact 클릭시에도 gallery 반응 --------
$(function () {
    $(".profile-words").on('click', function () {
        galleryIsBody.classList.add("galleryIsBody")
    })
})