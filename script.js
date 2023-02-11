const txtElement = ['Web Developer','Web Designer','Digital Marketer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex)
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();

const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle ('bx-x')
    navlist.classList.toggle ('open')
}

window.onscroll = () => {
    menu.classList.remove ('bx-x')
    navlist.classList.remove ('open')
}