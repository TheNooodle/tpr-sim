import { create } from "zustand"
import { checkHint as checkHintInSpoiler } from "../services/spoiler";
import RoomList from "../services/room-list"
import roomDictionnaryObject from '../services/rooms.json'
import { newSave, editSave, getSave, deleteSave } from "../services/save";

const saveState = getSave()
const roomList = new RoomList(roomDictionnaryObject)

const useSaveStateStore = create((set) => ({
    spoilerLog: saveState ? saveState.spoiler : null,
    checkedLocations: saveState ? saveState.checkedLocations : null,
    peekedLocations: saveState ? saveState.peekedLocations : null,
    visitedProvinces: saveState ? saveState.visitedProvinces : null,
    activatedWarps: saveState ? saveState.activatedWarps : null,
    currentRoom: saveState ? saveState.currentRoom : null,
    checkedHints: saveState ? saveState.checkedHints : null,
    itemsObtained: saveState ? saveState.itemsObtained : null,
    uploadSpoiler: (spoilerJson) => set((state) => {
        const saveState = newSave(spoilerJson)

        return {
            spoilerLog: saveState.spoiler,
            checkedLocations: saveState.checkedLocations,
            peekedLocations: saveState.peekedLocations,
            visitedProvinces: saveState.visitedProvinces,
            activatedWarps: saveState.activatedWarps,
            currentRoom: saveState.currentRoom,
            checkedHints: saveState.checkedHints,
            itemsObtained: saveState.itemsObtained,
        }
    }),
    deleteSave: () => set((state) => {
        deleteSave()

        return {
            spoilerLog: null,
            checkedLocations: null,
            peekedLocations: null,
            visitedProvinces: null,
            activatedWarps: null,
            currentRoom: null,
            checkedHints: null,
            itemsObtained: null,
        }
    }),
    checkLocation: (locationName) => set((state) => {
        const checkedLocations = state.checkedLocations.includes(locationName) ? state.checkedLocations : state.checkedLocations.concat([locationName])
        const saveState = editSave({
            checkedLocations: checkedLocations
        })

        return {
            checkedLocations: saveState.checkedLocations
        }
    }),
    peekLocation: (locationName) => set((state) => {
        const peekedLocations = state.peekedLocations.includes(locationName) ? state.peekedLocations : state.peekedLocations.concat([locationName])
        const saveState = editSave({
            peekedLocations: peekedLocations
        })

        return {
            peekedLocations: saveState.peekedLocations
        }
    }),
    activateWarp: (warpName) => set((state) => {
        const activatedWarps = state.activatedWarps.includes(warpName) ? state.activatedWarps : state.activatedWarps.concat([warpName])
        const saveState = editSave({
            activatedWarps: activatedWarps
        })

        return {
            activatedWarps: saveState.activatedWarps
        }
    }),
    setCurrentRoom: (roomName) => set((state) => {
        const newState = {}
        const newRoom = newState.currentRoom = roomList.getRoom(roomName)
        editSave({
            currentRoom: newRoom
        })
        const provinceName = newRoom.province
        if (provinceName !== undefined) {
            newState.visitedProvinces = state.visitedProvinces.includes(provinceName) ? state.visitedProvinces : state.visitedProvinces.concat([provinceName])
            editSave({
                visitedProvinces: newState.visitedProvinces
            })
        }

        return newState
    }),
    checkHint: (hintName) => set((state) => {
        let newHints = Object.assign({}, state.checkedHints)
        if (newHints[hintName] === undefined) {
            newHints[hintName] = checkHintInSpoiler(state.spoilerLog, hintName)
            editSave({
                checkedHints: newHints
            })
        }

        return {
            checkedHints: newHints
        }
    }),
    obtainItem: (itemName) => set((state) => {
        const itemsObtained = state.itemsObtained.concat([itemName])
        const saveState = editSave({
            itemsObtained: itemsObtained
        })

        return {
            itemsObtained: saveState.itemsObtained
        }
    }),
}))

export default useSaveStateStore
