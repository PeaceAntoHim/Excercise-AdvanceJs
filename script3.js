Closure
function init () {
    let nama = 'Frans Sebastian';
    let umur = '33';
    function tampilNama() {
        console.log(nama);
        console.log(umur);
    }
    return tampilNama;
}
let panggilNama = init();
panggilNama();


function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Hallo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
    }
}


let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('Frans Sebastian'));



let add = (function () {

    let counter = 0;
    return function () {
        return ++counter;
    }
})();


counter = 100;

console.log(add());
console.log(add());
console.log(add());