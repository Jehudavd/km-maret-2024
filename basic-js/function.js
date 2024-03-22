// FUNCTION

/**
 * Study case 1
 * Buatla sebuah function untuk cek jumlah faktor dari sebuah angka
 * 
 * contoh:
 * cekJumlahFaktor(12)
 * result:
 * 6
 */

function cekJumlahFaktor(num){
    var faktor = 0;
    for (var i = 1; i <= num; i++){ // Mengubah kondisi loop
        if (num % i === 0){
            faktor++;
        }
    }
    return faktor;
}
// console.log(cekJumlahFaktor(12));


// function cekFaktor(angka) {
//     let result = 0;
//     for (let i = 0; i <= angka; i++) {
//       if (angka % i === 0) {
//         result++;
//       }
//     }
//     return result;
//   }
  
//   console.log(cekFaktor(12));

/**
 * Study case 2
 * 
 * Buatlah sebuah function untuk cek apakah bilangan prima atau tidak
 * 
 * contoh:
 * cekBilanganPrima(19)
 * 
 * result:
 * Bilangan Prima
 */

function cekBilanganPrima(num){
    var jumlahFaktor = cekJumlahFaktor(num);
    if (jumlahFaktor === 3){
        return "Bilangan prima";
    }else{
        return "Bukan bilangan prima";
    }
}
// console.log(cekBilanganPrima(19));

/**
 * Study case 3
 * 
 * Buatlah sebuah funtion untuk memecah sebuah kalimat menjadi kata per kata
 * 
 * contoh:
 * pecahKalimat("buka puasa bersama teman kuliah")
 * 
 * result:
 * ["buka", "puasa", "bersama", "teman", "kuliah"]
 */

// function pecahKalimat(str){
//     var arrResult = [];
//     var temp = "";

//     for(var i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             // console.log(str[i])
//             temp += str[i];
//         }else{
//             arrResult.push(temp);
//             temp = "";
//         }
//         if(i ===  str.length - 1){
//             arrResult.push(temp);
//             temp = "";
//         }
//     }
//     console.log(arrResult);
// }

// pecahKalimat("jadi gini");

/**
 * Study case 4
 * 
 * Buatlah sebuah function untuk menghitung rata rata
 * 
 * contoh:
 * countAvarage([1,2,3,4,5])
 * 
 * result:
 * Avarage = 3.00
 */

function countAvarage(numbers){
    var total = 0;
    for(var i = 0;  i < numbers.length;i++){
        total += numbers[i];
    }
    return(total / numbers.length).toFixed(2);
}
console.log(countAvarage([1,2,3,4,5]))