// toBeNull
// toBeUndefined
// toBeDefined
// toBe
//
//
it('Probar valor nulo',()=>{
    const nulo = null;
    
    expect(nulo).toBeNull() //Validar que esté nulo
    expect(nulo).toBeDefined() //Validar que si fue definido
    expect(nulo).not.toBeUndefined() //Validar que si fue definido pero usando (not) con el toBeUnderfined que es validar que no esté definido
    expect(nulo).not.toBeTruthy() // Valida si el valor es verdadero, es decir que no sea un valor nulo
    expect(nulo).toBeFalsy()
})