// Array 
        //  const mhs = ['Frans', 'Sandhika', 'Lio'];

    // For biasa
        // for (let i = 0; i < mhs.length; i++) {
        //     console.log(mhs[i]);
        // }

    // forEach
        // mhs.forEach(m => console.log(m));

    // for.off
        // for (const m of mhs) {
        //     console.log(m);
        // }

// String
    // const nama = 'Frans';
    // for (const n of nama) {
    //     console.log(n);
    // }
    
    
    // const mhs = ['Frans', 'Sandhika', 'Lio'];
    // mhs.forEach((m, i) => {
    //     console.log(`${m} adalah mahasiswa ke-${i +1}`);
    // });

    // for (const [i, m] of mhs.entries()) {
    //     console.log(`${m} adalah mahasiswa ke-${i +1}`);
    // }

// NodeList
    // const liNama = document.querySelectorAll('.nama');
    // Use forEach
        // liNama.forEach(n => console.log(n.textContent));
    
    // use for of 
        // for (n of liNama) {
        //     console.log(n.innerHTML);
        // }
    
    // arugments
        // function jumlahkanAngka() {
            // Tidak bisa menggunakn cara array
                // return arguments.reduce((a,i) => a + i);

            // tidak bisa menggunakan foreEach
                // arguments.forEach(a => jumlah += a)
            
            // Bisa pakai for of
        //         let jumlah = 0;
        //             for (a of arguments) {
        //                 jumlah += a;
        //             }
        //         return jumlah;
        //     }

        // console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
    nama: 'Frans',
    umur: 18,
    email: 'stefanusfranssebastian@gmail.com'
}

for( m in mhs ) {
    console.log(mhs[m]);
}