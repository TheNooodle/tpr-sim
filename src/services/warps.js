import { getSettingValue } from './spoiler'
import { getRoomProvince } from './provinces'

const warpList = {
    "Ordon Province": "skipPrologue",
    "South Faron Woods": "faronTwilightCleared",
    "North Faron Woods": "faronTwilightCleared",
    "Sacred Grove Master Sword": null,
    "Kakariko Gorge": "eldinTwilightCleared",
    "Kakariko Village": "eldinTwilightCleared",
    "Death Mountain Volcano": "eldinTwilightCleared",
    "Eldin Field": null,
    "Outside Castle Town West": "lanayruTwilightCleared",
    "Lake Hylia": "lanayruTwilightCleared",
    "Zoras Domain": "lanayruTwilightCleared",
    "Snowpeak Summit": null,
    "Gerudo Desert": null,
    "Mirror Chamber": null,
}

function isAWarpRoom(roomName) {
    return Object.keys(warpList).includes(roomName)
}

function isActive(warpName, spoilerObject, activatedWarps = []) {
    if (!isAWarpRoom(warpName)) {
        return false
    }

    if (warpName === "Sacred Grove Master Sword") {
        const totEntranceValue = getSettingValue(spoilerObject, "totEntrance")

        return totEntranceValue === "OpenGrove" || totEntranceValue === "Open" || activatedWarps.includes(warpName)
    }

    const defaultActivationCondition = warpList[warpName];
    const isActivatedByDefault = defaultActivationCondition !== null ? getSettingValue(spoilerObject, defaultActivationCondition) : false

    return isActivatedByDefault || activatedWarps.includes(warpName)
}

function getAvailableWarps(visitedProvinces, spoilerObject, activatedWarps = []) {
    let result = []

    for (const warpName in warpList) {
        if (Object.hasOwnProperty.call(warpList, warpName)) {
            const warpProvince = getRoomProvince(warpName)

            if (visitedProvinces.includes(warpProvince) && isActive(warpName, spoilerObject, activatedWarps)) {
                result.push(warpName)
            }
        }
    }

    return result
}

export { isAWarpRoom, isActive, getAvailableWarps }
