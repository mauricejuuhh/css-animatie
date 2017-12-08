const knop = document.getElementById('knop');
var vlak = document.getElementsByClassName('vlakje');
var a = 0;
const schuif = () => {
//
// for (var i = 0; i < 4;) {
//   setTimeout(function () {
//         vlak[i].classList.toggle('vlakje--schuif-uit');
//   }, 500);
// }
if (a == 0) {
  a = 1;
  itemAni();
}
}


function itemAni() {
    setTimeout(function () {
          vlak[a - 1].classList.toggle('vlakje--schuif-uit');
          if (a < 5) {a++; itemAni();}
          if (a == 5) {a=0;}
    }, 200);
}
knop.addEventListener('click', schuif);
