let newsBox1 = document.querySelector('.news_box01');
let newsModul = document.querySelector('#news_modul');



// window.onclick = function(event) {
//  if (newsModul.classList.contains('newsShow')) {
//     if (!event.target.matches('#news_modul')) {
//         newsModul.classList.remove('newsShow');
//         alert('돌');
//     }
//     }
// }

newsBox1.addEventListener('click', function() {
    newsModul.classList.add('newsShow');
})
window.addEventListener('click', function(event) {
    if (!event.target.matches('img', 'div')) {
        newsModul.classList.remove('newsShow');
        console.log(event.target);
    }
})

//-------- 일정시간 마우스 오버 --------

newsBox1.addEventListener("mouseover", function(e) {
    setTimeChk();
});
var setTimeChk = function(arg) {
    var i = arg || 0;
    if (i >= 2) return console.log('ff');
    setTime = window.setTimeout(function() {
        clearTimeChk(setTime);
        return setTimeChk(++i);
    }, 1000);
}
var clearTimeChk = function(arg) {
    window.clearTimeout(arg);
}
newsBox1.addEventListener("mouseleave", function() {
    clearTimeChk(setTime);
});