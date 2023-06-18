import validate from 'validate.js'
import RoomList from "../services/room-list.js"
import roomDictionnaryObject from '../services/rooms.json'
import { getStartingItems } from './spoiler.js'

const roomList = new RoomList(roomDictionnaryObject)

const LOCAL_STORAGE_KEY = 'save_state'

function newSave(spoilerJson) {
    if (hasSave()) {
        throw new Error('Save state already exists')
    }

    const spoilerObject = JSON.parse(spoilerJson)

    let constraints = {
        settings: {presence: true},
        "settings.startingItems": {presence: true},
        "settings.excludedChecks": {presence: true},
        requiredDungeons: {presence: true},
        itemPlacements: {presence: true},
        hintResults: {presence: true},
        version: {presence: true},
    }

    if (validate(spoilerObject, constraints) !== undefined) {
        throw new Error('Invalid spoiler log')
    }

    const saveState = {
        spoiler: spoilerObject,
        checkedLocations: [],
        peekedLocations: [],
        visitedProvinces: ['Ordona Province'],
        activatedWarps: [],
        currentRoom: roomList.getRoom("Ordon Province"),
        checkedHints: {},
        itemsObtained: getStartingItems(spoilerObject).map((itemName) => itemName.replaceAll('_', ' '))
    }
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(saveState))

    return saveState
}

function hasSave() {
    return window.localStorage.getItem(LOCAL_STORAGE_KEY) !== null
}

function editSave(saveState) {
    if (!hasSave()) {
        throw new Error('Save state unavailable')
    }

    let newSaveState = getSave()
    const properties = ['checkedLocations', 'peekedLocations', 'visitedProvinces', 'activatedWarps', 'currentRoom', 'checkedHints', 'itemsObtained']
    properties.forEach(property => {
        if (saveState[property] !== undefined) {
            newSaveState[property] = saveState[property]
        }
    });

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSaveState))

    return newSaveState
}

function getSave() {
    if (!hasSave()) {
        return null
    }

    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
}

function deleteSave() {
    if (!hasSave()) {
        throw new Error('Save state unavailable')
    }

    window.localStorage.removeItem(LOCAL_STORAGE_KEY)
}

export { newSave, hasSave, editSave, getSave, deleteSave }
