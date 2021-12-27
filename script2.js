2.1 EXCEUTION CONTEXT, HOISTING & SCOPE

Var nama = 'Frans Sebastian'
console.log(nama)

creation phase pada Global Context
nama var = undefined
nama function = fn()
hoisting
window global object
this = window

execution phase



console.log(sayHello());
var nama = 'Frans';
var umur = '18';    

function sayHello() {
    return `Halo, nama saya ${nama}, saya ${umur} tahun`;
}

function membuat Local Execution Context
yang di dalamnya terdapat creation dan execution phase
window
arguments
hoisting


var name = 'Frans Sebastian';
var username = '@frans_sbstian'

function cetakURL(username) {
    var instagramURL = 'https://instagram.com/'
    return instagramURL + username;
}

console.log(cetakURL(username));


function a() {
    console.log('ini a');
    function b() {
        console.log('ini b');
        function c() {
            console.log('ini c');
        }
        c()
    }
    b()
}
a()

function satu() {
    var nama = 'Frans Sebastian';
    console.log(nama);  
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Sutejo';
satu();
dua('Darui');
console.log(nama);