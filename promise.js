// Ajax versi Vanilla javascript

    // const xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function() {
    //     if (xhr.status === 200) {
    //         if (xhr.readyState === 4) {
    //             console.log(JSON.parse(xhr.response));
    //         }
    //     } else {
    //         console.log(JSON.parse(xhr.response));
    //     }
    // }
    // xhr.open('get', 'http://www.omdbapi.com/?apikey=4651f069&s=one piece');
    // xhr.send();

// Ajax versi Baru

    // fetch('http://www.omdbapi.com/?apikey=4651f069&s=one piece')
    //     .then(response => response.json())
    //     .then(response => console.log(response));


// Promise (Definisi)
// (Object yang merepresentasikan keberhasialan / kegagalan sebuah event yang asynchronous di masa yang akan datang)
// janju (terpenuhi / ingkar)
// states (fulfilled / rejacted / pending)
// callback (resolve / reject / finnaly)
// aksi (then / catch)


// Contoh 1
    // let ditepati = false;
    // const janji1 = new Promise((resolve, reject) => {
    //     if (ditepati) {
    //         resolve('Janji telah ditepati!');
    //     } else {
    //         reject('Ingkar janji...');
    //     }
    // });
    
    // janji1
    //     .then(response => console.log('OK! : ' + response))
    //     .catch(response => console.log('NOT OK! : ' + response));

// Contoh 2
    // let ditepati = true;
    // const janji2 = new Promise((resolve, reject) => {
    //     if (ditepati) {
    //         setTimeout(() => {
    //             resolve('Ditepati setelah beberapa waktu');
    //         }, 2000);
    //     } else {
    //         setTimeout(() => {
    //             resolve('Tidak ditepati setelah beberapa waktu');
    //         });
    //     }
    // });

    // console.log('mulai');
    // console.log(janji2.then(() => console.log(janji2)));
    // janji2 
    //     .finally(() => console.log('selesai menunggu!'))
    //     .then(response => console.log('OK! : ' + response))
    //     .then(response => console.log('NOT OK! : ' + response));
    // console.log('selesai');

// Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Deep Blue Sea',
            sutradara: 'Frans Sebastian',
            pemeran: 'Aji, Karin, Desta'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Dki Jakarta',
            temp: '28',
            kondisi: 'Hujan'
        }]);
    }, 500);
});


// film .then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });