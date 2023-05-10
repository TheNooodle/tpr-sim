const { checkLocation, checkHint, getBasicHint, isExcluded, getSettingValue } = require('../services/spoiler')
const fs = require('fs')

const spoilerJson = fs.readFileSync(__dirname + '/example_seed.json', 'utf-8')
const spoilerObject = JSON.parse(spoilerJson)

test('checkLocation() should return the correct item', () => {
    const result = checkLocation(spoilerObject, 'Faron Field Corner Grotto Right Chest')

    expect(result).toBe('Progressive Sword')
})

test("checkLocation() should throw an error if the location doesn't exist", () => {
    expect(() => checkLocation(spoilerObject, "Zora's Domain King Zora")).toThrow('Invalid location name')
})

test('checkHint("dungeons") should return the required dungeons', () => {
    const hints = checkHint(spoilerObject, 'dungeons')

    expect(hints[0]).toStrictEqual({
        location: 'Forest Temple',
        item: 'Required dungeon'
    })
    expect(hints[2]).toStrictEqual({
        location: 'Temple of Time',
        item: 'Required dungeon'
    })
})

test("checkHint() should throw an error if the given hint doesn't exist", () => {
    expect(() => checkHint(spoilerObject, "skullhouse_30")).toThrow('Invalid hint name')
})

test('getBasicHint() should return the different hints provided by the generator', () => {
    const hints = getBasicHint(spoilerObject)

    expect(hints[0]).toStrictEqual({
        location: "Faron Field",
        item: "Spirit of Light"
    })
    expect(hints[3]).toStrictEqual({
        location: "Outside West Castle Town",
        item: "Barren"
    })
    expect(hints[6]).toStrictEqual({
        location: "Goron Springwater Rush",
        item: "Bombs 5"
    })
    expect(hints[10]).toStrictEqual({
        location: "Wrestling With Bo",
        item: "Piece of Heart"
    })
})

test('getBasicHint() should return an empty array if no basic hints were generated', () => {
    expect(getBasicHint({test: "test"}).length).toBe(0)
})

test('isExcluded() should tell if a check is excluded or not', () => {
    const result1 = isExcluded(spoilerObject, 'Cave of Ordeals Great Fairy Reward')
    const result2 = isExcluded(spoilerObject, 'Boss Essence Nightmare King Grimm')

    expect(result1).toBeTruthy()
    expect(result2).toBeFalsy()
})

test('getSettingValue() should return the value of the given setting name', () => {
    const result = getSettingValue(spoilerObject, 'lanayruTwilightCleared')

    expect(result).toBeTruthy()
})

test("getSettingValue() should throw an error if the given setting doesn't exist", () => {
    expect(() => getSettingValue(spoilerObject, "shuffleOrdonGoats")).toThrow('Invalid setting name')
})
