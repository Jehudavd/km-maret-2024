// LOOPING

/**
 * Study case 1
 * 
 * Tampilkan 10 bilangan ganjil dan genap pertama
 */

// var angka = 10;

// for(var i= 1; i<= angka; i++){
//     if(i %2 === 0){
//         console.log(i + ' adalah genap');
//     }else{
//         console.log(i + ' adalah ganjil');
//     }
// }

/**
 * Study case 2
 * 
 * Tentukan jumlah faktor dari sebuah bilangan
 */

// Masukkan bilangan di sini
const number = 23;

let count = 0;

// Loop dari 1 hingga bilangan itu sendiri
for (let i = 1; i <= number; i++) {
    // Jika bilangan dapat dibagi habis oleh i
    if (number % i === 0) {
        count++; // Tambahkan 1 ke jumlah faktor
    }
}

console.log(count);


/**
 * Study case 3
 * 
 * Cek apakah bilangan prima
 */

if(count === 2){
    console.log("Bilangan prima");
}else{
    console.log("Bukan bilangan prima");
}