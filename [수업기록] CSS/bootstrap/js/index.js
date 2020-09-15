$(document).ready(function () {})
var ham = $(".hamburger")
var disBox = $(".display_box")
ham.on("click", function () {
    disBox.slideToggle()
})
