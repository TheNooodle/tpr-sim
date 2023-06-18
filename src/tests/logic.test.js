import { checkLogic, tokenize } from '../services/logic'
import { readFileSync } from 'fs'

const spoilerJson = readFileSync(__dirname + '/example_seed.json', 'utf-8')
const spoilerObject = JSON.parse(spoilerJson)
const items = [
    "Shadow Crystal",
    "Giant Bomb Bag",
    "Horse Call",
    "Progressive Sky Book",
    "Progressive Sky Book",
    "Progressive Sky Book",
    "Progressive Sky Book",
    "Gate Keys",
    "Iron Boots",
    "Progressive Bow",
    "Progressive Clawshot",
    "Forest Temple Small Key",
    "Goron Mines Small Key",
    "Goron Mines Small Key",
    "Goron Mines Small Key",
    "Goron Mines Key Shard",
    "Goron Mines Key Shard",
    "Goron Mines Key Shard"
]
const saveObject = {
    spoilerLog: spoilerObject,
    itemsObtained: items
}

test('tokenize() should return the correct tokens for the given requirement', () => {
    expect(tokenize("true")).toStrictEqual([
        {type: "true", value: "true"}
    ])
    expect(tokenize("(Progressive_Clawshot, 1)")).toStrictEqual([
        {type: "openParenthesis", value: "("},
        {type: "item", value: "Progressive_Clawshot"},
        {type: "comma", value: ","},
        {type: "integer", value: "1"},
        {type: "closedParenthesis", value: ")"},
    ])
    expect(tokenize("Shadow_Crystal and (Progressive_Clawshot, 1)")).toStrictEqual([
        {type: "item", value: "Shadow_Crystal"},
        {type: "and", value: "and"},
        {type: "openParenthesis", value: "("},
        {type: "item", value: "Progressive_Clawshot"},
        {type: "comma", value: ","},
        {type: "integer", value: "1"},
        {type: "closedParenthesis", value: ")"},
    ])
    expect(tokenize("Shadow_Crystal and Room.Lake_Hylia and HasSword and hasShield")).toStrictEqual([
        {type: "item", value: "Shadow_Crystal"},
        {type: "and", value: "and"},
        {type: "room", value: "Room.Lake_Hylia"},
        {type: "and", value: "and"},
        {type: "logicFunction", value: "HasSword"},
        {type: "and", value: "and"},
        {type: "logicFunction", value: "hasShield"},
    ])
    expect(tokenize("(Gate_Keys or (Setting.smallKeySettings equals Keysy))")).toStrictEqual([
        {type: "openParenthesis", value: "("},
        {type: "item", value: "Gate_Keys"},
        {type: "or", value: "or"},
        {type: "openParenthesis", value: "("},
        {type: "settings", value: "Setting.smallKeySettings"},
        {type: "equals", value: "equals"},
        {type: "logicFunction", value: "Keysy"},
        {type: "closedParenthesis", value: ")"},
        {type: "closedParenthesis", value: ")"},
    ])
    expect(tokenize("")).toStrictEqual([])
    expect(tokenize(null)).toStrictEqual([])
})

test('checkLogic() should return true if the item has no requirement', () => {
    expect(checkLogic(null, saveObject)).toBeTruthy()
    expect(checkLogic("true", saveObject)).toBeTruthy()
})

test('checkLogic() should return false if the item cannot be taken (edge case)', () => {
    expect(checkLogic("false", saveObject)).toBeFalsy()
})

test('checkLogic() should account for items in the save object', () => {
    expect(checkLogic("Shadow_Crystal", saveObject)).toBeTruthy()
    expect(checkLogic("Progressive_Sword", saveObject)).toBeFalsy()
    expect(checkLogic("(Progressive_Clawshot, 1)", saveObject)).toBeTruthy()
    expect(checkLogic("(Progressive_Clawshot, 2)", saveObject)).toBeFalsy()
    expect(checkLogic("(Goron_Mines_Small_Key, 2)", saveObject)).toBeTruthy()
})

test('checkLogic() should account for logic functions', () => {
    expect(checkLogic("hasDamagingItem", saveObject)).toBeTruthy()
    expect(checkLogic("canSmash", saveObject)).toBeFalsy()
    expect(checkLogic("canDefeatPhantomGanon", saveObject)).toBeTruthy()
    expect(checkLogic("CanDefeatIceKeese", saveObject)).toBeTruthy()
    expect(checkLogic("CanDefeatDangoro", saveObject)).toBeTruthy()
})

test('checkLogic() should account for the seed settings', () => {
    expect(checkLogic("(Setting.smallKeySettings equals Keysy)", saveObject)).toBeFalsy()
    expect(checkLogic("(Setting.smallKeySettings equals Own_Dungeon)", saveObject)).toBeTruthy()
    expect(checkLogic("(Setting.shuffleNpcItems equals true)", saveObject)).toBeTruthy()
    expect(checkLogic("(Setting.shuffleNpcItems equals false)", saveObject)).toBeFalsy()
    expect(checkLogic("(Setting.shufflePoes equals false)", saveObject)).toBeTruthy()
})

test('checkLogic() should properly handle logic operands', () => {
    expect(checkLogic("true and false", saveObject)).toBeFalsy()
    expect(checkLogic("false or true", saveObject)).toBeTruthy()
    expect(checkLogic("CanCompleteIntro and (Lantern or Shadow_Crystal)", saveObject)).toBeTruthy()
    expect(checkLogic("canSmash and (Progressive_Dominion_Rod, 2) and Shadow_Crystal and canLeaveForest", saveObject)).toBeFalsy()
})

test('checkLogic() should work properly in complex scenarios, known to bug the application', () => {
    // Iza Helping Hand
    expect(checkLogic("(Progressive_Bow, 1) and Room.Zoras_Domain and (HasSword or (CanDefeatShadowBeast and (Setting.transformAnywhere equals True)))", saveObject)).toBeTruthy()
})
