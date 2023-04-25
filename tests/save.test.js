const { newSave, editSave, deleteSave } = require('../src/services/save')
const fs = require('fs')

beforeEach(() => {
    const spoilerJson = fs.readFileSync(__dirname + '/example_seed.json', 'utf-8')
    window.localStorage.setItem('save_state', JSON.stringify({
        spoiler: JSON.parse(spoilerJson),
        checkedLocations: ['Uli Craddle Delivery'],
        peekedLocations: ['Sera Shop Slingshot'],
        visitedProvinces: ['Ordona Province'],
        activatedWarps: ['Eldin Field'],
        currentRoom: {
            name: "Ordon Province",
            neighbours: [],
            checks: []
        },
        checkedHints: {}
    }))
})

afterEach(() => {
    window.localStorage.removeItem('save_state')
})

test('newSave() should put a new save state into the local storage', () => {
    window.localStorage.removeItem('save_state')

    newSave(fs.readFileSync(__dirname + '/example_seed.json', 'utf-8'))

    const saveState = JSON.parse(window.localStorage.getItem('save_state'))
    expect(saveState.spoiler.playthroughName).toBe("CriminalArmos_Vg8")
    expect(saveState.checkedLocations).toStrictEqual([])
    expect(saveState.peekedLocations).toStrictEqual([])
    expect(saveState.visitedProvinces).toStrictEqual(['Ordona Province'])
    expect(saveState.activatedWarps).toStrictEqual([])
    expect(saveState.currentRoom.name).toBe('Ordon Province')
    expect(saveState.checkedHints).toStrictEqual({})
})

test('newSave() should throw an error if there is already a save state in local storage', () => {
    expect(() => newSave("{}")).toThrow('Save state already exists')
})

test('newSave() should throw an error if the given spoiler log is invalid', () => {
    window.localStorage.removeItem('save_state')

    expect(() => newSave("{}")).toThrow('Invalid spoiler log')
})

test('editSave() should merge the given save state with the one in the local storage (without ever modifying the spoiler log object)', () => {
    editSave({
        spoiler: JSON.parse('{"playthroughName": "bad spoiler log"}'),
        checkedLocations: ['Wrestling With Bo', 'Ordon Shield'],
        currentRoom: {
            name: "South Faron Woods",
            neighbours: [],
            checks: []
        }
    })

    const saveState = JSON.parse(window.localStorage.getItem('save_state'))
    expect(saveState.spoiler.playthroughName).toBe('CriminalArmos_Vg8')
    expect(saveState.checkedLocations).toStrictEqual(['Wrestling With Bo', 'Ordon Shield'])
    expect(saveState.peekedLocations).toStrictEqual(['Sera Shop Slingshot'])
    expect(saveState.currentRoom.name).toBe('South Faron Woods')
})

test('editSave() should throw an error if no save state is present in the local storage', () => {
    window.localStorage.removeItem('save_state')

    expect(() => editSave({})).toThrow('Save state unavailable')
})

test('deleteSave() should clear the local storage', () => {
    deleteSave()

    expect(window.localStorage.getItem('save_state')).toBeNull()
})

test('deleteSave() should throw an error if no save state is present in the local storage', () => {
    window.localStorage.removeItem('save_state')

    expect(() => deleteSave()).toThrow('Save state unavailable')
})
