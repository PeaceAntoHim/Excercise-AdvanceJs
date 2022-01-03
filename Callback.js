// Callback

    // Synchronous Callback
        // cara pertama
            // function halo(nama) {
            //     alert(`Hallo, ${nama}`);
            // }

        // cara kedua
            // function tampilkanPesan(callback) {
            //     const nama = prompt('masukan');
            //     callback(nama);
            // }

            // tampilkanPesan(nama => alert(`Halo, ${nama}`));
    

    // const mhs = 
    // [
    //     {
    //         "nama": "Frans Sebastian",
    //         "nrp": "0855454545154",
    //         "email": "stefanusfranssebastian@gmail.com",
    //         "jurusan": "Teknik informatika",
    //         "idDosenWali": 1
    //     },
    //     {
    //         "nama": "Ibnu Hajar",
    //         "nrp": "0151554545154",
    //         "email": "ibnu.hajar@kominfo.id",
    //         "jurusan": "Computer Science",
    //         "idDosenWali": 2
    //     },
    //     {
    //         "nama": "Monkey D Luffy",
    //         "nrp": "085545564454",
    //         "email": "monkey.dluffy@kaizo.com",
    //         "jurusan": "Teknik bajak laut",
    //         "idDosenWali": 3
    //     }
    // ];
    // console.log('mulai');
    // mhs.forEach(m => {
    //     for( let i = 0; i < 100000000; i++ ) {
    //         let date = new Date();
    // }
    //     console.log(m.nama)
    // });
    // console.log('selesai');

// Asynchronous Callback
    // Cara Vanilla Javascript
        // function getDataMahasiswa(url, success, error) {
        //     let xhr = new XMLHttpRequest();

        //     xhr.onreadystatechange = function() {
        //         if(xhr.readyState === 4) {
        //             if(xhr.status === 200) {
        //                 success(xhr.response);
        //             } else if (xhr.status === 404) {
        //                 error();
        //             }
        //         }
        //     }

        //     xhr.open('get', url);
        //     xhr.send();

        // }

        // console.log('mulai');
        // getDataMahasiswa('mahasiswa.json', results => {
        //     const mhs = JSON.parse(results);
        //     mhs.forEach(m => console.log(m.nama));
        // }, () => {
        // });
        // console.log('selesai');

    // Cara Jquery
        // console.log('mulai');
        //     $.ajax({
        //         url: 'mahasiswa.json',  
        //         success: (mhs) => {
        //             mhs.forEach(m => console.log(m.nama));
        //         },
        //         error: (e) => {
        //             console.log(e.responseText);
        //         }
        //     });
        // console.log('selesai');

    // Callback Excercise
    