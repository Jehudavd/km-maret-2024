// var buah = ["durian", 75000, true];

// OBJECT

// function changeToObject(array){
//     var result = {}
//     result.jenis = array[0];
//     result.harga = array[1];
//     result.enak = array[2];
//     return result;
// }
// console.log(changeToObject(["Durian", 75000, true]));

var vehicle = {
    name: "Civic",
    cc: 5000,
    brand: "Honda",
    tags: [
        "lcgc", "gas"
    ],
    address: {
        city: "jakarta",
        province: "dki jakarta"
    }
}

// console.log(vehicle.tags)
// console.log(vehicle.address.city)

// for( var key in vehicle){
//     console.log(key);
//     console.log(vehicle[key]);
// }

// console.log(vehicle);

// ARRAY OF OBJECTS

// var items = [
//     {
//         id: 1,
//         name: "Laptop",
//         price: 15000
//     }, {
//         id: 2,
//         name: "Speaker",
//         price: 500
//     }, {
//         id: 2,
//         name: "Speaker",
//         price: 500
//     }
// ]

// console.log(items);

// var student = {
//     name: "Jehuda",
//     gpa: 3.5,
//     isGraduated: false,
// };
// console.log(student.name)

// var caca= {
//     name: "Caca",
//     weight: 45,
//     height: 155,
//     hobbies: ["nonton", "makan"],

//     sebutkanHobby: function (){
//         console.log("Hobby caca: ");
//         for (var i = 0; i < this.hobbies.length; i++){
//             console.log(i +1 + ". " + this.hobbies[i]);
//         }
//     },
//     tambahkanHobby: function (hobbyName){
//         this.hobbies.push(hobbyName);
//     },
// };

// caca.tambahkanHobby("coding")
// caca.sebutkanHobby();

function countVowels(str){
    var result = {
        a: 0,
        i: 0,
        u: 0,
        e: 0,
        o: 0,
    };

    for (var i = 0; i < str.length; i++){
        if (str[i] === "a"){
            result.a++;
        }else if (str[i] === "i"){
            result.i++;
        }else if (str[i] === "e"){
            result.e++;
        }else if (str[i] === "u"){
            result.u++;
        }else if(str[i] === "o"){
            result.o++;
        }
    }

    console.log(result);
}
countVowels("buka puasa bersama teman kuliah");

// tentukan voting atau nama orang nilai bilangan yang sering keluar

/**
 * var votes = ['vincent','vincent','admin']
 * 
 * result:
 * {
 *      vincent: 2,
 *      admin: 1
 * }
 * 
 * pemenang adalah vincent
 */

function countVotes(arr) {
    var result  = {
        vincent: 0,
        admin: 0,
    };

    for (var i = 0; i < arr.length; i++){
        if  (arr[i].toLowerCase() === "vincent"){
            result.vincent++;
        }else if  (arr[i].toLowerCase() === "admin"){
            result.admin++;
        }
    }

    console.log(result);
}

countVotes(["vincent","admin","vincent"]);