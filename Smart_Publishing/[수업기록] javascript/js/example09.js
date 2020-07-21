let dropContent = document.getElementById('myDropdown');
let dropDowns = document.getElementsByClassName('dropdown-content');
let btn = document.querySelector('button');

function dropdown() {
    for (var i = 0; i < dropDowns.length; i++) {
        dropDowns[i].classList.add('show');
    }
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        for (var i = 0; i < dropDowns.length; i++) {
            if (dropDowns[i].classList.contains('show')) {
                dropDowns[i].classList.remove('show');
            }
        }
    }
    console.log(e.target);
}