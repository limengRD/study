class Per {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // static info = '这是一个静态属性'

    static fn() {
        console.log('这是一个静态方法')
    }

    show() {
        console.log('这是一个实例方法')
    }
}

const per = new Per('zs',18)

console.log(per.name)