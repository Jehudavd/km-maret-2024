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
// const number = 23;

// let count = 0;

// Loop dari 1 hingga bilangan itu sendiri
// for (let i = 1; i <= number; i++) {
//     // Jika bilangan dapat dibagi habis oleh i
//     if (number % i === 0) {
//         count++; // Tambahkan 1 ke jumlah faktor
//     }
// }

// console.log(count);


/**
 * Study case 3
 * 
 * Cek apakah bilangan prima
 */

// if(count === 2){
//     console.log("Bilangan prima");
// }else{
//     console.log("Bukan bilangan prima");
// }

/**
 * Study case 4
 * 
 * Tampilkan bentuk segitiga siku siku
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * 
 */

// Variabel untuk tinggi segitiga
var tinggi = 0;

// Loop untuk menghasilkan setiap baris
for (var i = 1; i <= tinggi; i++) {
    var baris = '';
    // Loop untuk menambahkan '#' sesuai dengan nomor baris
    for (var j = 1; j <= i; j++) {
        baris += '#';
    }
    // Menampilkan baris yang telah dibuat
    console.log(baris);
}

var n = 5;
var result = "";

for(var i = 0; i < n; i++){
    for(var j = 0; j <= i; j++){
        result += '#';
    }
    console.log(result);
    result = "";
}

/**
 * Study case 5
 * 
 * Tampilkan angka dalam bentuk segitiga siku siku
 * 
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

// Variabel untuk tinggi segitiga
var tinggi = 0;

// Loop untuk menghasilkan setiap baris
for (var i = 1; i <= tinggi; i++) {
    var baris = '';
    // Loop untuk menambahkan angka dari 1 hingga i pada setiap baris
    for (var j = 1; j <= i; j++) {
        baris += j;
    }
    // Menampilkan baris yang telah dibuat
    console.log(baris);
}

var x = 5;
var hasil = "";

for(var i = 0; i < x; i++){
    for(var j = 1; j <= i+1; j++){
        hasil += j;
    }
    console.log(hasil);
    hasil = "";
}