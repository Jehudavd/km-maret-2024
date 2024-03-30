const Note = require(`./Note.js`);

let note = new Note();
note.addIncome("gaji bulan ini", 50000);
note.addExpense("bayar listrik", 50000);
note.listIncome();
note.listExpense();
note.balance();
// console.log(note);