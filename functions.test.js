const fns = require('./functions');

test.skip('returnTwo should return 2', () => {
    let result = fns.returnTwo();
    expect(result).toBe(2);
})

test('greeting("James") should return "Hello, James."', () => {
    let result = fns.greeting("James")
    let result2 = fns.greeting("Jill")

    expect(result).toBe("Hello, James.");
    expect(result2).toBe("Hello, Jill.")
})


describe('math test', () => {
    test('add should return sum of num1 and num2', () => {
        let result = fns.add(6,4)
    
        expect(result).toBe(10);
    })
    
    test('multiply(4,6) to return 24', () => {
        let result = fns.multiply(4,6);
    
        expect(result).toBe(24);
    })
    
    test('divide(10,2) should return 5', () => {
        let result = fns.divide(10, 2);
    
        expect(result).toBe(5);
    })
    test("subtract(11, 5) should return 6", () => {
        let result = fns.subtract(11, 5)
    
        expect(result).toBe(6);
    })
})