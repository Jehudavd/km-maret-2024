// OBJECT

let person = {
    name: "Jehuda",
    age: 20,
    skill: ["js", "css"],
};

// console.log(typeof person);

// CLASS

class Person{
    constructor(name, age, skills, address, status){
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.address = address;
        this.status = status;
    }
}
// console.log(typeof Person)

// Instancition = proses instansi / membuat object class

let yuda = new Person("yuda", 20, ["figma"], "manado", true)

let agung = new Person("agung", 21, ["vscode"], "maluku", false)

console.log(yuda);
console.log(agung);