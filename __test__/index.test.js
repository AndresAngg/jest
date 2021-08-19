const index = require('../src/index');

describe('Pruebas para multiplication', () =>{
    test('2 * 2 es 4', ()=>{
        expect(index(2,2)).toBe(4)
        console.log(index(2,2))
    })
    it('3 * 3 es 9', ()=>{
        expect(index(3,3)).toBe(9)
    })  
});