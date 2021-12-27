Cara untuk membuat Object pada Javascript
1. Object Literal
let mahasiswa = {
    nama:'Frans',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama}, Selamat Makan!`);
    }
}


2. Function Declarations
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi; 
        console.log(`Hallo ${this.nama}, Selamat Makan!`);  
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Hallo ${this.nama}, Selamat Bermain!`);
    },

    tidur: function (jam) {
        this.energi += 2 * jam;
        console.log(`Hallo ${this.nama}, Selamat Tidur!`);
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let Frans = Mahasiswa('Frans', 10);
let Doddy = Mahasiswa('Doddy', 20);


function Mahasiswa(nama, energi) {
let mahasiswa = Object.create(methodMahasiswa);
  
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, Selamat Makan!`;
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `Hallo ${this.name}, Selamat Tidur!`;
}

let Frans = new Mahasiswa('Frans', 10);






















// 3. Constructor Function
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Hallo ${this.nama}, Selamat Makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Hallo ${this.nama}, Selamat Bermain!`;
    }

    tidur(jam) {
        this.energi += jam;
        return `Hallo ${this.nama}, Selamat Tidur!`;
    }
}


let Frans = new Mahasiswa('Frans', 10);
let aji = new Mahasiswa('Aji', 10);
let abi = new Mahasiswa('Abi', 10);




















// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi; 
//         console.log(`Hallo ${this.nama}, Selamat Makan!`);  
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, Selamat Bermain!`);
//     }
// }


// let Frans = new Mahasiswa('Frans', 10);



// 4. Object.create
