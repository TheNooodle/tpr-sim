const { isActive, getAvailableWarps } = require('../src/services/warps')

const spoilerObject = {
    "settings": {
        "skipPrologue": true,
        "faronTwilightCleared": true,
        "eldinTwilightCleared": true,
        "lanayruTwilightCleared": false,
        "totEntrance": "OpenGrove"
    }
}

test('getActiveWarp() should return warps activated by default', () => {
    expect(getAvailableWarps(['Ordona Province'], spoilerObject)).toStrictEqual(['Ordon Province'])
    expect(getAvailableWarps(['Eldin Province'], spoilerObject)).toStrictEqual([
        'Kakariko Gorge', 'Kakariko Village', 'Death Mountain Volcano'
    ])
    expect(getAvailableWarps(['Eldin Province'], spoilerObject, ['Eldin Field'])).toStrictEqual([
        'Kakariko Gorge', 'Kakariko Village', 'Death Mountain Volcano', 'Eldin Field'
    ])
    expect(getAvailableWarps(['Faron Province'], spoilerObject)).toStrictEqual(['South Faron Woods', 'North Faron Woods', 'Sacred Grove Master Sword'])
    expect(getAvailableWarps(['Lanayru Province'], spoilerObject)).toStrictEqual([])
    expect(getAvailableWarps(['Gerudo Desert'], spoilerObject)).toStrictEqual([])
    expect(getAvailableWarps(['Ice Cavern'], spoilerObject)).toStrictEqual([])
})

test('isActive() should return true for active warps (default or not)', () => {
    expect(isActive('Ordon Province', spoilerObject)).toBeTruthy()
    expect(isActive('Sacred Grove Master Sword', spoilerObject)).toBeTruthy()
    expect(isActive('Eldin Field', spoilerObject)).toBeFalsy()
    expect(isActive('Eldin Field', spoilerObject, ['Eldin Field'])).toBeTruthy()
    expect(isActive('Zoras Domain', spoilerObject)).toBeFalsy()
    expect(isActive('Snowpeak Summit', spoilerObject)).toBeFalsy()
    expect(isActive('Ice Cavern', spoilerObject)).toBeFalsy()
    expect(isActive('Ice Cavern', spoilerObject, ['Ice Cavern'])).toBeFalsy()
})
