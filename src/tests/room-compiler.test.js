const { compileRoomDictionnary } = require('../services/room-compiler')

test('compileRoomDictionnary() should read a directory and compile valid room files into one object', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})

    const roomDictionnaryObject = compileRoomDictionnary(__dirname + "/rooms")

    expect(roomDictionnaryObject['South Faron Woods'].name).toBe('South Faron Woods')
    expect(roomDictionnaryObject['Lost Woods'].checks[0]).toStrictEqual({
        name: 'Lost Woods Lantern Chest',
        peekable: false,
        forceTransition: null
    })
    expect(roomDictionnaryObject['Faron Field'].checks[2]).toStrictEqual({
        name: 'Faron Field Male Beetle',
        peekable: true,
        forceTransition: null
    })
    expect(roomDictionnaryObject['Zoras Domain'].checks[12]).toStrictEqual({
        name: 'Iza Helping Hand',
        peekable: false,
        forceTransition: "Lake Hylia"
    })
    expect(roomDictionnaryObject['Zoras Domain'].checks[13]).toStrictEqual({
        name: 'Iza Raging Rapids Minigame',
        peekable: false,
        forceTransition: "Lake Hylia"
    })
    expect(roomDictionnaryObject['Kakariko Village'].neighbours[0]).toBe('Kakariko Gorge')
    expect(roomDictionnaryObject['Kakariko Village'].province).toBe('Eldin Province')
    expect(roomDictionnaryObject['Death Mountain Volcano'].checks.length).toBe(0)
    expect(roomDictionnaryObject['invalid']).toBeUndefined()
})
