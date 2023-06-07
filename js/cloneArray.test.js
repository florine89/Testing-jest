const cloneArray = require('./cloneArray')

test('properly clone array', () => {
    const Array = [1,2,3]
    expect(
        cloneArray(Array)
        ).toEqual(Array)
})
//ici on met toEqual à la place de toBe car c'est une copie au tableau et ça ne devient pas
//un autre tableau sinon ça ne fonctionne pas