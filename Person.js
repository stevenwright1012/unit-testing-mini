class Person{
    constructor(birthyear){
        this.age = this.calculateAge(new Date(`01/01/${birthyear}`))
        this.birthyear= birthyear
    }
    calculateAge(birthday){
        let ageDiffMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDiffMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    isMillenial(){
        return this.birthyear > 1982;
    }
    isRetiree(){
        return this.age >= 65
    }
}

// let result = new Person(1990)
// console.log(result.isMillenial())
module.exports = Person