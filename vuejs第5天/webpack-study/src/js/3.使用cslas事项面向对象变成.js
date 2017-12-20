class Per {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

}

class GDper extends Per{
    constructor(name,age,gender) {
        super(name,age)
        this.gender = gender
    }
}

const gdr = new GDper('zs',18,'男')
console.log(gdr.name)
console.log(gdr.gender)