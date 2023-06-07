const sum = require('./sum')
const sum2 = require('./sum2')

test('properly adds two numbers', () => {
    expect(
        sum(1, 2)
        ).toBe(3)
    // if (sum(1, 2 ) === 3) {
    //     good
    // }else {
    //     throw Error
    // }
    expect(
        sum2(5,8,2)
        ).toBe(15)

})