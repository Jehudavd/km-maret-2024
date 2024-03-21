// ARRAY

var numbers = [1,2,3,4,5];

for (var i = 0; i< numbers.length; i++){
    console.log(numbers[i]);
}

/** 
 * Study case 1
 * 
 * Tentukan nilai rata rata dari array berikut
 * 
 * var stats = [10,2,3,7,1,8,5]
 * 
 * result:
 * 5.14
 */

// var stats = [10,2,3,7,1,8,5];
// var total = 0;
// var mean;

// for (var i = 0; i <  stats.length; i++){
//     total += stats[i];
// }
// mean = total /  stats.length;
// console.log("Mean: " + mean.toFixed(2));

/**
 * Study case 2
 * 
 * Pecah sebuah kalimat menjadi per kata
 * 
 * var str = "buka bersama teman kulia seru"
 * 
 * result:
 * ["buka", "bersama", "teman", "kuliah", "seru"]
 */

var str = "buka bersama teman kuliah seru";
var resultArray = [];
var resultStr = "";

    for(var i = 0; i < str.length; i++){
    if(str[i] !== " "){
        resultStr += str[i]
    }else{
        resultArray.push(resultStr)
        resultStr = ''
    }
    if(i === str.length - 1){
        resultArray.push(resultStr)
        resultStr = ''
    }
}

console.log(resultArray)

/**
 * Study case 3
 * 
 * Hitung jumlah voting dari suara vote yang ada.
 * 
 * var votes = ["vincent", "admin", "ncent", "vincent", "ncent", "vincent"]
 * 
 * result:
 * [
 *  ["vincent",3],
 *  ["admin",  1],
 *  ["ncent", 2]
 * ]
 */

var countVincent = 0;
var countAdmin = 0;
var countNcent = 0;

var votes = ["vincent", "admin", "ncent", "vincent", "ncent", "vincent"]

for(var i = 0; i < votes.length; i++){
    if(votes[i] === "vincent"){
        countVincent ++;
    }else if(votes[i] === "admin"){
        countAdmin ++;
    }else if(votes[i] === "ncent"){
        countNcent++;
    }
}

console.log([
    ["vincent", countVincent],
    ["admin", countAdmin],
    ["ncent", countNcent]
])