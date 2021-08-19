it('2+2=4', ()=>{
    expect(2+2).toBe(4)
})

it('Validar un objeto', ()=>{
    const data = {username: 'Andres A'}
    const data2 = {username: 'yari'}

    expect(data).toEqual({username:'Andres A'})
    expect(data).not.toEqual(data2)
})