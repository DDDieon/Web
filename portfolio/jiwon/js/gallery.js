// ------------ gallery open, close-------------
var galleryIsBody = document.getElementById("gallery-body")

function openGallery() {
    galleryIsBody.classList.add("galleryIsBody")
}

function closeGallery() {
    galleryIsBody.classList.remove("galleryIsBody")
}

//------------ gallery draggable from JQuery UI------------
$(function () {
    $("#dragdiv").draggable({ axis: "x" })
})
