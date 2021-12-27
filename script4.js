Function Expression
const tampilNama = function (nama) {
    return `Halo, ${nama}`;
}
console.log(tampilNama('Frans Sebastian'));

const tampilNama = (nama) => { return `Halo, ${nama}`; };
console.log('Stefanus Jiman');

const tampilNama = {nama, waktu} => {
    return `Selamat ${waktu}, ${nama}`;
}

console.log(tampilNama('Abi', 'Manyun'));



implisit return
const tampilNama = nama => `Halo, ${nama}`;
console.log('Frans Sebastian');

lebih Simple
const tampilNama = () => `Hello World!`;
console.log(tampilNama());


let mahasiswa = ['Frans','Mia','Yohannes','Aryo'];

let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(jumlahHuruf);


let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);





concept this in Arrow Function

Constructor Function

const Mahasiswa = function () {
    this.nama = 'Frans Sebastian'
    this.umur = 18;
    this.sayHello = function () {
        console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}


const frans = new Mahasiswa;


Arrow Function

const Mahasiswa = function () {
    this.nama = 'Frans Sebastian';
    this.umur = 18;
    this.sayHello = function () => {
        console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    }
}

const frans = new Mahasiswa;


Object Literal

const mhs1 = {
    nama: 'Frans Sebastian',
    umur: 18,
    sayHello: function () {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}

const Mahasiswa = function () {
    this.nama = 'Frans Sebastian';
    this.umur = 18;
    this.sayHello = function () {
        console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const frans = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
});