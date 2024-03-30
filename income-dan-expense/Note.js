const { Income, Expense } = require(`./IncomeExpense.js`);

class Note {
    constructor(list){
        this.list = list || [];
    }
    addIncome(name, total){
        let income = new Income(name, total, `income`);
        this.list.push(income);
    }
    addExpense(name, total){
        let expense = new Expense(name, total, `expense`);
        this.list.push(expense);
    }
    listIncome(){
        console.log("List Income : ");
        this.list.forEach(inc => {
                if(inc.category === `income`){
                console.log(`${inc.name}, Rp. ${inc.total}`)
            }
        })
    }
    listExpense(){
        console.log("List Expense : ");
        this.list.forEach(inc => {
                if(inc.category === `expense`){
                console.log(`${inc.name}, Rp. ${inc.total}`)
            }
        })
    }
    balance(){
        let totalIncome = 0;
        let totalExpense = 0;
        this.list.forEach(el => {
            if(el.category === `income`){
                totalIncome += el.total;
            }else if(el.category === `expense`){
                totalExpense += el.total;
            }
        })

        // Status: plus, minus, balanced
        let total = totalIncome - totalExpense;
        if(total === 0){
            console.log("Status : balanced!");
        }else if(total < 0){
            console.log("Status : minus!");
        }else if(total > 0){
            console.log("Status : plus!");
        }
    }
}

module.exports = Note;