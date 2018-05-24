let Person = require('./Person')

test("1983 should be millennial", () => {
    //arrange
    let personObj = new Person(1983);
    //act
    let result = personObj.isMillenial();
    //assert
    expect(result).toBeTruthy();
})

test("1950 should be age 68", () => {
    let retiree =new Person(1950);

    let result = retiree.age
    
    expect(result).toBe(68)
})