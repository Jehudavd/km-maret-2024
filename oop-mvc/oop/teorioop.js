// INHERITANCE

class Person {
    constructor(name, job, isGraduated, city, skills){
        this.name = name;
        this.job = job;
        this.isGraduated = isGraduated;
        this.city = city;
        this.skills = skills;
    }
}

class Developer extends Person {
    constructor(name, isGraduated, city, skills, status){
        super(name, "developer", isGraduated, city, skills);
        this.status = status;
    }
}

class Designer extends Person {
    constructor(name, isGraduated, city, skills, tools){
        super(name, "designer", isGraduated, city, skills);
        this.tools = tools;
    }
}

let developer = new Developer("yuda", true, "medan", ["js", "css", "masih sendiri"])
let designer = new Designer("agung", false, "maluku", [], "figma")

console.log(developer);
console.log(designer);