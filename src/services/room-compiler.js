import { readdirSync, statSync, readFileSync } from 'fs'
import { join, basename, parse } from 'path'
import { validate } from 'validate.js'
import { getRoomProvince } from './provinces'

const peekableChecks = [
    "Arbiters Grounds Stallord Heart Container",
    "City in The Sky Argorok Heart Container",
    "Forest Temple Diababa Heart Container",
    "Goron Mines Fyrus Heart Container",
    "Lakebed Temple Morpheel Heart Container",
    "Palace of Twilight Zant Heart Container",
    "Snowpeak Ruins Blizzeta Heart Container",
    "Temple of Time Armogohma Heart Container",
    "Eldin Field Male Grasshopper",
    "Eldin Field Female Grasshopper",
    "Bridge of Eldin Male Phasmid",
    "Bridge of Eldin Female Phasmid",
    "Kakariko Gorge Spire Heart Piece",
    "Kakariko Gorge Male Pill Bug",
    "Kakariko Gorge Female Pill Bug",
    "Kakariko Village Bomb Rock Spire Heart Piece",
    "Kakariko Village Female Ant",
    "Kakariko Graveyard Male Ant",
    "Kakariko Village Malo Mart Hylian Shield",
    "Kakariko Village Malo Mart Hawkeye",
    "Faron Field Tree Heart Piece",
    "Faron Field Male Beetle",
    "Faron Field Female Beetle",
    "Sacred Grove Male Snail",
    "Sacred Grove Female Snail",
    "Bulblin Guard Key",
    "Bulblin Camp Roasted Boar",
    "Gerudo Desert Male Dayfly",
    "Gerudo Desert Female Dayfly",
    "Castle Town Malo Mart Magic Armor",
    "Lake Hylia Bridge Male Mantis",
    "Lake Hylia Bridge Female Mantis",
    "Lanayru Field Male Stag Beetle",
    "Lanayru Field Female Stag Beetle",
    "Outside South Castle Town Male Ladybug",
    "Outside South Castle Town Female Ladybug",
    "West Hyrule Field Male Butterfly",
    "West Hyrule Field Female Butterfly",
    "Fishing Hole Heart Piece",
    "Zoras Domain Male Dragonfly",
    "Upper Zoras River Female Dragonfly",
    "Sera Shop Slingshot"
]

const forcedTransitions = {}

function getAllFiles(folder, allFiles) {
    let folderFiles = readdirSync(folder)
    allFiles = allFiles || []

    folderFiles.forEach((file) => {
        if (statSync(folder + "/" + file).isDirectory()) {
            allFiles = getAllFiles(folder + "/" + file, allFiles)
        } else if (file.endsWith('.json') || file.endsWith('.jsonc')) {
            const filePath = join(folder, "/", file)
            allFiles.push(filePath)
        }
    })

    return allFiles
}

function compileRoomDictionnary(folder) {
    let roomDictionnaryObject = {}
    const files = getAllFiles(folder)
    const constraints = {
        "Neighbours": {presence: true, type: "array"},
        "Checks": {presence: true, type: "array"},
    }
    
    files.forEach((file) => {
        try {
            const roomObject = JSON.parse(readFileSync(file))
            const fileName = basename(file)
            const roomName = parse(fileName).name
            if (validate(roomObject, constraints) !== undefined) {
                throw new Error("Validation error")
            }
            const province = getRoomProvince(roomName)

            const checkNames = roomObject.Checks.filter((checkName) => {
                return checkName !== ""
            })
            const checks = checkNames.map((checkName) => ({
                name: checkName,
                peekable: peekableChecks.includes(checkName),
                forceTransition: forcedTransitions[checkName] !== undefined ? forcedTransitions[checkName] : null
            }))

            roomDictionnaryObject[roomName] = {
                name: roomName,
                neighbours: roomObject.Neighbours,
                checks: checks,
                province: province
            }
        } catch(e) {
            console.error("Cannot read file " + file + ": " + e)
        }
    })

    // Override for Plumm and Iza
    if ((currentRoom = roomDictionnaryObject['Lake Hylia']) !== undefined) {
        currentRoom.checks = currentRoom.checks.filter((room) => {
            return room.name != "Iza Helping Hand" && room.name != "Iza Raging Rapids Minigame"
        })
        currentRoom.checks.push({
            name: "Plumm Fruit Balloon Minigame",
            peekable: false,
            forceTransition: "Zoras Domain"
        })
    }
    if ((currentRoom = roomDictionnaryObject['Zoras Domain']) !== undefined) {
        currentRoom.checks = currentRoom.checks.filter((room) => {
            return room.name != "Plumm Fruit Balloon Minigame"
        })
        currentRoom.checks.push({
            name: "Iza Helping Hand",
            peekable: false,
            forceTransition: "Lake Hylia"
        })
        currentRoom.checks.push({
            name: "Iza Raging Rapids Minigame",
            peekable: false,
            forceTransition: "Lake Hylia"
        })
    }

    return roomDictionnaryObject
}

export { compileRoomDictionnary }
