import { readdirSync, statSync, readFileSync } from 'fs'
import { join, basename, parse } from 'path'
import { validate } from 'validate.js'
import { getRoomProvince } from './provinces.js'

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
    let roomFiles = []
    let checkFilesDictionnary = {}
    const files = getAllFiles(folder)
    const roomFileConstraints = {
        "Neighbours": {presence: true, type: "array"},
        "Checks": {presence: true, type: "array"},
        "NeighbourRequirements": {presence: true, type: "array"},
    }
    const checkFileConstraints = {
        "requirements": {presence: true, type: "string"},
    }
    files.forEach((file) => {
        try {
            const fileContentObject = JSON.parse(readFileSync(file))
            const fileName = basename(file)
            const roomOrCheckName = parse(fileName).name
            if (validate(fileContentObject, roomFileConstraints) === undefined) {
                roomFiles.push(file)
            } else if (validate(fileContentObject, checkFileConstraints) === undefined) {
                checkFilesDictionnary[roomOrCheckName] = file
            } else {
                throw new Error("Validation error")
            }
        } catch (e) {
            console.error("Cannot read file " + file + ": " + e)
        }
    })

    roomFiles.forEach((file) => {
        try {
            const roomObject = JSON.parse(readFileSync(file))
            const fileName = basename(file)
            const roomName = parse(fileName).name
            const province = getRoomProvince(roomName)

            const checkNames = roomObject.Checks.filter((checkName) => {
                return checkName !== ""
            })
            const checks = checkNames.map((checkName) => {
                let requirements = null
                if (checkFilesDictionnary[checkName] !== undefined) {
                    const checkFileContent = JSON.parse(readFileSync(checkFilesDictionnary[checkName]))
                    requirements = checkFileContent.requirements
                }

                return {
                    name: checkName,
                    peekable: peekableChecks.includes(checkName),
                    forceTransition: forcedTransitions[checkName] !== undefined ? forcedTransitions[checkName] : null,
                    requirements: requirements
                }
            })
            let neighbours = []
            roomObject.Neighbours.forEach((neighbourName, index) => {
                neighbours.push({
                    name: neighbourName,
                    requirements: roomObject.NeighbourRequirements[index]
                })
            })

            roomDictionnaryObject[roomName] = {
                name: roomName,
                neighbours: neighbours,
                checks: checks,
                province: province
            }
        } catch(e) {
            console.error("Cannot read file " + file + ": " + e)
        }
    })

    // Override for Plumm and Iza
    let currentRoom = null
    if ((currentRoom = roomDictionnaryObject['Lake Hylia']) !== undefined) {
        currentRoom.checks = currentRoom.checks.filter((room) => {
            return room.name != "Iza Helping Hand" && room.name != "Iza Raging Rapids Minigame"
        })
        let requirements = null
        if (checkFilesDictionnary["Plumm Fruit Balloon Minigame"] !== undefined) {
            const checkFileContent = JSON.parse(readFileSync(checkFilesDictionnary["Plumm Fruit Balloon Minigame"]))
            requirements = checkFileContent.requirements
        }
        currentRoom.checks.push({
            name: "Plumm Fruit Balloon Minigame",
            peekable: false,
            forceTransition: "Zoras Domain",
            requirements: requirements
        })
    }
    if ((currentRoom = roomDictionnaryObject['Zoras Domain']) !== undefined) {
        currentRoom.checks = currentRoom.checks.filter((room) => {
            return room.name != "Plumm Fruit Balloon Minigame"
        })
        let requirements = null
        if (checkFilesDictionnary["Iza Helping Hand"] !== undefined) {
            const checkFileContent = JSON.parse(readFileSync(checkFilesDictionnary["Iza Helping Hand"]))
            requirements = checkFileContent.requirements
        }
        currentRoom.checks.push({
            name: "Iza Helping Hand",
            peekable: false,
            forceTransition: "Lake Hylia",
            requirements: requirements
        })
        requirements = null
        if (checkFilesDictionnary["Iza Raging Rapids Minigame"] !== undefined) {
            const checkFileContent = JSON.parse(readFileSync(checkFilesDictionnary["Iza Raging Rapids Minigame"]))
            requirements = checkFileContent.requirements
        }
        currentRoom.checks.push({
            name: "Iza Raging Rapids Minigame",
            peekable: false,
            forceTransition: "Lake Hylia",
            requirements: requirements
        })
    }

    return roomDictionnaryObject
}

export { compileRoomDictionnary }
