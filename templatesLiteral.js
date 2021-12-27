Templates Literal  / Template String
    const nama = 'Frans Sebastian';
    const umur = 18;
    console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

Embedded Expression
    console.log(`${1 + 1}`);
    console.log(`${alert('halo!')}`);

    Ternanry opreator
    const x = 10;
    console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); 

HTML Fragments

    1.Basic
        const mhs = {
            nama: 'Frans Sebastian',
            umur: 18,
            nrp: '0855154554',
            email: 'stefanusfranssebastian@gmail.com'
        }


        const el = `<div class="mhs">
            <h2>${mhs.nama}</h2>
            <span class="nrp">${mhs.nrp}</span>
        </div>`;

    2.Looping
        const mhs = [
            {
                nama: 'Frans Sebastian',
                email: 'stefanusfranssebastian@gmail.com'
            }, 
            {
                nama: 'Banu Jokotingkir',
                email: 'banujok@gmail.com'
            }, 
            {
                nama: 'Albert Newgate',
                email: 'newgate_albert@gmail.com'
            }  
        ];

        const el = `<div clss="mhs">
            ${mhs.map(m => `<ul>
                <li>${m.nama}</li>
                <li>${m.email}</li>
            </ul>`).join('')}

        </div>`;

    3.Condational
        ternanry
                const lagu = [
                {
                    judul: 'Tetap Adalah Jiwa',
                    penyanyi: 'Isyana Sarasvati',
                    feat: 'Rezha Fahmi'
                },
                {
                    judul: 'Kasih Bapa',
                    penyanyi: 'Isyana Sarasvati'
                }

            ];

                const el = `<div clss="mhs">
                    ${lagu.map(lagu =>  `<ul>
                    <li>${lagu.penyanyi}</li>
                        <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
                    </ul>`).join('')}
                </div>`;

    4. Nested
        HTML Fragments Nested
            const mhs = {
                nama: 'Frans Sebastian',
                semester: 5,
                mataKuliah: [
                    'Rekayasa Web',
                    'Analisis dan Perancagan Sistem Informasi',
                    'Artificial Inteligance',
                    'Big data',
                    'Pemrograman Sistem Interakritd'
                ]

            };

            function cetakMataKuliah(mataKuliah) {
                return `
                    <ol>
                        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
                    </ol>
                `;
            }

            const el = `<div class="mhs">
                <h2>${mhs.nama}</h2>
                <span class="semester">Semester : ${mhs.semester}</span>
                <h4>Mata Kuliah :</h4>
                    ${cetakMataKuliah(mhs.mataKuliah)}
            </div>`;







    
    document.body.innerHTML = el;

