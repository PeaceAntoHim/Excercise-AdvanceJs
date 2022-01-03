// Spread Opreator
    // Memecah iterables menjadi single element

    // const mhs = ['Frans', 'Joko', 'Albright'];
    // console.log(...mhs[0]);

    // Menggabukan 2 array 
    // const mhs = ['Frans', 'Joko', 'Albright'];
    // const dosen = ['Aden', 'Sandhika', 'Oden nit'];
    // const orang = [...mhs, 'aji', ...dosen];    
    // const orang = mhs.concat(dosen);

    // console.log(orang);


// Meng-copy array
    // const mhs = ['Frans', 'Joko', 'Albright'];
    // const mhs1 = [...mhs];
    // mhs1[0] = 'Fakui';
    // console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;