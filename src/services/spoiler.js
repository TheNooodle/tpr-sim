const DUNGEON_HINT_MAPPING = {
    "ForestTemple": "Forest Temple",
    "GoronMines": "Goron Mines",
    "LakebedTemple": "Lakebed Temple",
    "ArbitersGrounds": "Arbiters Grounds",
    "SnowpeakRuins": "Snowpeak Ruins",
    "TempleOfTime": "Temple of Time",
    "CityInTheSky": "City in The Sky",
    "PalaceOfTwilight": "Palace of Twilight",
}

function checkLocation(spoilerObject, locationName) {
    if (spoilerObject.itemPlacements[locationName] === undefined) {
        throw new Error('Invalid location name')
    }

    return spoilerObject.itemPlacements[locationName].replaceAll('_', ' ')
}

function checkHint(spoilerObject, hintName) {
    if (hintName === 'dungeons') {
        let hints = []
        spoilerObject.requiredDungeons.forEach((dungeonName) => {
            if (DUNGEON_HINT_MAPPING[dungeonName] !== undefined) {
                hints.push({
                    location: DUNGEON_HINT_MAPPING[dungeonName],
                    item: 'Required dungeon'
                })
            }
        })

        return hints
    }

    throw new Error('Invalid hint name')
}

function getBasicHint(spoilerObject) {
    if (spoilerObject.hintResults === undefined || spoilerObject.hintResults.basic === undefined) {
        return []
    } else {
        let hints = []
        if (spoilerObject.hintResults.basic['Spirit of Light'] !== undefined) {
            spoilerObject.hintResults.basic['Spirit of Light'].forEach((region) => {
                hints.push({
                    location: region,
                    item: 'Spirit of Light'
                })
            })
        }
        if (spoilerObject.hintResults.basic['Barren'] !== undefined) {
            spoilerObject.hintResults.basic['Barren'].forEach((region) => {
                hints.push({
                    location: region,
                    item: 'Barren'
                })
            })
        }
        if (spoilerObject.hintResults.basic['Always'] !== undefined) {
            Object.keys(spoilerObject.hintResults.basic['Always']).forEach((location) => {
                hints.push({
                    location: location,
                    item: spoilerObject.hintResults.basic['Always'][location].replaceAll('_', ' ')
                })
            })
        }
        if (spoilerObject.hintResults.basic['Sometimes'] !== undefined) {
            Object.keys(spoilerObject.hintResults.basic['Sometimes']).forEach((location) => {
                hints.push({
                    location: location,
                    item: spoilerObject.hintResults.basic['Sometimes'][location].replaceAll('_', ' ')
                })
            })
        }

        return hints
    }
}

function isExcluded(spoilerObject, checkName) {
    return spoilerObject.settings.excludedChecks.includes(checkName)
}

function getSettingValue(spoilerObject, settingName) {
    if (spoilerObject.settings[settingName] === undefined) {
        throw new Error('Invalid setting name')
    }

    return spoilerObject.settings[settingName]
}

function getStartingItems(spoilerObject) {
    return getSettingValue(spoilerObject, "startingItems")
}

export { checkLocation, checkHint, getBasicHint, isExcluded, getSettingValue, getStartingItems }
