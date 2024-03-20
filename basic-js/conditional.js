// CONDITONAL

/**
 * Study case 1
 * 
 * cek apakah bilangan ganjil atau genap
 * 
 * Buatlah algoritma, pseudocode dan coding
 */

/**
 * ALGORITMA
 * 1. Buat variable number
 * 2. Cek jika number modulus 2 sama dengan 0, maka genap
 * 3. Cek jika number modulus 2 sama dengan 1, maka ganjil
 * 
 * PSEUDOCODE
 * 
 * STORE number WITH ANY NUMBER
 * 
 * IF number MOD 2 EQUAL 0 THEN
 * PRINT "Genap"
 * ELSE
 * PRINT "Ganjil"
 * ENDIF 
 * 
 */

var angka = 2;
if (angka % 2 === 0){
    console.log("Genap");
}else{
    console.log("Ganjil")
}

/**
 * Study case 2
 * 
 * GRADE NILAI
 * 
 * Score 100 - 85, grade A
 * Score 84 - 70, grade B
 * Score 69 - 50. grade C
 * Score 49 - 30, grade D
 * Score 30 - 0, grade E
 * 
 * Buatlah pseudocode dan coding
 */

/**
 * PSEUDOCODE
 * 
 * STORE score WITH ANY NUMBER
 * 
 * IF score GREATER THAN EQUAL 85 AND LESS THAN EQUAL 10 THEN
 * PRINT "Grade A"
 * ELSE IF score GREATER THAN EQUAL 70 AND LESS THAN 85 THEN 
 * PRINT "Grade B"
 * ELSE IF score GREATER THAN EQUAL 50 AND LESS THAN 70 THEN 
 * PRINT "Grade C"
 * ELSE IF score GREATER THAN EQUAL 30 AND LESS THAN 50 THEN 
 * PRINT "Grade D"
 * ELSE IF score GREATER THAN EQUAL 0 AND LESS THAN 30 THEN
 * PRINT "Grade E"
 */

var score = 75;

if (score >= 85 && score <= 100) {
    console.log("Grade A");
} else if (score >= 70 && score < 85) {
    console.log("Grade B");
} else if (score >= 50 && score < 70) {
    console.log("Grade C");
} else if (score >= 30 && score < 50) {
    console.log("Grade D");
} else if (score >= 0 && score < 30) {
    console.log("Grade E");
} else {
    console.log("Invalid score");
}

