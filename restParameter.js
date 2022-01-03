// Rest Parameter

function myFunc() {
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    // return myArgs;
    // return Array.from(arguments);
    return [...arguments];
    
}

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
    // Cara Biasa
        // let total = 0;
        // for (const a of angka) {
        //     total += a;
        // }

        // return total;
    // Cara Reduced
//         return angka.reduce((a, b) => a + b);

// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// Array distructuring
    // const kelompok1 = ['Frans', 'Herdi', 'Hermawan', 'Erica'];
    // const [ketua, wakil, ...anggota] = kelompok1;
    // console.log(anggota);

// Object Distructuring
    //     const team = {
    //         pm: 'Frans',
    //         frontend1: 'Herdi',
    //         frontend2: 'Erica',
    //         backend: 'Hermawan',
    //         backend: 'Joly',
    //         ux: 'Joy Boy',
    //         devOps: 'Luffy'
    //     }
    // const {pm, ...myTeam} = team;
    // console.log(myTeam);



    // filtering

function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Frans', false, 10, true, 'Joly'));