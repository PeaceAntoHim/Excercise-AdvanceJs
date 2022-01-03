// Destructuring Variable


// Destructuring Array
    // const perkenalan = ['Halo', 'nama', 'saya', 'Frans Sebastian'];

// Skipping Items

// const [salam, satu, dua, nama] = perkenalan;
    // const [salam, , , nama] = perkenalan;
    // console.log(nama);

// Swamp Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
    // function coba() {
    //     return [1, 2]; 
    // }

    // const [a, b] = coba();
    // console.log(b);

// Rest Parameter
    // const[a, ...values] = [1, 2, 3, 4, 5];
    // console.log(a);
    // console.log(values);

// Destructuring Object
    // const mhs = {
    //     nama: 'Frans Sebastian',
    //     umur: 33
    // }

    // const {nama, umur} = mhs;
    // console.log(nama);

// Assignment without declaration object

    // ({nama, umur} = {
    //     nama: 'Frans Sebastian',
    //     umur: 33
    // });
    // console.log(nama);

// Assignment to new variable
// const mhs = {
//         nama: 'Frans Sebastian',
//         umur: 18
//     }

//     const {nama: n, umur: u} = mhs;
//     console.log(u);

// Memberikan Default Value
    // const mhs = {
    //         nama: 'Frans Sebastian',
    //         umur: 18,
    //         email: 'stefanusfranssebastian@gmail.com'
    //     }

    //     const {nama, umur, email = 'email@dfault.com'} = mhs;
    //     console.log(email);

// Memberi nilai default + assign ke vaiabel baru
    // const mhs = {
    //             nama: 'Frans Sebastian',
    //             umur: 18,
    //             email: 'stefanusfranssebastian@gmail.com'
    //         }

    //         const {nama: n, umur: u, email: e = 'email@dfault.com'} = mhs;
    //         console.log(e);

// Rest parameter
    // const mhs = {
    //     nama: 'Frans Sebastian',
    //     umur: 18,
    //     email: 'stefanusfranssebastian@gmail.com'
    // }

    // const {nama, ...value} = mhs;
    // console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'Frans Sebastian',
//     umur: 18,
//     email: 'stefanusfranssebastian@gmail.com'
// }

// function getIdMhs({ id }) {
//     return id;
// }

// console.log(getIdMhs(mhs));



// Study Case Destructuring

    function calculation(a, b) {
        return [a + b, a - b, a * b];
    }

    // const jumlah = penjumlahanPerkalian(2, 3)[0];
    // const kali = penjumlahanPerkalian(2, 3)[1];

    // const [jumlah, kali] = penjumlahanPerkalian(2, 3);
    // console.log(jumlah);
    // console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = calculation(2,3);
// console.log(bagi);

// Object Distructuring
    // function kalkulasi(a, b) {
    //     return {
    //         tambah: a + b,
    //         kurang: a - b,
    //         kali: a * b,
    //         bagi: a / b
    //     }
    // }

    // const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
    // console.log(kurang);

// Destructuring function arguments
    // Cara Pertama
        // const mhs1 = {
        //     nama: 'Frans Sebastian',
        //     umur: 18,
        //     email: 'stefanusfranssebastian@gmail.com'
        // }

        // function cetakMhs(nama, umur) {
        //     return `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
        // }

        // console.log(cetakMhs(mhs1.nama, mhs1.umur));
    // Cara Kedua
        // const mhs1 = {
        //     nama: 'Frans Sebastian',
        //     umur: 18,
        //     email: 'stefanusfranssebastian@gmail.com'
        // }
        
        // function cetakMhs(mhs) {
        //     return `Hallo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
        // }
        
        // console.log(cetakMhs(mhs1));

    // Cara Ketiga
    const mhs1 = {
        nama: 'Frans Sebastian',
        umur: 18,
        email: 'stefanusfranssebastian@gmail.com',
        nilai: {
            tugas: 80,
            uts: 85,
            uas: 75
        }
    }
    
    function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
        return `Hallo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
    }
    
    console.log(cetakMhs(mhs1));

    

