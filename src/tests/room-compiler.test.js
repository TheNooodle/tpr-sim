const { compileRoomDictionnary } = require('../services/room-compiler')

test('compileRoomDictionnary() should read a directory and compile valid room files into one object', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})

    const roomDictionnaryObject = compileRoomDictionnary(__dirname + "/rooms")

    expect(roomDictionnaryObject['South Faron Woods'].name).toBe('South Faron Woods')
    expect(roomDictionnaryObject['Lost Woods'].checks[0]).toStrictEqual({
        name: 'Lost Woods Lantern Chest',
        peekable: false,
        forceTransition: null,
        requirements: null
    })
    expect(roomDictionnaryObject['Faron Field'].checks[2]).toStrictEqual({
        name: 'Faron Field Male Beetle',
        peekable: true,
        forceTransition: null,
        requirements: null
    })
    expect(roomDictionnaryObject['Zoras Domain'].checks[12]).toStrictEqual({
        name: 'Iza Helping Hand',
        peekable: false,
        forceTransition: "Lake Hylia",
        requirements: null
    })
    expect(roomDictionnaryObject['Zoras Domain'].checks[13]).toStrictEqual({
        name: 'Iza Raging Rapids Minigame',
        peekable: false,
        forceTransition: "Lake Hylia",
        requirements: null
    })
    expect(roomDictionnaryObject['Kakariko Village'].neighbours[0]).toStrictEqual({
        name: 'Kakariko Gorge',
        requirements: "true"
    })
    expect(roomDictionnaryObject['South Faron Woods'].neighbours[3]).toStrictEqual({
        name: 'Faron Mist Area',
        requirements: "canSmash and (Progressive_Dominion_Rod, 2) and Shadow_Crystal and canLeaveForest"
    })
    expect(roomDictionnaryObject['Kakariko Village'].province).toBe('Eldin Province')
    expect(roomDictionnaryObject['Death Mountain Volcano'].checks.length).toBe(0)
    expect(roomDictionnaryObject['invalid']).toBeUndefined()
    expect(roomDictionnaryObject['South Faron Woods'].checks[0]).toStrictEqual({
        name: 'Coro Bottle',
        peekable: false,
        forceTransition: null,
        requirements: "canCompletePrologue"
    })
    expect(roomDictionnaryObject['South Faron Woods'].checks[1]).toStrictEqual({
        name: 'Faron Woods Owl Statue Sky Character',
        peekable: false,
        forceTransition: null,
        requirements: "canSmash and (Progressive_Dominion_Rod, 2) and canClearForest"
    })
})
