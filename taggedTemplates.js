// // Tagged Templates
//     const nama = 'Frans Sebastian';
//     const umur = 18;

//     function coba(strings, ...values) {
//         // let result = '';
//         // strings.forEach((str, i) => {
//         //     result += `${str}${values[i]} || ''`;
//         // });
//         // return result;  


//         return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
//     }

//     const str = coba`Hallo nama saya ${nama}, saya ${umur} tahun,`;
//     console.log(str);

// Highlight

// Tagged Templates
const nama = 'Frans Sebastian';
const umur = 18;
const email = 'stefanussfranssebastian@gmail.com';

function highlight(strings, ...values) { 
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Hallo nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

document.body.innerHTML = str; 


    